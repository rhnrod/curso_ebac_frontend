export const parseToBRL = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrices = (items: Game[]) => {
  return items.reduce((acc, value) => {
    if (value.prices.current) {
      return acc + value.prices.current
    }
    return 0
  }, 0)
}
