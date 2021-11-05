import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  CityStateView,
  InputScroll,
  ComunityInputIcon,
  Container,
  ErrorMessage,
  HalfInputView,
  Input,
  InputBox,
  InputContainer,
  InputMask,
  InputView,
  MaterialInputIcon,
  RegisterButtonView,
  TitleContainer,
  TitleHighlight,
  TitleText,
  TouchableTitle,
} from './styles';
import { CreateUser } from '../../services/userServices/createUser';
import { DefaultButton } from '../../components/Button';

export function Register() {
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState<string | undefined>();
  const [userEmail, setUserEmail] = useState<string | undefined>();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailValidMessage, setIsEmailValidMessage] = useState('');
  const [userPhone, setUserPhone] = useState<string | undefined>();
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPhoneValidMessage, setIsPhoneValidMessage] = useState('');
  const [userState, setUserState] = useState<string | undefined>();
  const [userCity, setUserCity] = useState<string | undefined>();
  const [userPassword, setUserPassword] = useState<string | undefined>();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordValidMessage, setIsPasswordValidMessage] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState<
    string | undefined
  >();
  const [adminToken, setAdminToken] = useState<string | undefined>();

  const validateEmail = (email: string) => {
    if (email) {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      if (email.length > 254) {
        setIsEmailValidMessage('Email muito extenso!');
        setIsEmailValid(false);
      } else if (!emailRegex.test(email)) {
        setIsEmailValidMessage('Formato de email inválido!');
        setIsEmailValid(false);
      } else if (email.split('@')[0].length > 64) {
        setIsEmailValidMessage('Email muito extenso!');
        setIsEmailValid(false);
      } else setIsEmailValid(true);
    }
  };

  const validatePassword = (password: string) => {
    if (userPassword !== password) {
      setIsPasswordValidMessage('Digite a mesma senha!');
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const validatePhone = (phone: string) => {
    if (phone.length < 15) {
      setIsPhoneValidMessage('Tamanho de telefone inválido!'),
        setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  };

  const handleRegister = async () => {
    let alertMessage = '';
    if (
      userName &&
      userEmail &&
      userPhone &&
      userState &&
      userCity &&
      userPassword &&
      userConfirmPassword
    ) {
      if (isEmailValid && isPasswordValid && isPhoneValid) {
        try {
          await CreateUser(
            userName,
            userEmail,
            userPhone,
            userState,
            userCity,
            userPassword,
            admin,
            adminToken,
          );
          alertMessage = 'Conta criada com sucesso!';
        } catch (error: any) {
          console.log(error);
          alertMessage = error.response.data.message;
        }
      } else {
        alertMessage = 'Preencha todos os dados corretamente!';
      }
    } else {
      alertMessage =
        'Preencha todos os campos de dados para realizar o cadastro!';
    }
    Alert.alert('Cadastro', alertMessage, [
      {
        text: 'Ok',
      },
    ]);
  };

  const handleEmailInput = (email: string) => {
    setUserEmail(email);
    validateEmail(email);
  };

  const handlePassword = (password: string) => {
    setUserConfirmPassword(password);
    validatePassword(password);
  };

  const handlePhone = (phone: string) => {
    setUserPhone(phone);
    validatePhone(phone);
  };

  return (
    <Container>
      <TitleContainer>
        <TouchableTitle
          onPress={() => {
            setAdmin(false);
          }}
        >
          <TitleText admin={admin}>Usuário</TitleText>
          {admin ? null : <TitleHighlight />}
        </TouchableTitle>
        <TouchableTitle
          onPress={() => {
            setAdmin(true);
          }}
        >
          <TitleText admin={!admin}>Pesquisador</TitleText>
          {admin ? <TitleHighlight /> : null}
        </TouchableTitle>
      </TitleContainer>
      <InputScroll>
        <InputContainer>
          <InputView>
            <MaterialInputIcon name="person-outline" />
            <Input
              placeholder="Nome"
              value={userName}
              onChangeText={setUserName}
            />
          </InputView>
          <InputBox />
          <InputView>
            <MaterialInputIcon name="mail-outline" />
            <Input
              placeholder="Email"
              value={userEmail}
              onChangeText={handleEmailInput}
            />
          </InputView>
          {isEmailValid ? (
            <InputBox />
          ) : (
            <ErrorMessage>{isEmailValidMessage}</ErrorMessage>
          )}
          <InputView>
            <ComunityInputIcon name="phone-outline" />
            <InputMask
              type="cel-phone"
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              value={userPhone}
              onChangeText={handlePhone}
              placeholder="Telefone"
            />
          </InputView>
          {isPhoneValid ? (
            <InputBox />
          ) : (
            <ErrorMessage>{isPhoneValidMessage}</ErrorMessage>
          )}
          <CityStateView>
            <HalfInputView>
              <ComunityInputIcon name="compass-outline" />
              <Input
                placeholder="Estado"
                value={userState}
                onChangeText={setUserState}
              />
            </HalfInputView>
            <HalfInputView>
              <ComunityInputIcon name="city" />
              <Input
                placeholder="Cidade"
                value={userCity}
                onChangeText={setUserCity}
              />
            </HalfInputView>
          </CityStateView>

          <InputBox />
          <InputView>
            <MaterialInputIcon name="lock-outline" />
            <Input
              placeholder="Senha"
              secureTextEntry
              value={userPassword}
              onChangeText={setUserPassword}
            />
          </InputView>
          <InputBox />
          <InputView>
            <MaterialInputIcon name="lock-outline" />
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              value={userConfirmPassword}
              onChangeText={handlePassword}
            />
          </InputView>
          {isPasswordValid ? (
            <InputBox />
          ) : (
            <ErrorMessage>{isPasswordValidMessage}</ErrorMessage>
          )}
          {admin ? (
            <>
              <InputView>
                <ComunityInputIcon name="key-outline" />
                <Input
                  placeholder="Código de Pesquisador"
                  value={adminToken}
                  onChangeText={setAdminToken}
                />
              </InputView>
              <InputBox />
            </>
          ) : null}
          <RegisterButtonView>
            <DefaultButton text="Cadastrar" buttonFunction={handleRegister} />
          </RegisterButtonView>
        </InputContainer>
      </InputScroll>
    </Container>
  );
}
