# Plano de Testes — SauceDemo

## Identificação
Portfólio de QA com Playwright e TypeScript para a aplicação pública SauceDemo. Responsável: João Vítor Cim de Oliveira. Estado: ativo; execuções reais registradas no relatório de execução.

## Objetivo
Verificar os fluxos críticos de autenticação, inventário, carrinho e checkout simulado, produzindo automação reproduzível, rastreabilidade e evidências.

## Escopo
Login válido e inválido, obrigatoriedade, usuário bloqueado e logout; listagem e ordenação de produtos por nome e preço; adição, remoção, persistência e múltiplos itens no carrinho; checkout, obrigatoriedade dos dados e consistência do resumo financeiro.

## Fora do escopo
Pagamento real, carga, segurança, APIs internas, mobile e navegadores além de Chromium nesta etapa.

## Estratégia e tipos
Testes E2E funcionais positivos e negativos; smoke para jornada crítica e regression para validações complementares. Nesta versão, as categorias são perfis de execução exclusivos: a suíte smoke contém 4 cenários mínimos (login válido, inventário disponível, operação básica do carrinho e checkout válido) e a suíte regression contém os outros 13 cenários. Execução local e em CI. Falhas retêm screenshot, vídeo e trace.

## Ferramentas e ambiente
Playwright Test, TypeScript, Node.js 22, Chromium, GitHub Actions e SauceDemo público. Dados: credenciais públicas e cliente sintético.

## Riscos e limitações
Dependência de aplicação externa, mudanças de DOM/massa, indisponibilidade e ausência de execução em múltiplos navegadores.

## Critérios
Entrada: dependências e Chromium instalados, ambiente disponível. Saída: smoke executado, resultados documentados e falhas investigadas. Suspender quando o ambiente externo impedir resultado confiável; retomar após normalização.

## Entregáveis
Casos automatizados, catálogo, matriz, relatório de execução, evidências de falha, tickets Jira e CI.

## Gestão no Jira
O projeto de referência é [SauceDemo | QA Engineering Board](https://jvcimpavel.atlassian.net/jira/software/c/projects/SDQAE/boards/3) (`SDQAE`). A estrutura usa Histórias para funcionalidades, Subtarefas para Test Cases e Tasks independentes para atividades técnicas. O status Kanban acompanha o fluxo de trabalho; `Execution Status` (`Not Run`, `Pass`, `Fail` ou `Blocked`) registra o resultado do teste separadamente.
