# 🎟️ Ticket AI — Sistema de Gestão de Tickets com Inteligência Artificial

O Ticket AI é uma aplicação fullstack para abertura e gerenciamento de tickets de TI, com integração de inteligência artificial para auxiliar no diagnóstico e priorização de chamados.
O projeto foi desenvolvido com foco em boas práticas, tipagem forte e arquitetura escalável, rodando localmente em ambiente de desenvolvimento.

## 🚀 Tecnologias

### 🔹 Backend

- **Fastify** — servidor web rápido e leve
- **TypeScript** — tipagem estática
- **Knex** — query builder SQL
- **Zod** — validação de schemas
- **SQLite3/PostgreSQL** — banco de dados

### 🔹 Frontend

- **React** — biblioteca para interfaces
- **Vite** — bundler rápido para desenvolvimento
- **TypeScript** — tipagem estática
- **React Router DOM** — roteamento

## 📂 Estrutura do Projeto

### Backend (`/backend`)

```
backend/
├── config/              # Configurações do banco de dados
├── db/
│   └── migrations/      # Migrations do Knex (criação de tabelas)
├── src/
│   ├── env/            # Configuração de variáveis de ambiente
│   ├── middleware/     # Middlewares do Fastify
│   ├── models/         # Modelos de dados e interfaces TypeScript
│   ├── modules/        # Partes da aplicação
│   │   ├── users/
│   │   │   ├── controllers/   # Endpoints da API
│   │   │   ├── services/      # Lógica de acesso ao banco de dados
│   │   │   └── dto/           # Data Transfer Objects e validações Zod
│   │   └── tickets/
│   │       ├── controllers/
│   │       ├── services/
│   │       └── dto/
│   ├── routes/         # Registro central de rotas
│   └── server.ts       # Ponto de entrada da aplicação
└── knexfile.ts         # Configuração do Knex CLI
```

### Frontend (`/frontend`)

```
frontend/
├── src/
│   ├── assets/        # Imagens e recursos estáticos
│   ├── css/           # Estilos CSS e módulos
│   ├── pages/         # Componentes de páginas
│   └── main.tsx       # Ponto de entrada da aplicação
└── public/            # Arquivos públicos estáticos
```

## ⚙️ Configuração do ambiente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/ticket-ai.git
   cd ticket-ai
   ```

2. **Configure as variáveis de ambiente**

   Copie o arquivo `.env.example` para `.env` no backend e ajuste os valores:

   ```bash
   cp backend/.env.example backend/.env
   ```

3. **Instale as dependências**

   Backend:

   ```bash
   cd backend
   npm install
   ```

   Frontend:

   ```bash
   cd frontend
   npm install
   ```

4. **Configure o banco de dados**

   Execute as migrations para criar as tabelas:

   ```bash
   cd backend
   npm run knex migrate:latest
   ```

   Para criar uma nova migration:

   ```bash
   npm run knex migrate:make nome_da_migration
   ```

   Para reverter a última migration:

   ```bash
   npm run knex migrate:rollback
   ```

## ▶️ Executando o projeto

1. **Inicie o backend**

   ```bash
   cd backend
   npm run dev
   ```

   O backend estará rodando em [http://localhost:8080](http://localhost:8080)

2. **Inicie o frontend**

   Em outro terminal:

   ```bash
   cd frontend
   npm run dev
   ```

   O frontend estará rodando em [http://localhost:5173](http://localhost:5173)

3. **Acesse a aplicação**

   Abra no navegador: [http://localhost:5173](http://localhost:5173)

## Já concluido no backend

- [x] Configurar banco de dados
- [x] CRUD User
- [x] CRUD Ticket

## Próximos passos backend

- [ ] Autenticar usuário

## Já concluido no frontend

- [x] Tela de login

## Próximos passos frontend

- [ ] Tela de registrar admin
      campos necessários: name(input),email(input),password(input),role(select: 5,10,15)
      rota: http://localhost:8080/login

- [ ] Tela de registrar user, mesma tela do admin com verificação do role na request.
      campos necessários: name(input),email(input),password(input),company(select: vai puxar as company cadastradas no DB)

- [ ] Tela de registrar ticket
      campos necessários: titulo(input), corpo do ticket(input), urgencia(select: low,mid,high)

- [ ] Home Page, lista de tickets disponíveis no DB

## 📌 Observação

Este projeto é acadêmico/demonstrativo e tem como foco integrar inteligência artificial em um sistema de TI
