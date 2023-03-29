# App

GymPass style app

## RFs (Requisitos funcionais)

- [] Deve ser possivel se cadastrar
- [] Deve ser possivel se autenticar
- [] Deve ser possivel obter o perfil de um usuário logado
- [] Deve ser possivel obter o numero de check-ins realizados pelo usuário logado
- [] Deve ser possivel o usuário obter seu historico de check-ins
- [] Deve ser possivel o usuário buscar academias proximas
- [] Deve ser possivel o usuário buscar academias pelo nome
- [] Deve ser possivel o usuário fazer check-in em uma academia
- [] Deve ser possivel validar o ckeck-in de um usuário
- [] Deve ser possivel cadastrar uma academia

## RNs (Regras de negócio)

- [] O usuário não pode se cadastrar com um email duplicado
- [] O usuário não pode fazer dois check-ins no mesmo dia
- [] O usuário não pode fazer check-in se não estiver a 100m da academia
- [] O ckeck-in só pode ser validado até vinte minutos após ser criado
- [] O ckeck-in só pode ser validado por administradores
- [] O ckeck-in só pode ser cadastrados por administraores

## RNFs (Requisitos não-funcionais)

- [] A senha do usuário precisar estar criptografados
- [] Os dados da aplicação devem ser persistidos em um banco postgres
- [] Todas as listas de dados precisam estar paginados com vinte itens por pagina
- [] O usuário deve ser identificado por um JWT

