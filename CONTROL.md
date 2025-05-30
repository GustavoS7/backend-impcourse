# ImpCourse

### Funcionalidades:
* Cadastro de Usuário
* Login
* Cadastro de Curso
* Edição de Curso
* Cadastro de Conteúdo
* Listagem de Cursos
* Acesso ao Curso
* Compra do Curso

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar um usuário;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível cadastrar um curso;
- [] Deve ser possível editar um curso;
- [x] Deve ser possível cadastrar conteúdo para o curso;
- [] Deve ser possível listar todos os cursos;
- [] Deve ser possível buscar um curso pelo nome;
- [] Deve ser possível listar cursos por categoria;
- [] Deve ser possível acessar o conteúdo de um curso;
- [] Deve ser possível comprar um curso;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O preço de um curso não pode ser negativo;
- [x] O curso deve ter, no mínimo, um conteúdo cadastrado:;
- [] O curso só pode ser comprado uma vez pelo mesmo usuário;
- [] O usuário só pode acessar os cursos pagos após a confirmação do pagamento;
- [] O conteúdo do curso deve ser acessado somente por usuários que compraram o curso;
- [] O administrador pode editar e excluir qualquer curso ou conteúdo;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco MySql;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);
- [x] Os arquivos que formam o conteúdo do curso devem estar na AWS (S3);
- [] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [] O sistema deve ser acessível e compatível com dispositivos móveis
