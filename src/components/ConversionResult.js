// components/ConversionResult.js
import React from 'react';
import PropTypes from 'prop-types';
import { formatComma, formatExpansion, roundToLargestDenomination, extractDenominations } from '../utils/formatters';

function ConversionResult({ output, from, to, info, currencySymbols }) {
  const formattedOutput = roundToLargestDenomination(output, to);
  const formattedComma = formatComma(output, to);
  const formattedExpand = formatExpansion(output, to);
  const commaDenominations = extractDenominations(formattedExpand);
  const conversionRate = info && info[to] ? info[to].toFixed(2) : 'N/A';

  return (
    <div className="div-block-3">
      <div className="w-layout-layout quick-stack wf-layout-layout">
        <div className="w-layout-cell cell-5">
          <div className="w-layout-layout quick-stack-3 wf-layout-layout">
            <div className="w-layout-cell cell-4">
              <div className="text-block-8">{formattedComma} {currencySymbols[to]}</div>
            </div>
            <div className="w-layout-cell">
              <div className="text-block-3">{commaDenominations}</div>
            </div>
          </div>
        </div>
        <div className="w-layout-cell cell">
          <div className="text-block-5">{formattedOutput} {currencySymbols[to]}</div>
        </div>
        <div className="w-layout-cell">
          <div className="text-block-7">{formattedExpand} {currencySymbols[to]}</div>
        </div>
      </div>
      <div className="text-block-9">
        1 {currencySymbols[from]} = {conversionRate} {currencySymbols[to]}
      </div>
    </div>
  );
}

ConversionResult.propTypes = {
  output: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  info: PropTypes.object,
  currencySymbols: PropTypes.object.isRequired,
};

export default ConversionResult;