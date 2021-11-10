# 2021.1-Pro-Especies-UserInterface

## 1. Ambiente de desenvolvimento
Para fazer uso do ambiente de desenvolvimento é necessário possuir dois pacotes instalados.
* Node.js
* npm
* yarn
* expo

## 1.1 Mas o que é npm, o yarn e o expo?
Npm e o Yarn são gerenciadores de pacotes para o Node.JS. Para mais informações acesse o [site oficial do npm](https://www.npmjs.com/) e do [Yarn](https://classic.yarnpkg.com/en/)
Já o Expo é plataforma open-source para fazer aplicativos nativos universais para Android, iOS e web com JavaScript e React.

### 1.1.1 Instalação do ambiente
*O tutorial será baseado em sistemas Debian-based ou seja Ubuntu, Mint, Debian e etc*

Primeiro se faz necessário dar o seguinte comando:

```bash
sudo apt-get update
```

Agora se faz necessário a instalação de aguns pacotes de pré-requisitos:

```bash
sudo apt install nodejs
```

Após isso, podemos instalar o npm e em seguida o yarn:

```bash
sudo apt install npm
```

```bash
npm install --global yarn
```

```bash
sudo apt update
```

Por fim instale o Expo-cli:

```bash
npm install --global expo-cli
```

## 2. Subindo a aplicação localmente
Antes de executar o Expo para subir a aplicação é necessário atualizar as dependências

```bash
yarn install
```

Após instalar as dependências, rode o Expo usando o comando
```bash
expo start
```

Por fim, utilize o aplicativo do Expo, no celular, para escanear o QR code e executar o aplicativo.
