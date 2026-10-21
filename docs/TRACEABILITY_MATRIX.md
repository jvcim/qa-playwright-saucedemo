# Matriz de Rastreabilidade

Instância Jira: [SauceDemo | QA Engineering Board](https://jvcimpavel.atlassian.net/jira/software/c/projects/SDQAE/boards/3).

Execuções reais em Chromium contra `https://www.saucedemo.com/`: baseline de 16/10/2026 (10 Passed) e ampliação de 20/10/2026 (17 Passed). Não houve falhas, bloqueios ou casos não executados nas respectivas suítes.

| Requisito / critério de aceite | História Jira | Caso Jira | ID do teste | Arquivo Playwright | Resultado | Evidência | Bug |
|---|---|---|---|---|---|---|---|
| Login válido abre o inventário | [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | [SDQAE-5](https://jvcimpavel.atlassian.net/browse/SDQAE-5) | TC-AUTH-001 | tests/login.spec.ts | Pass | `playwright-report/index.html` | — |
| Senha inválida informa erro de credenciais | [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | [SDQAE-6](https://jvcimpavel.atlassian.net/browse/SDQAE-6) | TC-AUTH-002 | tests/login.spec.ts | Pass | `playwright-report/index.html` | — |
| Usuário é obrigatório | [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | [SDQAE-7](https://jvcimpavel.atlassian.net/browse/SDQAE-7) | TC-AUTH-003 | tests/login.spec.ts | Pass | `playwright-report/index.html` | — |
| Senha é obrigatória | [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | [SDQAE-8](https://jvcimpavel.atlassian.net/browse/SDQAE-8) | TC-AUTH-004 | tests/login.spec.ts | Pass | `playwright-report/index.html` | — |
| Usuário bloqueado é informado | [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | [SDQAE-9](https://jvcimpavel.atlassian.net/browse/SDQAE-9) | TC-AUTH-005 | tests/login.spec.ts | Pass | `playwright-report/index.html` | — |
| Logout retorna à tela de login | [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) | [SDQAE-21](https://jvcimpavel.atlassian.net/browse/SDQAE-21) | TC-AUTH-006 | tests/login.spec.ts | Pass | `playwright-report/index.html` | — |
| Produtos do inventário ficam visíveis | [SDQAE-2](https://jvcimpavel.atlassian.net/browse/SDQAE-2) | [SDQAE-10](https://jvcimpavel.atlassian.net/browse/SDQAE-10) | TC-INV-001 | tests/inventory.spec.ts | Pass | `playwright-report/index.html` | — |
| Produtos são ordenados por nome Z-A | [SDQAE-2](https://jvcimpavel.atlassian.net/browse/SDQAE-2) | [SDQAE-11](https://jvcimpavel.atlassian.net/browse/SDQAE-11) | TC-INV-002 | tests/inventory.spec.ts | Pass | `playwright-report/index.html` | — |
| Produtos são ordenados por preço crescente | [SDQAE-2](https://jvcimpavel.atlassian.net/browse/SDQAE-2) | [SDQAE-22](https://jvcimpavel.atlassian.net/browse/SDQAE-22) | TC-INV-003 | tests/inventory.spec.ts | Pass | `playwright-report/index.html` | — |
| Backpack é adicionado e removido do carrinho | [SDQAE-4](https://jvcimpavel.atlassian.net/browse/SDQAE-4) | [SDQAE-12](https://jvcimpavel.atlassian.net/browse/SDQAE-12) | TC-CART-001 | tests/inventory.spec.ts | Pass | `playwright-report/index.html` | — |
| Item permanece no carrinho após navegar | [SDQAE-4](https://jvcimpavel.atlassian.net/browse/SDQAE-4) | [SDQAE-23](https://jvcimpavel.atlassian.net/browse/SDQAE-23) | TC-CART-002 | tests/inventory.spec.ts | Pass | `playwright-report/index.html` | — |
| Carrinho exibe múltiplos produtos | [SDQAE-4](https://jvcimpavel.atlassian.net/browse/SDQAE-4) | [SDQAE-24](https://jvcimpavel.atlassian.net/browse/SDQAE-24) | TC-CART-003 | tests/inventory.spec.ts | Pass | `playwright-report/index.html` | — |
| Checkout simulado é concluído | [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | [SDQAE-13](https://jvcimpavel.atlassian.net/browse/SDQAE-13) | TC-CHK-001 | tests/checkout.spec.ts | Pass | `playwright-report/index.html` | — |
| Primeiro nome é obrigatório no checkout | [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | [SDQAE-14](https://jvcimpavel.atlassian.net/browse/SDQAE-14) | TC-CHK-002 | tests/checkout.spec.ts | Pass | `playwright-report/index.html` | — |
| Sobrenome é obrigatório no checkout | [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | [SDQAE-25](https://jvcimpavel.atlassian.net/browse/SDQAE-25) | TC-CHK-003 | tests/checkout.spec.ts | Pass | `playwright-report/index.html` | — |
| CEP é obrigatório no checkout | [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | [SDQAE-26](https://jvcimpavel.atlassian.net/browse/SDQAE-26) | TC-CHK-004 | tests/checkout.spec.ts | Pass | `playwright-report/index.html` | — |
| Resumo financeiro corresponde ao carrinho | [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) | [SDQAE-27](https://jvcimpavel.atlassian.net/browse/SDQAE-27) | TC-CHK-005 | tests/checkout.spec.ts | Pass | `playwright-report/index.html` | — |

Os 17 casos permanecem como subtarefas nativas em `SDQAE`, com seus IDs TC e a ligação às histórias preservados. Não foram identificados bugs nas execuções registradas.
