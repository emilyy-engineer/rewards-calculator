import { render, screen } from "@testing-library/react";
import RewardsLink from "./RewardsLink"

describe("RewardsLink component", ()=>{
  it('should render RewardsLink link with correct href', () =>{
    render(<RewardsLink />);
    const linkElement = screen.getByRole('link', { name: 'Rewards' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href');
  })
})