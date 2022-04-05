import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
  it("renders App component correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});