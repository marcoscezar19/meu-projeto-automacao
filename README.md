# 🚀 Automação E2E com Playwright & TypeScript

Projeto desenvolvido para a **Atividade Prática 2: Arquitetura E2E — POM, Fixture de Sessão e Data-Driven**, aplicando padrões avançados de automação de testes em plataformas web do mundo real.

---

## 🛠️ Tecnologias Utilizadas
- **Playwright** (Runner de testes End-to-End)
- **TypeScript** (Tipagem estática e segurança de código)
- **Node.js** (Ambiente de execução)

---

## 🏛️ Arquitetura do Projeto (Padrões Aplicados)
O projeto segue rigorosamente uma estrutura canônica modularizada:
1. **POM (Page Object Model):** Separação de responsabilidades em `pages/` (elementos e ações isolados das validações).
2. **Fixture de Sessão (`auth.fixture.ts`):** Injeção de estado autenticado reutilizável, permitindo iniciar os testes diretamente na área restrita sem refazer o fluxo de login a cada caso.
3. **Data-Driven Testing:** Massa de dados externalizada e tipada em `data/usuarios.data.ts`, executando cenários dinâmicos via loops parametrizados.

---

## 📂 Estrutura de Pastas

```text
meu-projeto-automacao/
├── data/
│   └── usuarios.data.ts         # Massa de dados tipada (Data-Driven)
├── pages/
│   ├── DashboardPage.ts         # Page Object da Área Restrita / Painel
│   └── LoginPage.ts             # Page Object da Tela de Login
├── fixtures/
│   └── auth.fixture.ts          # Custom test com estado autenticado injetado
├── tests/
│   ├── dashboard-sessao.spec.ts # Testes focados na área logada (Fixture)
│   └── login-data-driven.spec.ts# Testes parametrizados de autenticação
├── playwright.config.ts         # Configurações globais do Playwright
├── package.json                 # Dependências e scripts do projeto
└── README.md                    # Documentação do projeto
```

## ⚙️ Pré-requisitos
Certifique-se de ter o Node.js (versão 18 ou superior) instalado em sua máquina.

## 📥 Instalação
1. Clone o repositório ou descompacte o arquivo .zip do projeto.

2. Abra o terminal na raiz do projeto e instale as dependências:

```Bash
npm install
```

3. Instale os navegadores binários do Playwright:
```Bash
npx playwright install
```

## ▶️ Como Executar os Testes
- **Executar todos os testes em modo headless (fundo):**
```Bash
npx playwright test
```

- **Executar os testes utilizando a interface gráfica interativa do Playwright (UI Mode):**
```Bash
npx playwright test --ui
```

- **Visualizar o relatório HTML detalhado da última execução:**
```Bash
npx playwright show-report
```

## 🌐 Alvo da Automação

- **Plataforma Escolhida: Practice Software Testing (https://practicesoftwaretesting.com)**