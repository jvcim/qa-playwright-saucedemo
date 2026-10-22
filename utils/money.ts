/** Converte uma quantia monetária exibida em dólares para centavos sem usar ponto flutuante. */
export function parseUsdToCents(value: string): number {
  const match = value.match(/\$\s*(\d+)\.(\d{2})/);

  if (!match) {
    throw new Error(`Valor monetário inválido: "${value}"`);
  }

  return Number(match[1]) * 100 + Number(match[2]);
}
