📦 PokeDesk

📖 Descrição

O PokeDesk é uma aplicação web desenvolvida em React que consome a API pública PokéAPI para listar e exibir informações detalhadas de Pokémons.

A aplicação realiza requisições dinâmicas para buscar dados de até 100 Pokémons, exibindo-os em cards com estilização baseada no tipo de cada Pokémon. O projeto demonstra conceitos importantes de React como componentização, uso de hooks e consumo de API.

🚀 Tecnologias

Este projeto foi desenvolvido com:

⚛️ React 19 – Biblioteca principal
⚡ Vite – Build tool moderna e rápida
🌐 JavaScript (ESModules) – Lógica da aplicação
🎨 HTML5 & CSS3 – Estrutura e estilos
🔄 Fetch API – Consumo da API externa
🧠 React Hooks
useState
useEffect

▶️ Como Rodar
1. Clone o repositório
git clone https://github.com/seu-usuario/pokedesk.git

2. Acesse a pasta
cd pokedesk

3. Instale as dependências
npm install

4. Rode o projeto
npm run dev

5. Acesse no navegador
http://localhost:5173

✨ Funcionalidades
🧩 Lista de Pokémons com Componentes React
Renderização dinâmica usando o componente PokemonCard
Lista de até 100 Pokémons
Componentização reutilizável

🔗 Consumo de API com useEffect

Requisição para:
https://pokeapi.co/api/v2/pokemon?limit=100
Carregamento automático ao iniciar a aplicação
Uso de Promise.all para buscar detalhes individuais
Tratamento de:
Loading (Carregando...)
Erro (Erro ao carregar dados)

🎨 Estilização Dinâmica por Tipo

Cada Pokémon recebe cor baseada no tipo
Sistema de cores definido no objeto cores dentro do App.jsx

📁 Estrutura do Projeto

Pokedesk-main/

│── public/
│   ├── favicon.svg
│   ├── icons.svg
│
│── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   ├── vite.svg
│
│   ├── components/
│   │   ├── PokemonCard.jsx
│
│   ├── App.jsx
│   ├── App.css
│   ├── styles.css
│   ├── index.css
│   ├── main.jsx
│
│── index.html
│── package.json
│── vite.config.js

🧠 Conceitos Aplicados

Componentização com React
Hooks (useState, useEffect)
Consumo de API REST
Manipulação de múltiplas requisições assíncronas
Renderização condicional (loading/erro)
Estilização baseada em dados dinâmicos

👨‍💻 Autor

Desenvolvido por Marcos Vinícius
