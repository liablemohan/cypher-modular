// utils/formatters.js
export function formatComma(n, to) {
    return n.toLocaleString(to === 'inr' ? 'en-IN' : 'en-US', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: to.toUpperCase(),
    });
  }
  
  export function formatExpansion(number, currency) {
    // Implement the expansion logic here
    // This is a placeholder and should be replaced with actual implementation
    return number.toLocaleString(currency === 'inr' ? 'en-IN' : 'en-US', {
      maximumFractionDigits: 2,
    });
  }
  
  export function roundToLargestDenomination(num, currency) {
    const denominationFormat = (value, denom) => `${value} ${denom}`;
  
    if (currency === 'inr') {
      if (num >= 10000000) return denominationFormat((num / 10000000).toFixed(2), 'Crore');
      if (num >= 100000) return denominationFormat((num / 100000).toFixed(2), 'Lakh');
      if (num >= 1000) return denominationFormat((num / 1000).toFixed(2), 'Thousand');
    } else {
      if (num >= 1e12) return denominationFormat((num / 1e12).toFixed(2), 'Trillion');
      if (num >= 1e9) return denominationFormat((num / 1e9).toFixed(2), 'Billion');
      if (num >= 1e6) return denominationFormat((num / 1e6).toFixed(2), 'Million');
      if (num >= 1e3) return denominationFormat((num / 1e3).toFixed(2), 'Thousand');
    }
  
    return num.toFixed(2);
  }
  
  export function extractDenominations(inputString) {
    return inputString.replace(/\d/g, '').replace(/\s+/g, ' ').trim();
  }