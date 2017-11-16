// @flow

export const getMainCurrency = (currencyName: string): string => {
  if (currencyName.length === 6) {
    return currencyName.slice(3, 6);
  }

  return currencyName;
};

export const currencySignMap = {
  USD: '$',
  PLN: 'zł',
};
