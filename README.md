# 🎟️ UNIP-PIM — Sistema de Gestão de Tickets

O UNIP-PIM é uma aplicação fullstack para abertura e gerenciamento de tickets de TI, desenvolvida como projeto acadêmico.

## 🚀 Tecnologias

### 🔹 Backend

- **Fastify**
- **TypeScript**
- **Knex**
- **Zod**
- **SQLite3**
- **Bun** (runtime)

### 🔹 Frontend

- **React**
- **Vite**
- **TypeScript**
- **React Router DOM**
- **Bun** (runtime)

## 📂 Estrutura do Projeto

### Backend (`/backend`)

```
backend/
├── config/              # Configurações do banco de dados
├── db/
│   └── migrations/      # Migrations do Knex (criação de tabelas)
├── src/
│   ├── env/            # Configuração de variáveis de ambiente
│   ├── interfaces/     # Interfaces TypeScript para entidades
│   ├── middleware/     # Middlewares do Fastify
│   ├── modules/        # Partes da aplicação
│   │   ├── auth/
│   │   │   ├── controllers/   # Endpoints de autenticação
│   │   │   ├── dto/           # DTOs e validações Zod
│   │   │   └── config/        # Configurações JWT e cookie
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
   git clone https://github.com/werean/UNIP-PIM.git
   cd UNIP-PIM
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
   bun install
   ```

   Frontend:

   ```bash
   cd frontend
   bun install
   ```

4. **Configure o banco de dados**

   Execute as migrations para criar as tabelas:

   ```bash
   cd backend
   bun run knex migrate:latest
   ```

   Para criar uma nova migration:

   ```bash
   bun run knex migrate:make nome_da_migration
   ```

   Para reverter a última migration:

   ```bash
   bun run knex migrate:rollback
   ```

## ▶️ Executando o projeto

1. **Inicie o backend**

   ```bash
   cd backend
   bun run dev
   ```

   O backend estará rodando em [http://localhost:8080](http://localhost:8080)

2. **Inicie o frontend**

   Em outro terminal:

   ```bash
   cd frontend
   bun run dev
   ```

   O frontend estará rodando em [http://localhost:5173](http://localhost:5173)

3. **Acesse a aplicação**

   Abra no navegador: [http://localhost:5173](http://localhost:5173)

## Já concluido no backend

- [x] Configurar banco de dados
- [x] CRUD User
- [x] CRUD Ticket
- [x] Autenticação básica (login com JWT e cookie)

## Próximos passos backend

- [ ] Middleware de autenticação completo
- [ ] Validações adicionais
- [ ] Implementar autenticação por sessão (usuário/técnico)
- [ ] Integração com WebSocket e Ollama

## Já concluido no frontend

- [x] Tela de login

## Próximos passos frontend

- [ ] Tela de registrar admin
      campos necessários: username(input), email(input), password(input), role(select: 5,10,15)
      rota: POST http://localhost:8080/user/create

- [ ] Tela de registrar user, mesma tela do admin com verificação do role na request.
      campos necessários: username(input), email(input), password(input), role(select: 5,10,15)

- [ ] Tela de registrar ticket
      campos necessários: title(input), ticket_body(textarea), urgency(select: 1,2,3)

- [ ] Home Page, lista de tickets disponíveis no DB
