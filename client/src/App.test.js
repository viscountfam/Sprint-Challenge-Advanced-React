import React from 'react';
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('All Player cards are rendered', () => {
  const { getAllByText } = render(<App/>);
  const countries = getAllByText(/country/i);
  expect(countries).toHaveLength(101);
});

test('Marta exists', () => {
  const {getByText} = render (<App/>);
  const marta = getByText(/marta/i);
  expect(marta).toBeInTheDocument();
  const 
})