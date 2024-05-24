import { render, screen } from "@testing-library/react";
import TotalRewardsPoints from "../TotalRewardsPoints";

describe('TotalRewardsPoints component', ()=>{
  it('renders the total points correctly', () => {
    const totalPoints = 500;

    render(<TotalRewardsPoints totalPoints={totalPoints} />);
    
    const pointsElement = screen.getByText('Rewards Points: 500');
    expect(pointsElement).toBeInTheDocument();
  })
})