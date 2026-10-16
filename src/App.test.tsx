import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('displays the portfolio sections', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'My Portfolio' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'About Me' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Projects' })
    ).toBeInTheDocument();
  });
});