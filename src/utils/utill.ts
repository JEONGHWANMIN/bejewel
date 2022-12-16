export function currencyPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price);
}
