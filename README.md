# QA Automation Portfolio | Playwright + TypeScript

> Projeto de estudo independente. **Não é afiliado à Sauce Labs.** Os testes exercitam a aplicação pública [SauceDemo](https://www.saucedemo.com/). Não realiza pagamentos reais.

## Objetivo
Demonstrar planejamento de testes, automação E2E, cenários positivos e negativos, Page Object Model (POM), rastreabilidade, evidências e execução CI/CD.

## Stack
- Playwright Test + TypeScript
- Page Object Model (POM)
- GitHub Actions (CI)
- Relatório HTML, screenshot, vídeo e trace em caso de falha

## Cobertura inicial
| Módulo | Testes | Cenários |
|---|---:|---|
| Login | 5 | Válido, senha inválida, campos obrigatórios, bloqueado |
| Inventário | 2 | Listagem e ordenação |
| Carrinho | 1 | Adição e remoção |
| Checkout | 2 | Conclusão simulada e validação obrigatória |
| **Total** | **10** | **Suite inicial planejada** |

Os casos e a estratégia estão detalhados em [`docs/TEST_PLAN.md`](docs/TEST_PLAN.md), [`docs/TEST_CATALOG.md`](docs/TEST_CATALOG.md) e [`docs/TRACEABILITY_MATRIX.md`](docs/TRACEABILITY_MATRIX.md). O acompanhamento de execução está em [`docs/EXECUTION_REPORT.md`](docs/EXECUTION_REPORT.md), e o contexto de continuidade em [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md). Um modelo de registro de defeitos está em [`docs/BUG_REPORT_TEMPLATE.md`](docs/BUG_REPORT_TEMPLATE.md).

## Jira
O backlog e o Kanban de referência estão em [SauceDemo | QA Engineering Board](https://jvcimpavel.atlassian.net/jira/software/c/projects/SDQAE/boards/3). As histórias possuem subtarefas nativas para os casos de teste, organizadas por tipo de item no quadro. O projeto anterior `SDQA` foi preservado como histórico da migração. Não há integração automatizada Jira–GitHub configurada neste repositório.

## Estrutura
```text
pages/                # Page Objects
utils/                # Dados de demonstração
tests/               # Especificações de teste
 docs/                # Estratégia e relatórios
.github/workflows/     # Pipeline CI
playwright.config.ts   # Configuração dos testes
```

## Como executar
Pré-requisito: Node.js LTS e npm. O repositório também possui `pnpm-lock.yaml`, gerado e validado na primeira execução local.

```bash
npm install
npx playwright install chromium
npm test
```

Comandos adicionais:
```bash
npm run typecheck
npm run test:smoke
npm run test:regression
npm run test:headed
npm run report
```

Alternativa equivalente com pnpm:
```bash
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm exec playwright test --project=chromium
```

Em Linux/CI, as dependências do navegador podem ser instaladas via `npx playwright install --with-deps chromium`.

## Credenciais e dados
São utilizadas exclusivamente credenciais **públicas de teste** do SauceDemo, documentadas pela Sauce Labs (`standard_user` / `secret_sauce`). Para substituí-las, defina `STANDARD_USER`, `STANDARD_PASSWORD` e, opcionalmente, `BASE_URL` como variáveis de ambiente. Não registre credenciais pessoais no Git.

## CI/CD
O workflow executa a checagem de TypeScript e a suíte Playwright em cada push ou pull request na branch `main`. Relatórios HTML e evidências podem ser baixados como artefatos da execução. A primeira run real permanece pendente: esta cópia local ainda não está conectada a um repositório GitHub.

## Estado da execução
**Baseline local validado em 16/10/2026:** 10 testes executados no Chromium, 10 Passed, 0 Failed, em 12,5 s. O relatório HTML local é gerado em `playwright-report/index.html`; detalhes rastreáveis estão em `docs/EXECUTION_REPORT.md`.

## Roadmap
- [ ] Executar e estabilizar a primeira pipeline CI
- [x] Capturar evidência real do relatório HTML no README
- [ ] Expandir testes de cálculo de subtotal e ordenação por preço
- [ ] Incluir execução Firefox e WebKit
- [ ] Adicionar histórico de bugs reais identificados no ambiente demonstrativo

## Observações
Use o repositório como evidência de raciocínio de QA. Execute os testes, investigue falhas e documente decisões. Não confunda defeitos simulados da aplicação com falhas introduzidas pela suíte.
