# Codi quiz

Teste seus conhecimentos respondendo quizzes relacionados à tecnologia da informação e programação.

<div align="center">
  <img src="/public/assets/imgs/preview.png" width="100%" />
</div>

## Para rodar o projeto localmente

1.  Instale as dependências utilizando seu gerenciador de pacotes favoritos:  
    `npm install`  
    ou  
    `yarn install` (a partir daqui vou usar como exemplo o yarn)

2.  Defina as variáveis de ambiente:  
     Copie o arquivo de exemplo.  
     `cp .env.example .env`

    Ajuste a URL da API, caso necessário  
    `REACT_APP_API_URL="http://localhost:4000"`

3.  Rode a aplicação  
    `yarn start`

## Tecnologias e bibliotecas utilizadas

Bootstrapped com [Create React App](https://github.com/facebook/create-react-app).

React@^18.0.0: framework utilizado no desenvolvimento;  
chakra-ui@ ^2.8.2: biblioteca de estilização;  
framer-motion@^11.18.0, emotion@^11.14.0: animações;  
react-redux@^8.0.4 reduxjs/toolkit@^1.8.5: gerenciamento de estado;  
react-hook-form@^7.54.2: formulários e validação;  
axios@^1.7.9: cliente HTTP utilizado para requisições das services;  
react-router@^7.1.2: roteamento;  
slick-carousel@^1.8.1 e react-slick@^0.30.2: carrossel.
