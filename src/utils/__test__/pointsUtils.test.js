import { calculatePoints } from "../pointsUtils"

describe('calculatePoints', () => {
  it('should add 0 points if amount less or equal to 50', () => {
    expect(calculatePoints(50)).toEqual(0);
    expect(calculatePoints(30)).toEqual(0);
  });

  it('should add 1 point for each dollar over 50', () => {
    expect(calculatePoints(60)).toEqual(10);
    expect(calculatePoints(75)).toEqual(25);
  });

  it('should add 2 points for each dollar over 100', () => {
    expect(calculatePoints(110)).toEqual(70);
    expect(calculatePoints(150)).toEqual(150);
  })
})