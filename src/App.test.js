import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Breakfast button', () => {
  render(<App />);
  const BreakfastBtn = screen.getByText(/Breakfast/i);
  expect(BreakfastBtn).toBeInTheDocument();
});

