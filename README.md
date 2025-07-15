# Pluga Challenge Front

Este projeto é uma reestruturação do desafio de frontend da **Pluga**, com foco em boas práticas de organização, tipagem, testes e automação.

---

## O que foi implementado

- **Migração completa de React com Vite para Next.js**
  - Melhorando o suporte a SSR, rotas e organização de páginas
- **Remoção de dependências não utilizadas**
  - Código limpo, sem pacotes desnecessários
- **Conversão completa para TypeScript**
  - Toda a aplicação foi tipada com precisão, reduzindo erros e melhorando a escalabilidade
- **Separação clara de responsabilidades**
  - Componentes, funções, chamadas de API e utilitários organizados por contexto para facilitar manutenção e escalabilidade.
- **Implementação de testes com Jest**
  - Funções como `handleSearch`, `handleSelectedApp` e `fetchApps` foram testadas isoladamente
  - Como o desafio não mencionava o uso da [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), foram feitos apenas testes de lógica e chamadas de API (não de componentes React)
- **Configuração de CI/CD com GitHub Actions**
  - Testes são executados automaticamente a cada push para a branch principal

---

## O que faltou implementar

- **Centralização do estado global**

  Por uma questão de tempo, a centralização de estado global (como o `selectedApp`, `search` e `lastSelectedApps`) **não foi aplicada**.  
  No entanto, isso poderia ser feito facilmente utilizando:

  - **Context API** nativa do React com `useContext` + `useReducer`, como sugere o desafio ou
  - **Redux**, como alternativa para projetos maiores ou com múltiplos contextos

  A ideia seria criar um contexto `AppContext` e mover os estados e ações principais para lá, garantindo melhor compartilhamento de estado entre componentes como `AppCard`, `Modal` e `SearchInput`.

---

## Como rodar o projeto

Instale o node caso não tenha e depois siga o passo a passo 
### 1. Instalar dependências
npm install
### 2. Rodar a aplicação
npm run dev
### 3. Rodar os testes unitários
npm test
### 4. Gera o build para deploy
npm run build
