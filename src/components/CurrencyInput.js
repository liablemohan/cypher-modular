// components/CurrencyInput.js
import React from 'react';
import PropTypes from 'prop-types';

function CurrencyInput({ value, onChange, onAmountChange, amountOptions }) {
  return (
    <div className="div-block">
      <div className="group">
        <input
          type="text"
          placeholder="amount"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Enter amount to convert"
        />
        <select
          className="select"
          onChange={(e) => onAmountChange(e.target.value)}
          aria-label="Select amount multiplier"
        >
          {Object.entries(amountOptions).map(([key, value]) => (
            <option key={key} value={value}>{key}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  amountOptions: PropTypes.object.isRequired,
};

export default CurrencyInput;