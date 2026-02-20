/**
 * Capture API calls from Seeking Alpha pages (symbol data, profitability, growth, etc.).
 *
 * Usage:
 * 1. Open a Seeking Alpha symbol page in your browser, e.g.:
 *    https://seekingalpha.com/symbol/TSLA/profitability
 *    https://seekingalpha.com/symbol/TSLA/growth
 *    https://seekingalpha.com/symbol/TSLA/valuation/metrics
 *    https://seekingalpha.com/symbol/TSLA/earnings
 *    https://seekingalpha.com/symbol/TSLA/peers/comparison
 *    https://seekingalpha.com/symbol/TSLA/charting
 *    https://seekingalpha.com/comparison
 *    https://seekingalpha.com/sectors
 * 2. Open DevTools (F12) → Console.
 * 3. Paste this entire script and press Enter.
 * 4. Reload the page and click through tabs (Profitability, Growth, Valuation, etc.)
 *    so data requests fire.
 * 5. Run copySeekingAlphaUrls() to copy captured API URLs to the clipboard.
 * 6. Optionally run copySeekingAlphaUrls(true) to include only likely API endpoints
 *    (excludes obvious static assets).
 */
(function () {
  const includePattern = /seekingalpha\.com/i;
  const excludeStatic = /\.(js|css|png|jpg|jpeg|gif|webp|woff2?|ico|svg|map)(\?|$)/i;
  const seen = new Set();
  const list = [];

  function isLikelyApi(url) {
    if (excludeStatic.test(url)) return false;
    if (/\/api\//i.test(url) || /\/v\d+\//i.test(url)) return true;
    if (/\.(json|jsonp)(\?|$)/i.test(url)) return true;
    if (/\/graphql/i.test(url)) return true;
    return false;
  }

  function log(url, apiOnly) {
    if (!url || typeof url !== 'string' || !includePattern.test(url)) return;
    if (apiOnly && !isLikelyApi(url)) return;
    const norm = url.split('?')[0];
    if (seen.has(norm)) return;
    seen.add(norm);
    list.push(url);
    console.log('[seekingalpha]', url);
  }

  const origFetch = window.fetch;
  window.fetch = function (url, opts) {
    const u = typeof url === 'string' ? url : (url && url.url);
    if (u) log(u, false);
    return origFetch.apply(this, arguments);
  };

  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (url) log(url, false);
    return origOpen.apply(this, arguments);
  };

  console.log(
    'Listening for seekingalpha.com requests. Reload the page and use symbol tabs (Profitability, Growth, etc.), then run: copySeekingAlphaUrls() or copySeekingAlphaUrls(true) for API-like URLs only.'
  );
  window.copySeekingAlphaUrls = function (apiOnly) {
    const filtered = apiOnly ? list.filter((u) => isLikelyApi(u)) : list;
    const text = [...new Set(filtered)].join('\n');
    if (typeof navigator.clipboard !== 'undefined' && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      console.log('Copied', filtered.length, 'URL(s) to clipboard.');
    }
    console.log('URLs:\n' + text);
    return filtered;
  };
})();
