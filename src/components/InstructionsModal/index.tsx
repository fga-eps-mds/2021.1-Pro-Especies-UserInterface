import React, { useState, useEffect } from "react";
import { Modal, Alert } from "react-native";
import { CloseButton, CloseButtonIcon, ModalContainer, ModalDescripton, ModalImage, ModalImageIconContainer, ModalTitle, ModalView } from "./styles";

import { getImage } from "../../utils/getInstructionImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DisableIconButton } from "../DisableIconButton";
import { DefaultButton } from "../Button";
interface ModalProps {
    modalVisible: boolean,
    dismissModal: () => void,
}
export const InstructionModal = ({ modalVisible, dismissModal }: ModalProps) => {
    const [modalDescriptions, setModalDescriptions] = useState([
        "Na tela de biblioteca, você pode visualizar informações sobre os mais diversos peixes.",
        "Na tela de registro, você pode registrar informações sobre peixes que pescou em sua região, clicando no botão \“Adicionar Registro\”, para ajudar o mapeamento das especécies.",
    ]);
    const [currentPosition, setCurrentPosition] = useState(1);
    const handleClick = (number: number) => {
        if (currentPosition + number < 1) return
        if (currentPosition + number > 3) return
        setCurrentPosition(currentPosition + number);
    }

    const addLastDescription = async () => {
        const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
        if (userAdmin === "true") {
            setModalDescriptions(modalDescriptions => [...modalDescriptions, "Como pesquisador, você pode revisar os detalhes de um registro criado por qualquer usuário."]);
        }
        else {
            setModalDescriptions(modalDescriptions => [...modalDescriptions, "Seus registros serão avaliados por pesquisadores e os dados serão utilizadas no mapeamento e preservação de espécies."]);


        }
    }
    useEffect(() => {
        addLastDescription();
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={dismissModal}>
            <ModalContainer>
                <ModalView>
                    <CloseButton onPress={dismissModal}>
                        <CloseButtonIcon name="close" />
                    </CloseButton>
                    <ModalTitle>
                        Como funciona o aplicativo EuPescador?
                    </ModalTitle>
                    <ModalImageIconContainer>
                        <DisableIconButton name="arrow-left" disabled={currentPosition === 1} onPress={() => handleClick(-1)} />
                        {getImage(currentPosition)}
                        <DisableIconButton name="arrow-right" disabled={currentPosition === 3} onPress={() => handleClick(+1)} />
                    </ModalImageIconContainer>
                    <ModalDescripton>
                        {modalDescriptions[currentPosition - 1]}
                    </ModalDescripton>
                    {currentPosition === 3 ?
                        <DefaultButton text="Ir para o aplicativo" buttonFunction={dismissModal} /> :
                        <>
                        </>
                    }
                </ModalView>
            </ModalContainer>
        </Modal>
    );
}

