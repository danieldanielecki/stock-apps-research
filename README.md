# Stock app

**Purpose.** This project is open source and aims to help **individual long-term investors** (not traders) make better decisions by:

- **Visualized guidance** — Clear charts and dashboards so you can see what’s going on at a glance.
- **Visualized indicators** — Economic and market metrics explained in plain language: what they are, what they mean, and how to read them.
- **Context on valuation and sentiment** — Whether markets or assets look overpriced, underpriced, in fear, in greed, or in fair-value territory — for **stocks and ETFs** alike.

The app is built to be **beautiful**, easy to use, and focused on **long-term investing** rather than short-term trading. Nothing here is financial advice; it’s a tool for learning and informed decision-making.

### Access & AI tiers (Ditectrev-style)

We want to offer the app in the same spirit as [Ditectrev’s Practice Tests Exams Platform](https://education.ditectrev.com) and its [pricing](https://education.ditectrev.com/pricing): **use it free with ads**, or choose how you get AI-powered enhancements:

| Tier | Description |
|------|-------------|
| **Free (ads-supported)** | Full access to visualized markets, indicators, and metrics. Ads help keep the project sustainable. |
| **Ads-free** | Same experience, no ads. |
| **Local (Ollama)** | AI enhancements run **on your machine** via [Ollama](https://ollama.com) — no data leaves your device; ideal for privacy and offline use. |
| **BYOK (Bring your own key)** | Use your own API keys for the provider of your choice: **OpenAI**, **Google Gemini**, **Mistral AI**, **DeepSeek**, etc. You control cost, data residency, and which model you use. Supports geographically distributed users and different **data governance** / **AI governance** / preference requirements. |
| **Our AI infrastructure** | Optional hosted AI (explanations, summaries, guidance) powered by our own stack — for users who prefer a single, integrated experience without managing keys. |

A dedicated **pricing** page (e.g. `/pricing`) will list these options clearly, like [education.ditectrev.com/pricing](https://education.ditectrev.com/pricing).

**AI beyond chat.** Apps like [Trade Ideas](https://www.trade-ideas.com) and [RockFlow Bobby](https://bobby.rockflow.ai) offer embedded AI chat — a useful but trivial feature. We want to go further: AI that delivers **proper visual representation** of our graphs, data, and explanations — e.g. surfacing or highlighting the right chart, annotating a metric on a timeline, or tying an explanation to the specific visual it describes — not just text in a chat bubble. The goal is “show, don’t just tell.”

### Charts, news & community (TradingView-inspired)

- **TradingView** — [TradingView](https://www.tradingview.com) is the benchmark for **beautiful charts** and a strong **News** section. We aim for similar clarity and polish for long-term investors (without the trading focus).

- **Seeking Alpha — comparison & screeners**
  - [Comparison](https://seekingalpha.com/comparison) — compare multiple symbols side by side (favorite tool).
  - [Sectors hub](https://seekingalpha.com/sectors) — sector comparison: how sectors perform relative to each other.
  - Sectors: [Technology](https://seekingalpha.com/sectors/technology), [Financial](https://seekingalpha.com/sectors/financial), [Consumer Discretionary](https://seekingalpha.com/sectors/consumer-discretionary), [Communication](https://seekingalpha.com/sectors/communication-services), [Healthcare](https://seekingalpha.com/sectors/healthcare), [Industrials](https://seekingalpha.com/sectors/industrials), [Consumer Staples](https://seekingalpha.com/sectors/consumer-staples), [Energy](https://seekingalpha.com/sectors/energy), [Materials](https://seekingalpha.com/sectors/materials), [Real Estate](https://seekingalpha.com/sectors/real-estate), [Utilities](https://seekingalpha.com/sectors/utilities).
  - [Dividend screeners](https://seekingalpha.com/screeners/9679329c-Top-Dividend-Stocks) (e.g. Top Dividend Stocks) — how dividends performed; useful for income-focused views.

- **Seeking Alpha — per-symbol pages**
  - [Profitability](https://seekingalpha.com/symbol/TSLA/profitability), [Growth](https://seekingalpha.com/symbol/TSLA/growth), [Valuation](https://seekingalpha.com/symbol/TSLA/valuation/metrics), [Earnings](https://seekingalpha.com/symbol/TSLA/earnings) — with color coding when a metric is good or bad.
  - **Comparison vs the market** — stock vs the market it’s listed on: [Seeking Alpha charting](https://seekingalpha.com/symbol/TSLA/charting); [Morningstar Trailing Returns](https://www.morningstar.com/stocks/xnas/avgo/trailing-returns) (e.g. [AVGO](https://www.morningstar.com/stocks/xnas/avgo/trailing-returns)) offers similar comparison-to-market views.
  - **Peer comparison** — how a stock stacks up vs peers: [TSLA vs peers](https://seekingalpha.com/symbol/TSLA/peers/comparison); strong reference for context and relative valuation.

- **What we add** — Plain-language explanations: what each metric is, how to read it, and whether the value is favorable or not. Many tools show numbers and colors but don’t explain *why* it’s good or bad; we want beginners to learn while they look. [WallStreetZen industry screeners](https://www.wallstreetzen.com/industries/best-semiconductor-stocks?t=10&p=1&f%5Biid%5D=111&s=mc&sd=desc) (e.g. Best Semiconductor Stocks) use **tooltip explanations** for technical terms (RSI, MACD, SMA, etc.) — we want the same, plus **colors** (e.g. red / green / gray) to suggest overpriced vs underpriced vs fair value, so both “what it means” and “where it stands” are clear at a glance.
- **Tip + color for every indicator (comparison & single).** Comparison views (e.g. Yahoo, Seeking Alpha) often show raw numbers but not *whether* a value is good or bad. We want **every** technical indicator and metric to have: (1) a **tip or short explanation** (what it is, how to read it), and (2) a **visual cue (e.g. color)** indicating good vs not: **relative** in comparison (e.g. which symbol is better on this metric among the compared set), and **absolute** for a single instrument (e.g. is this P/E or RSI favorable vs benchmark or typical range). So users always see “what it is” and “is this good or not” — in both compare and single-stock views.

- **Community** — Explanations, “how to read this metric,” ideas, and guides could be **contributed by GitHub users**: open, reviewable, and versioned like code.

- **Contribution format** — **Markdown** first: familiar to GitHub users, trivial to edit and review in PRs, renders in the app and in repos. We can add richer formats later; Markdown keeps the barrier low.

**App structure (MVP tabs).** For stocks we plan:

- **Overview**
- **Financials**
- **News** (later)
- **Community** (tentative, later)
- **Technicals** (essential)
- **Forecasts** (essential)
- **Seasonals** (super good for MVP)

That’s it — we keep the depth right for beginner investors and skip the rest. Other asset types (ETFs, etc.) get fewer tabs; we always include **Technicals**, **Forecasts**, and **Seasonals**.

**Planned features (nice to have & future):**

- **Calendars**
  - [TradingView Economic Calendar](https://www.tradingview.com/economic-calendar/) — economic events, filters by country/importance (we have CNN’s economic-events endpoint for data). Also: [Yahoo Finance Economic Calendar](https://ca.finance.yahoo.com/calendar/economic/).
  - [TradingView Earnings Calendar](https://www.tradingview.com/earnings-calendar/) — upcoming earnings, EPS estimate vs actual, surprise. Also: [Yahoo Finance Earnings Calendar](https://ca.finance.yahoo.com/calendar/earnings/) (EPS estimate, reported EPS, surprise %, call time).
  - [TradingView Dividend Calendar](https://www.tradingview.com/dividend-calendar/) — dividend amount, ex-dividend date, payment date, yield; sortable by period/country/timezone.
  - [TradingView IPO Calendar](https://www.tradingview.com/ipo-calendar/?countries=us) — e.g. US.
- **Macro & yields**
  - [TradingView Macro Maps](https://www.tradingview.com/macro-maps/) — global macroeconomic trends.
  - [TradingView Yield Curves](https://www.tradingview.com/yield-curves/) — explore and compare yields by country and tenor.
- **Heatmaps** — ETF, Crypto, and Stock heatmaps (TradingView-style) for at-a-glance market views.
- **Markets overview (stocks, ETFs, crypto, commodities)** — Like competing sites, [Yahoo Finance](https://ca.finance.yahoo.com/) offers [Top ETFs](https://ca.finance.yahoo.com/markets/etfs/top/), [Most Active Stocks](https://ca.finance.yahoo.com/markets/stocks/most-active/), [Crypto](https://ca.finance.yahoo.com/markets/crypto/all/), [Commodities](https://ca.finance.yahoo.com/markets/commodities/) — useful references for our own market overviews and heatmaps.
- **Assets screener** — Search and filter stocks (or other assets) by criteria (e.g. valuation, growth, dividends, sector). References: [TradingView Stock Screener](https://www.tradingview.com/screener/), [Seeking Alpha Screeners](https://seekingalpha.com/screeners), [AInvest Aime Screener](https://www.ainvest.com/aime/screener/) (good screener; missing visualizations — we’d add charts/heatmaps), [Yahoo Finance Screeners](https://ca.finance.yahoo.com/research-hub/screener/) — table + heatmap view, filters; useful presets include [Most Active Penny Stocks](https://ca.finance.yahoo.com/research-hub/screener/most_active_penny_stocks/), [Undervalued Growth Stocks](https://ca.finance.yahoo.com/research-hub/screener/undervalued_growth_stocks/), [Day Gainers](https://ca.finance.yahoo.com/research-hub/screener/day_gainers/), [Most Shorted Stocks](https://ca.finance.yahoo.com/research-hub/screener/most_shorted_stocks/), [Undervalued Large Caps](https://ca.finance.yahoo.com/research-hub/screener/undervalued_large_caps/), [Aggressive Small Caps](https://ca.finance.yahoo.com/research-hub/screener/aggressive_small_caps/), and others. Good possible feature for discovering ideas that match our metrics and valuation context.
- **Signals** — Alerts or signals based on metrics, valuation, or technicals (aligned with our “context, not buy/sell” approach). Many apps offer this; references: [Tickeron](https://tickeron.com), [Wundertrading](https://wundertrading.com/en).
- **Sector comparison** — [Seeking Alpha–style sector pages](https://seekingalpha.com/sectors): Technology, Financial, Consumer Discretionary, Communication, Healthcare, Industrials, Consumer Staples, Energy, Materials, Real Estate, Utilities; at-a-glance relative performance.
- **Dividend screeners** — [Seeking Alpha–style dividend presentation](https://seekingalpha.com/screeners/9679329c-Top-Dividend-Stocks) (e.g. Top Dividend Stocks); income-focused, at-a-glance views.
- **Symbol comparison** — Multiple symbols side by side; head-to-head analysis. References: [Seeking Alpha Comparison](https://seekingalpha.com/comparison), [AInvest Compare](https://www.ainvest.com/compare/) (stocks & ETFs, data & AI recommendations), [Yahoo Finance Compare](https://ca.finance.yahoo.com/compare?comps=TSLA,RIVN) (e.g. [TSLA vs RIVN](https://ca.finance.yahoo.com/compare?comps=TSLA,RIVN) — market value, P/E, performance, income statement, balance sheet, cash flow, margins, earnings, ownership; up to four stocks). Unlike plain comparison tables, we add **tips** for each metric and **relative** color (which symbol is better/worse on that metric) so users see not just the number but whether it’s good or not in context.
- **Per-symbol fundamentals & peer comparison** — [Seeking Alpha–style](https://seekingalpha.com/symbol/TSLA/profitability) profitability, growth, valuation, earnings with good/bad color coding; comparison vs [market](https://seekingalpha.com/symbol/TSLA/charting); [peer comparison](https://seekingalpha.com/symbol/TSLA/peers/comparison) for context and relative valuation.
- **Ownership structure** — [Morningstar Ownership](https://www.morningstar.com/stocks/xnas/avgo/ownership) (e.g. [AVGO](https://www.morningstar.com/stocks/xnas/avgo/ownership)): who holds the stock (institutions, insiders, etc.); nice to have for context on who’s invested.
- **Fair value / price vs fair value** — Show whether a stock is over- or undervalued vs an estimated fair value (e.g. DCF-based). References: [Morningstar Price/Fair Value](https://www.morningstar.com/stocks/xnas/avgo/price-fair-value) (e.g. [AVGO](https://www.morningstar.com/stocks/xnas/avgo/price-fair-value)); [WallStreetZen](https://www.wallstreetzen.com/stocks/us/nasdaq/nvda) (e.g. [NVDA](https://www.wallstreetzen.com/stocks/us/nasdaq/nvda)) — current price vs fair value, overvalued/undervalued %, and due-diligence-style valuation checks. Fits our “context on valuation” goal.

**Reference platform:** [AInvest](https://www.ainvest.com) brings together many of the features we’ve cited across competitors: screener ([Aime Screener](https://www.ainvest.com/aime/screener/)), [Compare](https://www.ainvest.com/compare/) (stocks & ETFs), AI chart analysis, backtesting, news, and market dashboard — a useful single reference for how these ideas can sit in one product.

### Beautiful charts by feature

Suggested chart types for each area — clear, scannable, and aligned with long-term investing (not noisy trading UIs).

- **Overview**
  - Area or line chart (price over time), sparklines for key metrics (volume, range). Optional: candlestick for OHLC.
  - One main chart; time ranges (1Y, 5Y, Max) and clean axes.

- **Financials**
  - Bar chart (revenue/income by year or quarter). Treemap or stacked bar (revenue by segment). Progress bars / gauges (e.g. valuation vs sector). Line chart (revenue, EPS, margins over time).
  - Emphasize trends and composition; tooltips for definitions.
- **Technicals**
  - Gauges or half-donuts (RSI, MACD, etc.) with red/green/gray for overpriced / underpriced / fair. **Summary cards** with a small **sparkline** per indicator.
  - **Tip + absolute color** on every indicator: tooltip for “what it means,” color for whether the level is good or not (absolute vs benchmark or typical range). Same idea in comparison: relative color for “which is better.”

- **Forecasts**
  - Range bar or **bullet** (price target: low / consensus / high). **Horizontal bar** (analyst ratings: Strong Buy → Sell). **Grouped bar** or **line** (EPS/revenue: actual vs estimate by quarter). **Surprise indicator** (e.g. up/down arrow or small bar for beat/miss).
  - Make “what analysts expect” obvious at a glance.

- **Seasonals**
  - Heatmap (month × year, color = cumulative % return) or **bar chart** (avg return by month). Optional: **line** (cumulative % by month across years).
  - One clear “historical pattern by month”; always pair with disclaimer.

- **World markets**
  - Choropleth map (countries/regions colored by performance). Bar chart (indices by region). Small multiples (mini line charts per region).
  - Map + bar or small multiples for quick comparison.

- **Fear & Greed**
  - Gauge or meter (0–100 scale), timeline (historical Fear & Greed over time).
  - Single number + short history; minimal, iconic.

- **Economic calendar**
  - Timeline or **list** (events by date, with importance/impact styling). **Filter chips** (country, importance).
  - Scannable list; optional mini **bar** for “events per day”.

- **Earnings / Dividend / IPO calendars**
  - Calendar grid (month view with dots or badges). **Timeline** (upcoming by date). **Table + sparkline** (estimate vs actual for earnings).
  - Calendar for “when”; table for “what happened”.

- **Macro maps**
  - Choropleth (country/region by macro metric). Bubble map (size = magnitude, color = direction).
  - Global at-a-glance; link to detail.

- **Yield curves**
  - Line chart (yield % vs tenor: 1M, 3M, 6M, 1Y, …). Multi-line (compare countries or dates). Optional area for spread.
  - Classic yield-curve view; clear legend.

- **Heatmaps (stocks / sectors / ETF)**
  - Matrix heatmap (rows = symbols/sectors, columns = time or metrics; color = return or value). **Grid of tiles** (each cell = one symbol, color = performance).
  - At-a-glance “what’s up, what’s down”; click for detail.

- **Sector comparison**
  - Horizontal bar (sectors by return or weight). **Radar** (sectors on axes). **Grouped bar** (sectors vs benchmark over periods).
  - “How did sectors perform relative to each other”.

- **Dividend screeners**
  - Table with sparklines (yield, growth over time). Bar chart (top dividends by yield or amount). Ranked list with small trend line.
  - Income-focused; sortable, scannable.

- **Symbol comparison**
  - Small multiples (one line chart per symbol, same scale). Grouped bar (metric A vs B vs C per symbol). Table with inline sparklines.
  - Same scale so comparison is fair. **Tip + relative color** on every metric: tooltip for “what it is,” color for “which is better/worse” in the comparison.

- **Peer comparison**
  - Radar chart (one axis per metric, one series per symbol). **Horizontal bar** (symbols × metric). **Bullet chart** (symbol vs peer avg or benchmark).
  - “This stock vs peers” on valuation, growth, profitability. **Tip + relative color** (vs peers) so each metric shows not just the value but whether it’s good or not in context.

**Chart library ideas**

- Price/charts: [TradingView Charting Library](https://www.tradingview.com/charting-library-docs/), [Lightweight Charts](https://tradingview.github.io/lightweight-charts/) (open-source), [Highcharts](https://www.highcharts.com/) (stock charts, gauges, maps).
- General: [Recharts](https://recharts.org/), [Victory](https://formidable.com/open-source/victory/) (React), [Chart.js](https://www.chartjs.org/), [Apache ECharts](https://echarts.apache.org/).
- Data viz / custom: [D3.js](https://d3js.org/) (low-level; [d3-shape](https://github.com/d3/d3-shape), [d3-scale](https://github.com/d3/d3-scale)), [Observable Plot](https://observableh.com/plot/) (declarative), [Vega](https://vega.github.io/vega/) / [Vega-Lite](https://vega.github.io/vega-lite/) (grammar of graphics), [ApexCharts](https://apexcharts.com/) (modern SVG).
- Maps: [Mapbox](https://www.mapbox.com/), [Leaflet](https://leafletjs.com/), [Deck.gl](https://deck.gl/), Highcharts Maps.
- Pick one or two for consistency and bundle size.

### Technicals (indicators summary)

[TradingView’s Technicals view](https://www.tradingview.com/symbols/NASDAQ-AMD/technicals/) (e.g. oscillators, moving averages, pivots with summary gauges) is a strong reference. Two things we do differently:

![Technical indicators summary](technical-indicators.png)

*Example: TradingView-style indicators’ summary (screenshot).*

- **Tooltips.** The current Technicals UI doesn’t explain what each indicator is or how to read it. We want **tooltips** (or inline help) on every indicator name and value so users can learn what “Relative Strength Index (14)”, “Ichimoku Base Line”, “Pivots (Classic/Fibonacci)”, etc. mean without leaving the page. [WallStreetZen industry screeners](https://www.wallstreetzen.com/industries/best-semiconductor-stocks?t=10&p=1&f%5Biid%5D=111&s=mc&sd=desc) are a good reference for tooltip-style explanations of technical terms; we combine that with color coding for valuation.
- **Red / green / gray = valuation context, not buy/sell.** We use **red** for **overpriced**, **green** for **underpriced**, and **gray** for **fairly priced**. We do **not** frame signals as “Buy” or “Sell” — we aim to inform long-term investors about relative value and context, not to suggest trading actions. So: **tooltips for “what it means” + colors for “over/under/fair”** in one place.

### Forecasts

[TradingView’s Forecast view](https://www.tradingview.com/symbols/NASDAQ-AMD/forecast/) (price target, analyst rating, EPS and revenue with reported vs estimate) is a strong reference. It clearly presents **what analysts are expecting** — price target range, ratings breakdown, and quarterly EPS/revenue with surprises — so we’re happy to keep this kind of layout as-is. [WallStreetZen Stock Forecast](https://www.wallstreetzen.com/stocks/us/nasdaq/nvda/stock-forecast) (e.g. [NVDA](https://www.wallstreetzen.com/stocks/us/nasdaq/nvda/stock-forecast)) also has this: analyst price targets (min / avg / max), Strong Buy → Strong Sell breakdown, analyst-by-analyst table with price target and upside, plus EPS and revenue forecasts (1Y–3Y) and forecast ROE/ROA vs industry — a good reference for the Forecasts tab.

![Forecast: price target, analyst rating, EPS and revenue](forecast.png)

*Example: TradingView-style Forecasts (price target, analyst rating, EPS, revenue).*

### Seasonals

[TradingView’s Historical seasonal performance](https://www.tradingview.com/symbols/NASDAQ-AMD/seasonals/) is **superior** and **super good to have in the MVP**. It reveals recurring monthly trends (cumulative % by month across years) so users can spot historical patterns; we’ll pair it with a clear disclaimer that past seasonality is not a guarantee of future performance.

![Historical seasonal performance](seasonal.png)

*Example: TradingView-style Seasonals (screenshot).*

### Financials

The **Financials** tab on TradingView has sub-tabs: **Overview**, **Statements**, **Statistics**, **Dividends**, **Earnings**, **Revenue**, and **More** (e.g. [AMD](https://www.tradingview.com/symbols/NASDAQ-AMD/financials-overview/), [NFLX](https://www.tradingview.com/symbols/NASDAQ-NFLX/financials-overview/)). The Overview (key facts, valuation, growth & profitability, revenue breakdown, estimates, dividends, financial health) is our reference — but the full set is **overdetailed for beginner investors**. We include a **Financials** tab in the app with the screenshot below as a target level of detail; we can simplify or progressive-disclose so newcomers aren’t overwhelmed.

![Financials overview: key facts, valuation, revenue, estimates, financial health](financials.png)

*Example: TradingView-style Financials overview (screenshot).*

---

## World markets

![World markets map](map-current-markets.png)

*Source: [CNN Markets](https://edition.cnn.com/markets)*

## Fear & Greed Index

![Fear & Greed Index](fear-and-greed.png)

*Source: [CNN Fear & Greed Index](https://edition.cnn.com/markets/fear-and-greed)*

## Where stock apps get their data (global overview)

Across the internet — websites, mobile apps, broker UIs — stock and market data ultimately flows from a small set of sources. This section summarizes the **global** picture (not specific to this project).

### 1. Where the data actually comes from (upstream)

- **Exchanges** — NYSE, Nasdaq, Cboe, LSE, and other exchanges produce the trades and quotes.
- **Consolidated feeds (SIPs)** — In the US, a handful of Securities Information Processors aggregate that:
  - **CTA** (Consolidated Tape Association) — NYSE-listed and related (Network A/B).
  - **UTP** — Nasdaq-listed and OTC.
  - **OPRA** — options.
- Exchanges and SIPs sell or license this data. Apps and websites almost never connect directly to exchanges or SIPs; they go through intermediaries.

### 2. Who apps and websites typically use (data providers / APIs)

Apps and sites usually get data from **commercial market-data or fintech API providers** that license exchange/SIP data (or other sources) and expose it via APIs:

| Type | Examples |
|------|----------|
| **Retail / developer APIs** | **Alpha Vantage**, **Polygon.io**, **Finnhub**, **Financial Modeling Prep (FMP)**, **Twelve Data**, **Yahoo Finance** (unofficial), **IEX Cloud** (shut down 2024) |
| **Professional / institutional** | **Bloomberg**, **Refinitiv (LSEG)**, **FactSet**, **S&P Global**, **Intrinio**, **IEX Exchange** (direct feed, paid) |
| **Aggregators / vendors** | **Quodd** (formerly Xignite), **Cboe**, **Nasdaq Data Link** — used by many consumer and pro apps behind the scenes |
| **Broker-sourced** | Some apps display data provided by their **broker** (e.g. Robinhood, Schwab), who have their own contracts with exchanges and data vendors |

So “across the internet,” stock apps get their API information from these **data providers**, which in turn get it from **exchanges and consolidated tapes (SIPs)**.

### 3. Typical flow

1. **Exchanges / SIPs** produce and distribute official market data.
2. **Data vendors** (Bloomberg, Refinitiv, Polygon, Alpha Vantage, Finnhub, etc.) license it and often add fundamentals, news, and alternative data.
3. **Websites and mobile apps** — from large (Robinhood, Yahoo Finance, CNN Markets) to small — call these vendors’ **APIs** or use **broker-supplied** data that comes from the same kind of vendor/exchange contracts.

So globally: stock apps get their API data from **market-data API providers and brokers**, which ultimately source it from **exchanges and consolidated tape (SIP)** feeds.

---

## Yahoo Finance API (unofficial)

Yahoo Finance quote and related endpoints can be fetched **without an API key** (like CNN Business dataviz); others (e.g. **MSN**) require a key. The endpoints are **unofficial/undocumented** and may change or be restricted; use at your own risk and check Yahoo’s terms.

**Example — quote (v7):**  
`https://query1.finance.yahoo.com/v7/finance/quote?&symbols=TSLA&fields=currency,fromCurrency,toCurrency,exchangeTimezoneName,exchangeTimezoneShortName,gmtOffSetMilliseconds,regularMarketChange,regularMarketChangePercent,regularMarketPrice,regularMarketTime,preMarketChange,preMarketChangePercent,preMarketPrice,preMarketTime,priceHint,postMarketChange,postMarketChangePercent,postMarketPrice,postMarketTime,extendedMarketChange,extendedMarketChangePercent,extendedMarketPrice,extendedMarketTime,overnightMarketChange,overnightMarketChangePercent,overnightMarketPrice,overnightMarketTime&crumb=hxfxfaecnO8&formatted=false&region=US&lang=en-US`

- **symbols** — Comma-separated tickers (e.g. `TSLA`, `AAPL,MSFT`).
- **fields** — Requested fields (currency, regularMarketPrice, preMarketPrice, postMarketPrice, etc.).
- **crumb** — Sometimes required by Yahoo for CSRF; may be session-dependent when called from a browser context; some server-side or direct HTTP usage may work without it or with a fixed value depending on endpoint. For production, consider official data providers or documented Yahoo alternatives.

**Summary:** Like CNN dataviz, Yahoo quote APIs are a no-key option for prototyping or light use; MSN and many other providers require an API key.

---

## CNN Business API endpoints

**What kind of API does CNN Business offer?** CNN does **not** publish an official developer API or documentation for Markets or Business data. References:

- **No official API** — There is no public “CNN Business API” or “CNN Markets API” from CNN. The [CNN Markets](https://edition.cnn.com/markets) page and [Fear & Greed](https://edition.cnn.com/markets/fear-and-greed) are consumer products; programmatic access is not documented.
- **Third‑party news APIs** — Services such as [CNN API on RapidAPI](https://rapidapi.com/mahmudulhasandev/api/cnn-api1) offer **news** by category (Business, Politics, etc.) and article details. They are unofficial, do not provide markets data (quotes, Fear & Greed, commodities, etc.), and are not from CNN.
- **Data providers** — CNN’s Markets footer credits **BATS** for most stock quote data and **FactSet** (and others) for indices and reference data. Those providers have their own APIs (e.g. [FactSet Developer](https://developer.factset.com/api-catalog)); CNN does not resell or document access.
- **dataviz.cnn.io** — The endpoints below are used by the CNN Markets front end (`production.dataviz.cnn.io`). They are **internal/undocumented** (no official docs or terms for developer use). We use them in this project as discovered; they may change or be restricted. For production apps, consider official data providers and CNN’s [Terms of Use](https://www.cnn.com/terms).

---

Endpoints from [production.dataviz.cnn.io](https://production.dataviz.cnn.io) used by the [CNN Markets](https://edition.cnn.com/markets) page (no API key required). The list below includes manually verified samples; to **get the full set of endpoints** from the live page:

1. Open [https://edition.cnn.com/markets](https://edition.cnn.com/markets) and optionally [a stock page](https://edition.cnn.com/markets/stocks/ONDS) (e.g. `/markets/stocks/{SYMBOL}`) to capture symbol-specific endpoints.
2. Open DevTools (F12) → **Console**.
3. Paste and run the script in [`scripts/capture-cnn-dataviz-calls.js`](scripts/capture-cnn-dataviz-calls.js).
4. Reload the page and use all sections (World markets, Commodities, Cryptos, stock quote, etc.) so every data request fires.
5. In the console run `copyDatavizUrls()` to copy every `dataviz.cnn.io` URL to your clipboard.

**Placeholders:** `{SYMBOL}` = ticker (e.g. ONDS, NVDA), `{DATE}` = `YYYY-MM-DD`, `{START_DATE}` / `{END_DATE}` = date range, `{REGIONS}` = comma-separated (e.g. Americas,Asia-Pacific,Europe), `{LIMIT}` = number.

Base URL: `https://production.dataviz.cnn.io`

### Markets

| Path | Description |
|------|-------------|
| `/markets/currency/summary` | Currency rates summary |
| `/markets/crypto/summary` | Cryptocurrency summary |
| `/markets/rates/summary` | Interest rates / bonds summary |
| `/markets/commodities/summary` | Commodities summary |
| `/markets/commodities` | Full commodities data |
| `/markets/world/regions/{REGIONS}/{DATE}` | World markets by region and date (e.g. Americas,Asia-Pacific,Europe) |
| `/markets/events/economic/{START_DATE}/{END_DATE}/{LIMIT}` | Economic calendar events |
| `/markets/stocks/actives` | Active / hot stocks (today’s movers) |

### Fear & Greed Index

| Path | Description |
|------|-------------|
| `/index/fearandgreed/graphdata` | Historical Fear & Greed (JSON). Optional: `/{START_DATE}` for data from that date. |

### Insights (per-stock; replace `{SYMBOL}` with ticker)

| Path | Description |
|------|-------------|
| `/insights/market_cap/{SYMBOL}` | Market capitalization for symbol |
| `/insights/share_price/{SYMBOL}` | Share price for symbol |
| `/insights/stock_price_change/{SYMBOL}` | Stock price change for symbol |
| `/insights/market_open_close/{SYMBOL}` | Market open/close status for symbol |
| `/insights/total_revenue/{SYMBOL}` | Total revenue for symbol |

## TradingView data & APIs

TradingView does **not** offer a public REST API for the data shown on symbol pages (financials, technicals, forecasts, seasonals, screener). What exists:

- **UDF (Universal Datafeed)** — For the [Charting Library](https://www.tradingview.com/charting-library-docs/latest/connecting_data/UDF/) only: you run a server that implements `GET /config`, `GET /symbol_info` (or `?group=...`), `GET /history`, and optionally symbol search. TradingView provides a **demo** at `https://demo-feed-data.tradingview.com` for chart bars (OHLCV). This is for **charts**, not fundamentals/forecasts/technicals.
- **Broker REST API** — For [broker integration](https://www.tradingview.com/broker-api-docs/rest-api-spec) (accounts, orders, quotes, executions). Not for public market/screener data.
- **Unofficial / community** — Libraries such as [tradingview-screener](https://github.com/jmargieh/tradingview-screener) (Python/TypeScript) or [TradingView-API](https://github.com/Mathieu2301/TradingView-API) query TradingView’s internal backends for screener/symbol data. No API keys, but **unofficial** and may break when TradingView changes; use at your own risk if you need that data source.

For this app, market data will come from other providers (e.g. CNN dataviz, Finnhub, or similar); TradingView is our **UI/UX reference**, not the primary data API.

## Seeking Alpha data & APIs

**Can we reuse endpoints for fetching data?** Summary of what exists:

- **RapidAPI (official partner API)** — [Seeking Alpha API on RapidAPI](https://rapidapi.com/apidojo/api/seeking-alpha) (apidojo) is a **documented, key-based** way to fetch Seeking Alpha data. Free tier: 500 requests/month, 5 req/sec; paid tiers for more. Typical data: real-time/delayed quotes, news, analyst ratings, earnings transcripts, market analysis, screeners. Use this if you want a **reusable, supported** source for Seeking Alpha–style data; check RapidAPI for current endpoints and limits.
- **Where Seeking Alpha gets its data** — Per [Seeking Alpha’s help](https://help.seekingalpha.com/basic/where-do-you-source-your-market-data-from): quotes from **Quodd** (formerly Xignite) and **Cboe BZX** (real-time) / **Nasdaq UTP** (delayed); fundamentals and ratings from **S&P Global Market Intelligence**; backtest data from **ClariFI**. Those are licensed to Seeking Alpha; we cannot call them directly. For our app, we’d use RapidAPI above or other providers (e.g. Finnhub, CNN dataviz).
- **Internal/undocumented frontend APIs** — The Seeking Alpha website (symbol pages: profitability, growth, valuation, earnings, peers, charting, comparison) likely loads data from **internal JSON endpoints**. They are not documented. Seeking Alpha uses **bot protection** (e.g. PerimeterX), so automated scraping of the site from scripts won’t work; discovery has to happen in a **real browser**. Use the capture script below to log all requests when you use the site; then inspect or paste the results to identify API base URLs and paths. **Caveats:** endpoints may require cookies or auth, may change without notice, and may violate [Seeking Alpha’s Terms of Use](https://seekingalpha.com/page/terms_of_use); for production, prefer the RapidAPI or other official data sources.
- **Community / unofficial** — Repos such as [AG3NTZ3R0/seeking-alpha](https://github.com/AG3NTZ3R0/seeking-alpha) (Python) reference a “publicly available API” but the code is minimal; in practice, **RapidAPI** is the documented route for programmatic access.

**Bottom line:** For **reusable fetching**, use the **Seeking Alpha API on RapidAPI** (with API key and tier limits). For **UI/UX**, we treat Seeking Alpha as a reference (sectors, comparison, profitability, growth, valuation, earnings, peers); actual data can come from RapidAPI, Finnhub, CNN dataviz, or other providers.

### Discovering Seeking Alpha frontend endpoints (browser only)

Because of bot protection, run this in a **real browser** while using Seeking Alpha:

1. Open a symbol page (e.g. [TSLA profitability](https://seekingalpha.com/symbol/TSLA/profitability)), then open [Growth](https://seekingalpha.com/symbol/TSLA/growth), [Valuation](https://seekingalpha.com/symbol/TSLA/valuation/metrics), [Earnings](https://seekingalpha.com/symbol/TSLA/earnings), [Peers](https://seekingalpha.com/symbol/TSLA/peers/comparison), [Charting](https://seekingalpha.com/symbol/TSLA/charting)), or [Comparison](https://seekingalpha.com/comparison), [Sectors](https://seekingalpha.com/sectors).
2. Open DevTools (F12) → **Console**.
3. Paste and run the script in [`scripts/capture-seeking-alpha-calls.js`](scripts/capture-seeking-alpha-calls.js).
4. Reload and click through each tab so data requests fire.
5. In the console run `copySeekingAlphaUrls()` to copy all captured URLs, or `copySeekingAlphaUrls(true)` to copy only likely API endpoints (excludes static assets).

**Discovered endpoints (to fill after running the script):**  
*(Run the script above, then add base URL and paths here. Example format below.)*

| Base URL / path | Description |
|-----------------|-------------|
| *(none documented yet; run capture script in browser)* | Symbol profitability, growth, valuation, earnings, peers, charting, comparison, sectors |

## AI-based trading bots: Reddit discussion summary

Summary of [r/learnmachinelearning: *Do AI-Based Trading Bots Actually Work for Consistent Profit?*](https://www.reddit.com/r/learnmachinelearning/comments/16m3gx7/do_aibased_trading_bots_actually_work_for/):

- **Consensus:** Most commenters said retail AI trading bots are **not** a reliable way to make consistent profit. The OP’s takeaway: pattern-based ML success is largely **luck**; sentiment-based bots would be **too slow** vs institutional systems.
- **Why it’s hard:** Markets have “almost as many patterns in pure noise.” Even if a strategy is briefly profitable, it often stops working; competition and real-time algos erode edges. Backtests often look good due to **survivorship/selection bias** and then fail in live trading.
- **Cause vs correlation:** Truly profitable systems tend to be built on **cause-and-effect** and proper hypothesis testing, not just pattern/correlation hunting. Example: predicting ice melting from temperature (cause) vs from “daytime” (correlation).
- **Retail vs institutions:** Retail traders usually lack hedge-fund-level compute, latency, and data (e.g. Bloomberg). The bar is beating an **index** (e.g. S&P 500), not the average trader—and few quant shops do that. Sentiment/news-based bots are at a speed disadvantage.
- **Counterpoints:** Some argued AI will keep improving and eventually disrupt trading; others suggested focusing on **arbitrage or anomaly detection** rather than raw price prediction, or **human-augmented research**.
- **Notable exception:** [Renaissance Technologies](https://en.wikipedia.org/wiki/Renaissance_Technologies) (Jim Simons, Medallion Fund) was cited as a rare, long-term successful use of data/ML in trading—with resources and scale retail traders don’t have.
- **Pragmatic take:** Many recommended **buy-and-hold** (e.g. SPY) over trying to out-trade the market with a bot. *Nothing in this app or in that thread is financial advice.*

---

## Related projects

- **[OpenStock](https://github.com/Open-Dev-Society/OpenStock)** — Open-source alternative to paid market platforms (Next.js, Finnhub, TradingView). Good reference app; note there is no time-limited trial, so you need to set up auth and APIs before trying it (unlike [Practice-Tests-Exams-Platform](https://github.com/Ditectrev/Practice-Tests-Exams-Platform), which offers a [15-minute trial](https://github.com/Ditectrev/Practice-Tests-Exams-Platform) for trying the app without full signup).
