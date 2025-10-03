# 🎟️ Ticket AI — Sistema de Gestão de Tickets com Inteligência Artificial

O Ticket AI é uma aplicação fullstack para abertura e gerenciamento de tickets de TI, com integração de inteligência artificial para auxiliar no diagnóstico e priorização de chamados.
O projeto foi desenvolvido com foco em boas práticas, tipagem forte e arquitetura escalável, rodando localmente em ambiente de desenvolvimento.

## 🚀 Tecnologias

### 🔹 Backend

- **Fastify**
- **TypeScript**
- **Zod**
- **Knex**

### 🔹 Frontend

- **React**
- **Vite**
- **TypeScript**

## ⚙️ Configuração do ambiente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ticket-ai.git
   cd ticket-ai
   ```
2. **Configure as variáveis de ambiente**
   Copie o arquivo `.env.example` para `.env` em cada serviço (backend e frontend, se necessário) e ajuste os valores.
   ```bash
   cp backend/.env.example backend/.env
   ```
3. **Instale as dependências**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

## ▶️ Executando o projeto

1. **Inicie o backend**
   ```bash
   cd backend
   npm run dev
   ```
2. **Inicie o frontend**
   Em outro terminal:
   ```bash
   cd frontend
   npm run dev
   ```
3. **Acesse a aplicação**
   Abra no navegador:
   [http://localhost:5173](http://localhost:5173)

## Já concluido no backend

- [x] Configurar banco de dados

- [x] CRUD User.

- [x] CRUD Ticket

## Próximos passos backend

- [ ] Autenticar usuário.

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
