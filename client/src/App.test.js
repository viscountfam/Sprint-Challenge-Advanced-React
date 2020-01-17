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
  const countries = getAllByText(/Country/i);
  expect(countries).toHaveLength(101);
});

test('Lieke exists', () => {
  const {getByText} = render (<App/>);
  const lieke = getByText(/lieke/i);
  expect(lieke).toBeInTheDocument()
})

test('Searches are rendered', () => {
  

})