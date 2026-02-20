/**
 * Capture all production.dataviz.cnn.io API calls from CNN Markets.
 *
 * Usage:
 * 1. Open https://edition.cnn.com/markets in your browser (and optionally
 *    https://edition.cnn.com/markets/stocks/ONDS or another ticker) to get
 *    stock-specific endpoints like share_price, stock_price_change, etc.
 * 2. Open DevTools (F12) → Console.
 * 3. Paste this entire script and press Enter.
 * 4. Reload the page and use all sections (World markets, Commodities,
 *    Cryptos, stock quote, Economic calendar, etc.) so every request fires.
 * 5. Run copyDatavizUrls() to copy all captured URLs to the clipboard.
 */
(function () {
  const base = 'https://production.dataviz.cnn.io';
  const seen = new Set();
  const list = [];

  function log(url) {
    if (!url || !url.startsWith(base)) return;
    const path = url.replace(base, '');
    if (seen.has(path)) return;
    seen.add(path);
    list.push(path);
    console.log('[dataviz]', path);
  }

  // Intercept fetch
  const origFetch = window.fetch;
  window.fetch = function (url, opts) {
    const u = typeof url === 'string' ? url : (url && url.url);
    if (u) log(u);
    return origFetch.apply(this, arguments);
  };

  // Intercept XHR
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (url) log(url);
    return origOpen.apply(this, arguments);
  };

  console.log('Listening for dataviz.cnn.io requests. Reload the page or use the Markets sections, then run: copyDatavizUrls()');
  window.copyDatavizUrls = function () {
    const full = list.map((p) => base + p);
    const text = full.join('\n');
    if (typeof navigator.clipboard !== 'undefined' && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      console.log('Copied', full.length, 'URLs to clipboard.');
    }
    console.log('Full URLs:\n' + text);
    return full;
  };
})();
