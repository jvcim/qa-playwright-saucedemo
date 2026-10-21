# QA Automation Portfolio | Playwright + TypeScript

> Projeto de estudo independente. **Não é afiliado à Sauce Labs.** Os testes exercitam a aplicação pública [SauceDemo](https://www.saucedemo.com/). Não realiza pagamentos reais.

## Objetivo
Demonstrar planejamento de testes, automação E2E, cenários positivos e negativos, Page Object Model (POM), rastreabilidade, evidências e execução CI/CD.

## Stack
- Playwright Test + TypeScript
- Page Object Model (POM)
- GitHub Actions (CI)
- Relatório HTML, screenshot, vídeo e trace em caso de falha

## Cobertura automatizada
| Módulo | Testes | Cenários |
|---|---:|---|
| Login | 6 | Válido, senha inválida, campos obrigatórios, bloqueado e logout |
| Inventário | 3 | Listagem, ordenação por nome e por preço |
| Carrinho | 3 | Adição/remoção, persistência e múltiplos itens |
| Checkout | 5 | Conclusão simulada, obrigatoriedade e resumo financeiro |
| **Total** | **17** | **Suite E2E executada** |

Para uma leitura executiva, veja o [caso de estudo do portfólio](docs/PORTFOLIO_CASE_STUDY.md). Para entender a organização e o fechamento do Jira sem precisar acessar a instância pessoal, consulte o [snapshot público do Jira](docs/JIRA_PROJECT_SNAPSHOT.md). Os casos e a estratégia estão detalhados em [`docs/TEST_PLAN.md`](docs/TEST_PLAN.md), [`docs/TEST_CATALOG.md`](docs/TEST_CATALOG.md) e [`docs/TRACEABILITY_MATRIX.md`](docs/TRACEABILITY_MATRIX.md). O acompanhamento de execução está em [`docs/EXECUTION_REPORT.md`](docs/EXECUTION_REPORT.md), e o contexto de continuidade em [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md). Um modelo de registro de defeitos está em [`docs/BUG_REPORT_TEMPLATE.md`](docs/BUG_REPORT_TEMPLATE.md).

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
O workflow executa a checagem de TypeScript e a suíte Playwright em cada push ou pull request na branch `main`. A [run #4 do GitHub Actions](https://github.com/jvcim/qa-playwright-saucedemo/actions/runs/39528450078) foi aprovada para a versão com 17 testes e publicou o relatório HTML como artefato. O repositório é público; o Jira operacional permanece privado.

## Estado da execução
**Execuções locais validadas:** baseline de 16/10/2026 com 10 Passed em 12,5 s; ampliação de 20/10/2026 com 17 testes no Chromium, 17 Passed e 0 Failed em 12,2 s. O relatório HTML local é gerado em `playwright-report/index.html`; detalhes rastreáveis estão em `docs/EXECUTION_REPORT.md`.

## Roadmap
- [x] Executar e estabilizar a primeira pipeline CI
- [x] Capturar evidência real do relatório HTML no README
- [x] Expandir testes de cálculo de subtotal e ordenação por preço
- [ ] Incluir execução Firefox e WebKit
- [ ] Adicionar histórico de bugs reais identificados no ambiente demonstrativo

## Observações
Use o repositório como evidência de raciocínio de QA. Execute os testes, investigue falhas e documente decisões. Não confunda defeitos simulados da aplicação com falhas introduzidas pela suíte.
