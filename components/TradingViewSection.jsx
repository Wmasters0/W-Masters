export default function TradingViewSection() {
  return (
    <section className="mx-auto w-[min(1220px,92%)] py-16">
      <div className="mb-8">
        <h2 className="text-4xl font-black tracking-[-.04em] md:text-6xl">Live Market View</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <iframe
            title="TradingView BTCUSDT"
            src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=240&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hide_side_toolbar=0&allow_symbol_change=1&save_image=0&studies=[]"
            className="h-[520px] w-full"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <iframe
            title="TradingView Market Overview"
            src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22520%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Crypto%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22BINANCE%3ABTCUSDT%22%2C%22d%22%3A%22Bitcoin%22%7D%2C%7B%22s%22%3A%22BINANCE%3AETHUSDT%22%2C%22d%22%3A%22Ethereum%22%7D%2C%7B%22s%22%3A%22CRYPTOCAP%3ATOTAL3%22%2C%22d%22%3A%22TOTAL3%22%7D%5D%7D%5D%7D"
            className="h-[520px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
