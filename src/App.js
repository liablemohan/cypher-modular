// App.js
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import CurrencyInput from './components/CurrencyInput';
import CurrencyDropdown from './components/CurrencyDropdown';
import ConversionResult from './components/ConversionResult';
import QuickConversionButtons from './components/QuickConversionButtons';
import { currencyReducer, initialState } from './reducers/currencyReducer';
import { formatComma, formatExpansion, roundToLargestDenomination } from './utils/formatters';
import { CURRENCY_SYMBOLS, AMOUNT_OPTIONS, API_BASE_URL } from './constants';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${state.from}.json`);
        dispatch({ type: 'SET_INFO', payload: response.data[state.from] });
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // TODO: Implement proper error handling, e.g., showing an error message to the user
      }
    };

    const handler = setTimeout(fetchExchangeRates, 500); // Debounce API calls
    return () => clearTimeout(handler);
  }, [state.from]);

  useEffect(() => {
    dispatch({ type: 'CONVERT' });
  }, [state.to, state.input, state.amountMultiplier]);

  const handleInputChange = (value) => {
    dispatch({ type: 'SET_INPUT', payload: value });
  };

  const handleFromChange = (value) => {
    dispatch({ type: 'SET_FROM', payload: value });
  };

  const handleToChange = (value) => {
    dispatch({ type: 'SET_TO', payload: value });
  };

  const handleAmountMultiplierChange = (value) => {
    dispatch({ type: 'SET_AMOUNT_MULTIPLIER', payload: parseFloat(value) });
  };

  const handleFlip = () => {
    dispatch({ type: 'FLIP_CURRENCIES' });
  };

  const handleQuickConversion = (amount, unit) => {
    dispatch({ type: 'QUICK_CONVERT', payload: { amount, unit } });
  };

  return (
    <section>
      <div className="w-layout-blockcontainer container-4 w-container">
        <h1 className="heading">Cypher</h1>
        <div className="welcome">Welcome to World's Smartest Currency Converter</div>
        <div className="columns w-row">
          <div className="column w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack">
            <CurrencyInput
              value={state.input}
              onChange={handleInputChange}
              onAmountChange={handleAmountMultiplierChange}
              amountOptions={AMOUNT_OPTIONS}
            />
          </div>
          <div className="column-2 w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack">
            <CurrencyDropdown
              from={state.from}
              to={state.to}
              onFromChange={handleFromChange}
              onToChange={handleToChange}
              onFlip={handleFlip}
              options={Object.keys(CURRENCY_SYMBOLS).map(currency => ({
                value: currency,
                label: `${CURRENCY_SYMBOLS[currency]} ${currency.toUpperCase()}`
              }))}
            />
          </div>
          <div className="column-3 w-col w-col-4 w-col-medium-4 w-col-small-small-stack w-col-tiny-tiny-stack">
            <ConversionResult
              output={state.output}
              from={state.from}
              to={state.to}
              info={state.info}
              currencySymbols={CURRENCY_SYMBOLS}
            />
          </div>
        </div>
        <QuickConversionButtons onQuickConvert={handleQuickConversion} />
      </div>
    </section>
  );
}

export default App;