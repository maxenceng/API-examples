// @flow

// No state if we are on the home page
export const homePage = () => null

// Default state for the cryptocurrencies
export const cryptoPage = () => ({
  crypto: {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
  },
})

// Default state for the Diablo page
export const diabloPage = () => ({
  crypto: {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
  },
})
