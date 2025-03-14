
# ImpCourse

ImpCourse é uma plataforma de cursos online voltada para fins acadêmicos, desenvolvida para a faculdade Impacta. O projeto visa fornecer um sistema de gerenciamento de cursos com funcionalidades como cadastro de usuários, login, gerenciamento de cursos, aulas e conteúdos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web rápido e minimalista para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Prisma**: ORM para interagir com o banco de dados MySQL.
- **MySQL**: Banco de dados relacional utilizado no projeto.
- **JWT**: Autenticação segura com tokens.
- **Axios**: Cliente HTTP para requisições externas.
- **Docker**: Containerização para fácil deploy e desenvolvimento.

### 🔹 **Pré-requisitos**
Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão LTS recomendada)
- **Docker e Docker Compose** (para rodar o banco de dados)
- **MySQL** (caso prefira rodar o banco localmente)
- **Yarn** ou **npm** para gerenciar pacotes

## Estrutura do Projeto

```
prisma - Configuração do prisma
src - Raiz do projeto
├── application - Camada de aplicação
│   ├── errors - Erros personalizados
│   ├── use-cases - Implementação dos Casos de Uso
│   └── protocols - Interfaces para as necessidades dos casos de uso
├── common - Código comum
│   └── helpers - Funções auxiliares
├── domain - Camada de dominio
│   ├── models - Todos models
|   ├── dto - Objetos para transferencia de dados
│   └── use-cases - Interfaces para Casos de Uso
├── infrastructure - Camada de Infraestrutura
│   ├── lib - Configuração de bibliotecas
│   ├── providers - Implementação de providers
│   └── repositories - Implementação de repositórios
├── main - Camada principal
│   ├── factory - Configuração de Controllers
│   ├── lib - Configuração de bibliotecas
│   ├── adapters - Implementação de auxiliares Express
│   ├── app - Configuração da aplicação
│   └── routes - Declaração de endpoints
└── presentation - Camada de Apresentação
├── controllers - Implementação de Controllers
├── middlewares - Implementação de middlewares
└── protocols - Auxiliares metodo HTTP e interfaces
test - Testes
```

## Funcionalidades

- **Cadastro de Usuários**: Permite que os usuários se registrem na plataforma.
- **Login de Usuários**: Autenticação via JWT para acesso seguro.
- **Cadastro de Cursos**: Usuários podem criar e gerenciar cursos.
- **Edição de Cursos**: Alteração de informações de cursos existentes.
- **Cadastro de Aulas**: Criação de aulas dentro de cursos.
- **Listagem de Cursos**: Exibição de cursos disponíveis para os usuários.
- **Acesso e Compra de Cursos**: Funcionalidade de compra e acesso ao conteúdo de cursos.

## Como Rodar o Projeto

### Passos de Instalação e Inicialização

1. Clone o repositório:

   ```bash
   git clone https://github.com/GustavoS7/backend-impcourse.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd backend-impcourse
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como a configuração do banco de dados.

5. Execute o arquivo docker-compose.yml para criação do banco de dados
   ```bash
   docker compose up
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse a aplicação no navegador em:

   ```
   http://localhost:8080
   ```

<!-- ## Testes

Para rodar os testes da aplicação, execute o seguinte comando: -->

<!-- ```bash
npm run test
``` -->
