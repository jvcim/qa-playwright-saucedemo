# Relatório de Execução — Baseline Playwright

## Identificação

- Projeto: SauceDemo — QA Engineering;
- Execução: 16/10/2026 às 22:23 BRT;
- Responsável: João Vitor Cim de Oliveira;
- Ambiente: produção pública de demonstração, `https://www.saucedemo.com/`;
- Node.js: 24.19.0; Playwright Test: 1.64.1;
- Navegador: Chromium (Chrome for Testing 156.0.8078.4, Playwright Chromium 1248);
- Código-fonte: diretório local sem repositório Git inicializado; commit não disponível.

## Resumo

| Planejados | Executados | Passed | Failed | Blocked | Not Run | Duração total |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 10 | 10 | 10 | 0 | 0 | 0 | 12,5 s |

Execução baseline em Chromium com oito workers. O typecheck anterior (`tsc --noEmit`) foi aprovado sem diagnósticos.

## Resultado individual

| ID | Ticket Jira | Cenário | Resultado | Duração | Evidência | Observações |
| --- | --- | --- | --- | ---: | --- | --- |
| TC-AUTH-001 | SDQAE-5 | Login válido abre inventário | Pass | 5,3 s | `playwright-report/index.html` | Inventário e lista de produtos visíveis. |
| TC-AUTH-002 | SDQAE-6 | Senha inválida mostra erro | Pass | 4,9 s | `playwright-report/index.html` | Mensagem de credenciais inválidas validada. |
| TC-AUTH-003 | SDQAE-7 | Usuário não informado é obrigatório | Pass | 4,8 s | `playwright-report/index.html` | Mensagem de usuário obrigatório validada. |
| TC-AUTH-004 | SDQAE-8 | Senha não informada é obrigatória | Pass | 0,742 s | `playwright-report/index.html` | Mensagem de senha obrigatória validada. |
| TC-AUTH-005 | SDQAE-9 | Usuário bloqueado não entra | Pass | 0,752 s | `playwright-report/index.html` | Bloqueio de acesso validado. |
| TC-INV-001 | SDQAE-10 | Inventário apresenta produtos | Pass | 5,2 s | `playwright-report/index.html` | Lista de inventário disponível. |
| TC-INV-002 | SDQAE-11 | Ordenação por nome Z-A | Pass | 5,0 s | `playwright-report/index.html` | Ordem decrescente validada. |
| TC-CART-001 | SDQAE-12 | Adicionar e remover produto | Pass | 5,1 s | `playwright-report/index.html` | Badge exibido e removido conforme esperado. |
| TC-CHK-001 | SDQAE-13 | Finalizar compra simulada | Pass | 5,4 s | `playwright-report/index.html` | Confirmação de pedido exibida. |
| TC-CHK-002 | SDQAE-14 | Nome obrigatório no checkout | Pass | 5,3 s | `playwright-report/index.html` | Validação de primeiro nome exibida. |

## Evidências

- Relatório HTML: `playwright-report/index.html`;
- Resumo técnico da última execução: `test-results/.last-run.json`;
- Não houve screenshots, vídeos ou traces de falha, pois todos os testes passaram e a configuração os retém somente em falhas.

Esses diretórios são ignorados pelo Git, preservando a cópia local sem versionar artefatos temporários ou volumosos.

## Conclusão

A primeira execução real da suíte foi aprovada integralmente. Nenhuma falha de automação, ambiente ou aplicação foi observada; portanto, nenhuma correção, reexecução ou ticket de Bug foi necessária. Os resultados Pass foram registrados separadamente do status Kanban, que permanece voltado ao fluxo de revisão.

## Recomendações e próximas ações

- Manter asserções atuais, que cobrem URL, visibilidade, conteúdo de mensagens e ordenação;
- Considerar reduzir a concorrência em execuções futuras se o ambiente público apresentar instabilidade, embora esta execução paralela tenha sido estável;
- A validação real do GitHub Actions foi analisada em 20/10/2026, mas não pôde ser executada: a cópia local não possui repositório Git/remoto e não há repositório SauceDemo acessível na conexão GitHub;
- Após criar ou conectar um repositório, executar o workflow `Playwright E2E` na branch `main` e registrar o link da run e os artefatos gerados.
