// components/CurrencyDropdown.js
import React from 'react';
import PropTypes from 'prop-types';

function CurrencyDropdown({ from, to, onFromChange, onToChange, onFlip, options }) {
  return (
    <div className="div-block-2">
      <div className="w-layout-layout quick-stack-2 wf-layout-layout">
        <div className="w-layout-cell">
          <div className="w-layout-blockcontainer container-6 w-container">
            <div className="w-layout-blockcontainer w-container">
              <select
                className="button default drpdwn w-dropdown-toggle"
                value={from}
                onChange={(e) => onFromChange(e.target.value)}
                aria-label="Select source currency"
              >
                {options.map((currency) => (
                  <option key={currency.value} value={currency.value}>{currency.label}</option>
                ))}
              </select>
            </div>
            <div className="w-layout-blockcontainer w-container">
              <button
                className="button default swap w-button"
                onClick={onFlip}
                aria-label="Swap currencies"
              >
                &#8652;
              </button>
            </div>
            <div className="w-layout-blockcontainer w-container">
              <select
                className="button default drpdwn w-dropdown-toggle"
                value={to}
                onChange={(e) => onToChange(e.target.value)}
                aria-label="Select target currency"
              >
                {options.map((currency) => (
                  <option key={currency.value} value={currency.value}>{currency.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CurrencyDropdown.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onFromChange: PropTypes.func.isRequired,
  onToChange: PropTypes.func.isRequired,
  onFlip: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default CurrencyDropdown;