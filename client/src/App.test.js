import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App></App>);
  const linkElement = screen.getByText(/submit/);
  expect(linkElement).toBeInTheDocument();
});
