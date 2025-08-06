# Portal do Parceiro - Nova Arquitetura (Next.js + SSR + MFE)

## 📌 Visão Geral

O **Portal do Parceiro** é uma plataforma modular construída com foco em escalabilidade e manutenção eficiente por múltiplas squads. Este projeto adota uma arquitetura de **Micro Frontends (MFEs)** com **Next.js** e **Server-Side Rendering (SSR)**, oferecendo carregamento dinâmico, isolamento de domínios e integração segura via **SSO (Single Sign-On)** com **Curity Identity Server** usando **Auth.js**.

A primeira feature do portal será o módulo de **Gestão de Chamados**.

---

## 🧱 Tecnologias Utilizadas

- **[React](https://reactjs.org/)** - Biblioteca principal de UI
- **[Next.js](https://nextjs.org/)** - Framework com suporte a SSR e rotas dinâmicas
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Jest](https://jestjs.io/)** - Testes unitários
- **[Docker](https://www.docker.com/)** - Containerização dos MFEs
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD
- **[Material UI](https://mui.com/)** - Design system
- **[Auth.js](https://authjs.dev/)** - Autenticação integrada ao Curity
- **[GitHub Packages](https://github.com/features/packages)** - Repositório privado de componentes
- **[Vite Module Federation Plugin (em avaliação)](https://github.com/originjs/vite-plugin-federation)** - *(Para contextos específicos de client-side onde SSR não for requerido)*

---

## ⚙️ Estrutura da Arquitetura

### Repositórios

- **MFE Host** (Shell)
  - Repositório que orquestra a composição dos MFEs
  - Realiza autenticação via Curity
  - Responsável pelo layout base, menus e carregamento dos MFEs

- **MFEs Independentes**
  - Repositórios separados para cada módulo de negócio (ex: Gestão de Chamados)
  - SSR com Next.js
  - Comunicação e integração via props e contextos compartilhados

- **Design System (Private NPM)**
  - Biblioteca de componentes baseada em Material UI
  - Publicada no GitHub Packages
  - Compartilhada entre os MFEs

---

## 🔐 Autenticação e Autorização

- Utiliza **Curity Identity Server** com suporte a **OpenID Connect**
- Implementação de **SSO** através do **Auth.js** nos MFEs e Host
- Tokens de sessão e refresh token armazenados de forma segura

---

## 🚀 Deploy & CI/CD

- **GitHub Actions** para:
  - Lint, build, testes unitários
  - Publicação de pacotes no GitHub Packages
  - Deploy de cada MFE em ambientes independentes

- **Docker**
  - Cada MFE e o Host são dockerizados
  - Suporte para orquestração via Kubernetes

---

## 🧪 Testes

- Testes unitários com **Jest**
- Futuro suporte a testes de integração com **Playwright** ou **Cypress**
- Estratégia de cobertura mínima de 80%

---

## 🏗️ Benefícios da Arquitetura

- Isolamento entre domínios de negócio
- Deploys independentes por squad
- Escalabilidade horizontal
- Consistência visual com Design System
- SSR garante SEO e desempenho inicial
- Autenticação centralizada e segura

