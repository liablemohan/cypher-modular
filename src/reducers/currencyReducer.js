// reducers/currencyReducer.js
export const initialState = {
    info: {},
    input: '',
    from: 'usd',
    to: 'inr',
    output: 0,
    amountMultiplier: 1,
  };
  
  export function currencyReducer(state, action) {
    switch (action.type) {
      case 'SET_INFO':
        return { ...state, info: action.payload };
      case 'SET_INPUT':
        return { ...state, input: action.payload };
      case 'SET_FROM':
        return { ...state, from: action.payload };
      case 'SET_TO':
        return { ...state, to: action.payload };
      case 'SET_AMOUNT_MULTIPLIER':
        return { ...state, amountMultiplier: action.payload };
      case 'FLIP_CURRENCIES':
        return { ...state, from: state.to, to: state.from };
      case 'CONVERT':
        const rate = state.info[state.to];
        const inputAmount = parseFloat(state.input) || 0;
        const adjustedAmount = inputAmount * state.amountMultiplier;
        const convertedValue = adjustedAmount * rate || 0;
        return { ...state, output: convertedValue };
      case 'QUICK_CONVERT':
        return {
          ...state,
          input: action.payload.amount.toString(),
          amountMultiplier: action.payload.unit === 'M' ? 1e6 : 1e9,
        };
      default:
        return state;
    }
  }