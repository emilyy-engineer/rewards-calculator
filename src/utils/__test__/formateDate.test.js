import { formatDate } from "../formatDate";

describe('formatDate', () => {
  it('should format date correctly', () => {
    const inputDate = "2024-03-15T10:00:01Z";
    const formattedDate = formatDate(inputDate);
    expect(formattedDate).toBe("March 15")
  });
})