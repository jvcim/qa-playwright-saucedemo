# Status do Projeto — QA Playwright SauceDemo

## Objetivo

Demonstrar um ciclo profissional de QA para a aplicação pública SauceDemo: planejamento, requisitos, critérios de aceite, casos manuais, automação E2E, rastreabilidade, evidências, relatório final e CI/CD.

## Tecnologias e arquitetura

- Playwright Test e TypeScript;
- Page Object Model (POM), com Page Objects em `pages/`;
- Casos automatizados em `tests/` e massa centralizada em `utils/test-data.ts`;
- GitHub Actions em `.github/workflows/`;
- Markdown para documentação e Jira Kanban para gestão;
- Evidências configuradas para falhas: screenshot, vídeo e trace.

## Arquivos principais

- `README.md` — visão geral, uso e CI/CD;
- `docs/TEST_PLAN.md` — estratégia e planejamento;
- `docs/TEST_CATALOG.md` — catálogo dos 10 casos;
- `docs/TRACEABILITY_MATRIX.md` — rastreabilidade de requisito a evidência;
- `docs/EXECUTION_REPORT.md` — relatório da execução baseline de 16/10/2026;
- `tests/login.spec.ts`, `tests/inventory.spec.ts`, `tests/checkout.spec.ts` — suíte E2E;
- `playwright.config.ts` — configuração do Playwright.

## Jira

- Instância: `https://jvcimpavel.atlassian.net/`;
- Projeto de referência: [SauceDemo | QA Engineering Board](https://jvcimpavel.atlassian.net/jira/software/c/projects/SDQAE/boards/3) (`SDQAE`, company-managed);
- Projeto histórico preservado: `SDQA` (team-managed);
- Histórias: [SDQAE-1](https://jvcimpavel.atlassian.net/browse/SDQAE-1) Autenticação, [SDQAE-2](https://jvcimpavel.atlassian.net/browse/SDQAE-2) Inventário, [SDQAE-3](https://jvcimpavel.atlassian.net/browse/SDQAE-3) Checkout e [SDQAE-4](https://jvcimpavel.atlassian.net/browse/SDQAE-4) Carrinho;
- Casos: SDQAE-5 a SDQAE-14 como subtarefas nativas, correspondentes a TC-AUTH-001 a TC-CHK-002;
- Tarefas técnicas: SDQAE-15 a SDQAE-20;
- Todos os 20 tickets SDQAE estão atribuídos a `jvcim.pavel@gmail.com`;
- Casos preservam apenas labels funcionais: `test-case` e `smoke` ou `regression`.

## Mapeamento da migração

| Origem SDQA | Destino SDQAE | Tipo no destino |
|---|---|---|
| SDQA-1 a SDQA-4 | SDQAE-1 a SDQAE-4 | História |
| SDQA-5 a SDQA-14 | SDQAE-5 a SDQAE-14 | Subtarefa |
| SDQA-15 a SDQA-20 | SDQAE-15 a SDQAE-20 | Tarefa |

## Atividades concluídas

- Estrutura de automação e 10 cenários E2E implementados;
- Plano, catálogo, matriz e modelo de relatório criados;
- Migração controlada para o projeto company-managed `SDQAE` concluída, preservando `SDQA`;
- Quatro histórias funcionais cadastradas no Jira;
- Dez casos de teste cadastrados como subtarefas nativas com detalhes, prioridade, classificação e resultado de execução `Pass` registrado;
- Seis tarefas técnicas independentes cadastradas;
- Labels redundantes removidas e responsáveis atribuídos;
- Matriz e catálogo atualizados com links reais do SDQAE.
- Typecheck (`tsc --noEmit`) aprovado em 16/10/2026;
- Primeira execução baseline em Chromium concluída: 10 Passed, 0 Failed, 0 Blocked e 0 Not Run em 12,5 s;
- Relatório HTML local gerado em `playwright-report/index.html`; nenhum artefato de falha foi produzido;
- Resultados reais registrados nos Test Cases do Jira, separados do fluxo Kanban.

## Atividades pendentes

- Criar ou conectar o repositório GitHub do SauceDemo e validar a execução real do GitHub Actions (`SDQAE-18`); a validação foi impedida em 20/10/2026 porque a cópia local não possui `.git`/remoto e nenhum repositório SauceDemo está acessível na conexão GitHub;
- Consolidar o relatório final;
- Publicar no GitHub apenas após autorização explícita.

## Decisões e restrições

- A suíte foi executada uma vez em Chromium e todos os 10 testes foram aprovados; não houve reexecução ou correção;
- Não há bugs ou integração automatizada Jira–GitHub confirmados; há evidência local no relatório HTML do Playwright;
- O uso de `standard_user` e demais contas é limitado às credenciais públicas de demonstração da SauceDemo;
- O Jira utilizado é exclusivamente a instância pessoal; `SDQAE` é o projeto operacional e `SDQA` é histórico.
- O status Kanban acompanha o fluxo de trabalho e não representa o resultado do teste; os resultados devem permanecer separados como `Pass`, `Fail`, `Blocked` ou `Not Run`.

## Problemas conhecidos

Nenhuma divergência comprovada foi identificada entre os 10 IDs do catálogo e a automação. A execução baseline não identificou falhas de aplicação, automação ou ambiente.

## Próxima etapa recomendada

Criar ou conectar o repositório GitHub do SauceDemo, validar a primeira run do GitHub Actions e, então, consolidar o relatório final do portfólio.
