import MonthlyPointsItem from "../MonthlyPointsItem"
import {render, screen} from '@testing-library/react'
describe('MonthlyPointsItem component', () => {
  it('renders the months and points correctly', () => {
    const month = 'January';
    const points = 100;

    render(<MonthlyPointsItem month={month} points={points} />);

    const monthElement = screen.getByText('January');
    const pointsElement = screen.getByText('100 points');

    expect(monthElement).toBeInTheDocument();
    expect(pointsElement).toBeInTheDocument();
  })

})