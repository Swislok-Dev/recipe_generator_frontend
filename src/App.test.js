import { render } from '@testing-library/react';
import App from './App';
// import ReactTestUtils from 'react-dom/test-utils'

test('has h1 element tag', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // expect().toBeInTheDocument();
  const homepage = document.querySelector("h1")
  expect(homepage.textContent).toBe("Home page")
});
