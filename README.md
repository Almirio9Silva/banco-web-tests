# Banco Web Tests — Automação com Cypress

**Objetivo**

Este projeto tem o objetivo de demonstrar aos alunos da Mentoria 2.0 como automatizar testes end-to-end usando Cypress e JavaScript. Ele serve como exemplo prático de organização de testes, uso de Custom Commands e geração de relatórios com `cypress-mochawesome-reporter`.

**Componentes do Projeto**

- **Código de testes:** `cypress/e2e/` — arquivos de especificação como `login.cy.js` e `transferencia.cy.js`.
- **Custom Commands:** `cypress/support/commands/` — comandos personalizados usados nos testes (`common.js`, `login.js`, `transferencias.js`).
- **Configuração do Cypress:** `cypress.config.js` e `package.json` (todas as dependências já estão declaradas em `package.json`).
- **Fixtures:** `cypress/fixtures/` — dados de teste como `credenciais.json`.
- **Relatórios e artefatos:** `reports/html/` (relatório HTML), `screenshots/` e `videos/`.

**Pré-requisitos**

- Node.js instalado (versão compatível com as dependências do `package.json`).
- A API deve estar em execução: https://github.com/juliodelimas/banco-api
- A aplicação web deve estar em execução: https://github.com/juliodelimas/banco-web

Observação: os testes dependem que ambos (API e aplicação) estejam acessíveis antes de executar os cenários.

**Instalação**

1. Clone este repositório e acesse a pasta do projeto.
2. Instale dependências:

```bash
npm install
```

**Como executar os testes**

- Abrir o Test Runner (modo interativo):

```bash
npx cypress open
```

- Executar em modo headless (gera relatórios):

```bash
npx cypress run
```

Se o `cypress-mochawesome-reporter` estiver configurado no `cypress.config.js`, os relatórios serão gerados automaticamente em `reports/html/`. Abra `reports/html/index.html` no navegador para visualizar o relatório HTML consolidado.

**Testes incluídos**

- `cypress/e2e/login.cy.js` — cenários de autenticação e validação de login.
- `cypress/e2e/transferencia.cy.js` — cenários de transferência entre contas.

Cada arquivo de especificação contém os casos de teste que ilustram boas práticas básicas de escrita e organização de cenários.

**Custom Commands (Comandos personalizados)**

Os Custom Commands centralizam operações repetitivas e tornam os testes mais legíveis. Arquivos relevantes:

- `cypress/support/commands/common.js` — utilitários comuns.
- `cypress/support/commands/login.js` — comando(s) relacionados ao fluxo de login, por exemplo `cy.login()`.
- `cypress/support/commands/transferencias.js` — comando(s) para facilitar o fluxo de transferência.

Exemplos de uso nos testes:

```js
// usar o comando de login antes de testes que precisam de sessão
cy.login('usuario@example.com', 'senha123');

// usar comando de transferência encapsulado
cy.transferencia({ contaOrigem: '123', contaDestino: '456', valor: 100 });
```

Observação: verifique os parâmetros reais dos comandos nos arquivos em `cypress/support/commands/`.

**Estrutura de pastas (resumo)**

- `cypress/`
  - `e2e/` — especificações de teste
  - `fixtures/` — dados de teste
  - `support/` — configuração global e Custom Commands
- `reports/html/` — relatórios gerados pelo reporter
- `screenshots/`, `videos/` — artefatos de execução

**Boas práticas e dicas**

- Mantenha dados de teste estáveis em `fixtures/`.
- Centralize ações repetidas como login e criação de dados em Custom Commands.
- Garanta que a API e a aplicação estejam em execução antes de rodar os testes.

**Contribuição e dúvidas**

Abra uma issue ou envie um PR com melhorias. Se quiser, posso ajudar a:

- Rodar os testes localmente.
- Adicionar scripts úteis em `package.json` (ex.: `npm run test:headless`).

---

Arquivo criado automaticamente para a Mentoria 2.0 — demonstração de automação com Cypress.
