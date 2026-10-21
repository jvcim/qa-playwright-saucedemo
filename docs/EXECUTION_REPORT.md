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

## Ampliação de cobertura — 20/10/2026

A suíte foi ampliada com sete cenários e executada novamente em Chromium contra `https://www.saucedemo.com/`. O typecheck (`tsc --noEmit`) foi aprovado antes da execução.

| Planejados | Executados | Passed | Failed | Blocked | Not Run | Duração total |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 17 | 17 | 17 | 0 | 0 | 0 | 12,2 s |

| ID | Ticket Jira | Cenário | Resultado | Duração | Evidência | Observações |
| --- | --- | --- | --- | ---: | --- | --- |
| TC-AUTH-006 | SDQAE-21 | Logout retorna à tela de login | Pass | 1,7 s | `playwright-report/index.html` | Tela de login exibida após encerrar sessão. |
| TC-INV-003 | SDQAE-22 | Ordenação por preço crescente | Pass | 6,1 s | `playwright-report/index.html` | Preços em ordem ascendente. |
| TC-CART-002 | SDQAE-23 | Item permanece no carrinho após navegar | Pass | 1,4 s | `playwright-report/index.html` | Backpack preservado ao retornar do carrinho. |
| TC-CART-003 | SDQAE-24 | Carrinho exibe múltiplos produtos | Pass | 1,7 s | `playwright-report/index.html` | Badge e dois itens confirmados. |
| TC-CHK-003 | SDQAE-25 | Sobrenome obrigatório no checkout | Pass | 6,2 s | `playwright-report/index.html` | Mensagem de sobrenome obrigatório validada. |
| TC-CHK-004 | SDQAE-26 | CEP obrigatório no checkout | Pass | 5,9 s | `playwright-report/index.html` | Mensagem de CEP obrigatório validada. |
| TC-CHK-005 | SDQAE-27 | Resumo financeiro corresponde ao carrinho | Pass | 6,5 s | `playwright-report/index.html` | Itens, subtotal, taxa e total consistentes. |

Nenhum defeito, falha de automação ou bloqueio foi observado nesta execução. Os avisos de cor emitidos pelo Node não afetaram o resultado.

## Validação da classificação de suítes

Após a revisão da estratégia, os filtros de execução foram validados em Chromium:

| Perfil | Casos | Resultado | Duração |
| --- | ---: | --- | ---: |
| Smoke | 4 | 4 Passed, 0 Failed | 5,3 s |
| Regression | 13 | 13 Passed, 0 Failed | 4,5 s |

O conjunto smoke representa apenas a jornada mínima de disponibilidade. Os demais cenários pertencem ao perfil regression, incluindo logout, múltiplos itens, ordenações, validações negativas e resumo financeiro.

## Evidências

- Relatório HTML: `playwright-report/index.html`;
- Resumo técnico da última execução: `test-results/.last-run.json`;
- Não houve screenshots, vídeos ou traces de falha, pois todos os testes passaram e a configuração os retém somente em falhas.

Esses diretórios são ignorados pelo Git, preservando a cópia local sem versionar artefatos temporários ou volumosos.

## Validação de CI/CD

- Repositório público: `https://github.com/jvcim/qa-playwright-saucedemo`;
- Workflow: `Playwright E2E`, acionado por `push` na branch `main`;
- Execução validada: [run #2](https://github.com/jvcim/qa-playwright-saucedemo/actions/runs/39518081499), commit `2796db4`, 20/10/2026 às 20:55 BRT;
- Resultado: `Success`; duração total de 43 s; job `e2e` concluído em 40 s;
- Artefato gerado: `playwright-html-report` (197 KB, SHA-256 `49ae834f95be0f0d21f7a246f3f1672b709a8612da11779f8de3c8851ff171ae`);
- O upload de `test-results/` agora é opcional quando não há falhas; como a suíte foi aprovada, não houve artefato de trace/vídeo/screenshot.

O GitHub reportou avisos de plataforma sobre ações que ainda usam Node.js 20 internamente e sobre a futura migração do rótulo `ubuntu-latest`. Nenhum deles afetou a instalação, o typecheck, a execução ou o artefato desta run.

## Conclusão

A primeira execução real da suíte foi aprovada integralmente. Nenhuma falha de automação, ambiente ou aplicação foi observada; portanto, nenhuma correção, reexecução ou ticket de Bug foi necessária. Os resultados Pass foram registrados separadamente do status Kanban, que permanece voltado ao fluxo de revisão.

## Recomendações e próximas ações

- Manter asserções atuais, que cobrem URL, visibilidade, conteúdo de mensagens e ordenação;
- Considerar reduzir a concorrência em execuções futuras se o ambiente público apresentar instabilidade, embora esta execução paralela tenha sido estável;
- Acompanhar as próximas versões das ações oficiais do GitHub para eliminar os avisos de depreciação de Node.js 20 sem alterar uma pipeline atualmente aprovada.
