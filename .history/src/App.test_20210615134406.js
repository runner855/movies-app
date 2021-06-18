import { render, screen } from "@testing-library/react";
import App from "./components/App";

xtest("renders learn react link", () => {
  render(<App />);
  const appName = screen.getByText(/Movies app/i);
  expect(appName).toBeInTheDocument();
});
