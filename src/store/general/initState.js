export const initState = {
  isLoading: false,
  error: {
    isError: false,
    description: '',
  },
  user: {
    isConnected: false,
    accountId: null,
  },
  selectors: {
    hasSavedMultisafes: false,
  },
  entities: {
    near: null,
    wallet: null,
  },
};
