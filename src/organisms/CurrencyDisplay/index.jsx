import React, { useEffect, useState } from 'react';
import CurrencyTable from '../../molecules/CurrencyTable';
import Text from '../../atoms/Text';

const CurrencyDisplay = () => {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=bf639f181d374de5b60eca92941bf7e4&symbols=CAD,EUR,IDR,JPY,CHF,GBP'
        );
        const data = await response.json();
        const currencyData = Object.entries(data.rates).map(
          ([currency, rate]) => {
            const rateNumber = parseFloat(rate);
            return {
              currency,
              exchangeRate: rateNumber.toFixed(4),
              weBuy: (rateNumber * 1.05).toFixed(4),
              weSell: (rateNumber * 0.95).toFixed(4),
            };
          }
        );
        setRates(currencyData);
      } catch (err) {
        setError('Failed to fetch currency rates.');
      }
    };

    fetchRates();
  }, []);

  if (error) {
    return <Text content={error} />;
  }

  if (!rates.length) {
    return <Text content='Loading...' />;
  }

  return <CurrencyTable data={rates} />;
};

export default CurrencyDisplay;
