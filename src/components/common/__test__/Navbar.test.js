import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe('Navbar component', () => {
  it('should render left and right content correctly', () => {
    render(
      <Navbar
        leftContent={<div data-testid="left-content">Left Content</div>}
        rightContent={<div data-testid="right-content">Right Content</div>}
      />
    );

    const leftContent = screen.getByTestId('left-content');
    const rightContent = screen.getByTestId('right-content');

    expect(leftContent).toBeInTheDocument();
    expect(leftContent).toHaveTextContent('Left Content');
    expect(rightContent).toBeInTheDocument();
    expect(rightContent).toHaveTextContent('Right Content');
  });
});