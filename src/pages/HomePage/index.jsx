import React from 'react';
import CurrencyDisplay from '../../organisms/CurrencyDisplay';

const HomePage = () => {
  return (
    <div>
      <h1>Currency Exchange Rates</h1>
      <CurrencyDisplay />
      <footer>
        <p>Rates are based from 1 USD.</p>
        <p>
          This application uses API from{' '}
          <a
            style={{ color: 'white' }}
            href='https://currencyfreaks.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://currencyfreaks.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
