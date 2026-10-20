# Catálogo de Casos de Teste

| ID | Jira / história | Funcionalidade | Objetivo / passos resumidos | Pré-condição e massa | Esperado | Prioridade | Categoria | Automação |
|---|---|---|---|---|---|---|---|---|
| TC-AUTH-001 | [SDQAE-5](https://jvcimpavel.atlassian.net/browse/SDQAE-5) / [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | Login | Informar usuário padrão e senha | Tela de login; standard_user | Inventário aberto | Alta | smoke | tests/login.spec.ts |
| TC-AUTH-002 | [SDQAE-6](https://jvcimpavel.atlassian.net/browse/SDQAE-6) / [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | Login | Informar senha inválida | Tela de login; standard_user | Erro de credenciais | Alta | regression | tests/login.spec.ts |
| TC-AUTH-003 | [SDQAE-7](https://jvcimpavel.atlassian.net/browse/SDQAE-7) / [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | Login | Enviar sem usuário | Tela de login | Erro de usuário obrigatório | Média | regression | tests/login.spec.ts |
| TC-AUTH-004 | [SDQAE-8](https://jvcimpavel.atlassian.net/browse/SDQAE-8) / [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | Login | Enviar sem senha | Tela de login; standard_user | Erro de senha obrigatória | Média | regression | tests/login.spec.ts |
| TC-AUTH-005 | [SDQAE-9](https://jvcimpavel.atlassian.net/browse/SDQAE-9) / [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | Login | Entrar com locked_out_user | Tela de login; locked_out_user | Bloqueio informado | Alta | regression | tests/login.spec.ts |
| TC-INV-001 | [SDQAE-10](https://jvcimpavel.atlassian.net/browse/SDQAE-10) / [SDQAE-2](https://jvcimpavel.atlassian.net/browse/SDQAE-2) | Inventário | Autenticar e consultar produtos | Usuário padrão | Produtos visíveis | Alta | regression | tests/inventory.spec.ts |
| TC-INV-002 | [SDQAE-11](https://jvcimpavel.atlassian.net/browse/SDQAE-11) / [SDQAE-2](https://jvcimpavel.atlassian.net/browse/SDQAE-2) | Inventário | Ordenar por nome Z-A | Usuário padrão autenticado | Nomes em ordem decrescente | Média | regression | tests/inventory.spec.ts |
| TC-CART-001 | [SDQAE-12](https://jvcimpavel.atlassian.net/browse/SDQAE-12) / [SDQAE-4](https://jvcimpavel.atlassian.net/browse/SDQAE-4) | Carrinho | Adicionar e remover Backpack | Usuário padrão; Sauce Labs Backpack | Badge 1 e depois ausente | Alta | smoke | tests/inventory.spec.ts |
| TC-CHK-001 | [SDQAE-13](https://jvcimpavel.atlassian.net/browse/SDQAE-13) / [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | Checkout | Adicionar Backpack, preencher dados e finalizar | Usuário padrão; dados QA Portfolio | Confirmação de pedido | Alta | smoke | tests/checkout.spec.ts |
| TC-CHK-002 | [SDQAE-14](https://jvcimpavel.atlassian.net/browse/SDQAE-14) / [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | Checkout | Prosseguir sem primeiro nome | Item no carrinho; dados sem nome | Erro de nome obrigatório | Alta | regression | tests/checkout.spec.ts |

Divergências conhecidas: nenhuma identificada entre os dez IDs, plano e automação. Cada caso tem label `test-case`, classificação smoke ou regression e estado de execução `Não executado` na descrição Jira; este estado é independente do status Kanban.

Hierarquia Jira: os casos foram recriados de forma controlada como subtarefas nativas no projeto `SDQAE`, sob as histórias indicadas. O projeto `SDQA` foi preservado como histórico. Cada subtarefa usa a descrição padronizada com passos reproduzíveis, `Execution Status: Not Run`, resultado obtido não registrado e evidência pendente.
