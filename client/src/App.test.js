import React from 'react';
import { render, findByText, fireEvent, wait} from '@testing-library/react'
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


// test('All Player cards are rendered', () => {
//   const { getAllByText } = render(<App/>);
//   const countries = getAllByText(/Country/i);
//   expect(countries).toHaveLength(101);
// });

test('Lieke is rendered', () => {
  const {getByText} = render(<App/>);
  getByText(/Player/i);
})

test('Asynchronous Data found', () => {
  const {findByText} = render(<App/>);
  findByText(/Marta/i)
})

test('Does night mode work', () => {
  const { queryAllByText } = render(<App/>);
  const count = queryAllByText(/lights out/i);
  expect(count).toHaveLength(0);

})


test('Does lights out exist', () => {
  const { findByText } = render(<App/>);
  findByText(/lights out/i);
})






// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('Balls is rendered', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/Balls/i);
//     console.log(linkElement)
//     expect(linkElement).toBeInTheDocument();
//   });