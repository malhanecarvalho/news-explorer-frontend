# 🌍 News Explorer

Bem-vindo ao **News Explorer**! Este é um aplicativo Full-Stack projetado para permitir que os usuários pesquisem por notícias e as salvem em seus perfis pessoais.

---

![ ](https://github.com/malhanecarvalho/news-explorer-frontend/blob/stage-react-api/news-explorer/src/images/news-explorer_image.png)

## 📋 Funcionalidades Principais

- 🔍 **Pesquisa de Notícias**: Digite palavras-chave para encontrar artigos de notícias atualizados.
- 💾 **Salvar Notícias**: Os usuários autenticados podem salvar seus artigos favoritos.
- 👤 **Perfis de Usuário**: Cada usuário tem acesso a uma lista personalizada de notícias salvas.
- 🔐 **Autenticação Segura**: Registre-se e entre para acessar funcionalidades exclusivas.
- 📱 **Responsividade**: Totalmente otimizado para dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**:
- ⚛️ [React](https://reactjs.org/)
- 🎨 CSS3 com estilos responsivos

### **Backend**:
- 🖥️ [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/)
- 🛢️ Banco de Dados: [MongoDB](https://www.mongodb.com/)

### **Infraestrutura**:
- 🌐 Integração com APIs externas de notícias

---

## 🚀 Como Começar

### **Configuração Local**

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/news-explorer.git
   cd news-explorer
   ```

2. **Instale as dependências**:
   - Para o backend:
     ```bash
     cd backend
     npm install
     ```
   - Para o frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Configure variáveis de ambiente**:
   Crie um arquivo `.env` no diretório `backend` com as seguintes variáveis:
   ```env
   MONGO_URI=<sua-conexão-mongodb>
   JWT_SECRET=<sua-chave-secreta>
   API_KEY=<sua-chave-api-noticias>
   ```

4. **Inicie o servidor e o cliente**:
   - Para iniciar o backend:
     ```bash
     cd backend
     npm start
     ```
   - Para iniciar o frontend:
     ```bash
     cd frontend
     npm start
     ```

5. **Acesse o aplicativo**:
   Abra seu navegador e acesse `http://localhost:3000`.

---

## 📚 Documentação da API

### **Autenticação**
- `POST /signup`: Cria uma nova conta de usuário.
- `POST /signin`: Realiza login e retorna um token JWT.
---

## 👥 Contribuição

Contribuições são muito bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m "Minha nova feature"`.
4. Envie sua branch: `git push origin minha-feature`.
5. Abra uma pull request.

---
