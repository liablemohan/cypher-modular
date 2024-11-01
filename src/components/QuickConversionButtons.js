// components/QuickConversionButtons.js
import React from 'react';
import PropTypes from 'prop-types';

const QUICK_CONVERSION_AMOUNTS = [
  { amount: 1e6, label: '1 M' },
  { amount: 5e7, label: '50 M' },
  { amount: 25e7, label: '250 M' },
  { amount: 1e9, label: '1 B' },
  { amount: 5e10, label: '50 B' },
  { amount: 1e7, label: '10 M' },
  { amount: 1e8, label: '100 M' },
  { amount: 5e8, label: '500 M' },
  { amount: 1e10, label: '10 B' },
  { amount: 1e11, label: '100 B' },
];

function QuickConversionButtons({ onQuickConvert }) {
  return (
    <div className="w-layout-grid grid-2">
      {QUICK_CONVERSION_AMOUNTS.map(({ amount, label }) => (
        <button
          key={label}
          className="button default w-button"
          onClick={() => onQuickConvert(amount, label.split(' ')[1])}
          aria-label={`Convert ${label}`}
        >
          <strong>{label}</strong>
        </button>
      ))}
    </div>
  );
}

QuickConversionButtons.propTypes = {
  onQuickConvert: PropTypes.func.isRequired,
};

export default QuickConversionButtons;