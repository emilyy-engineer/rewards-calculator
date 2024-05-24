import { transactionsData } from "../../data/transactionsData";
import { groupTransactionsByMonth } from "../groupTransactionsByMonth";
import { calculatePoints, calculateTotalPoints, calculateTotalPointsByMonth} from "../pointsUtils"

describe('pointsUtils', ()=> {
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

  describe('calculateTotalPoints', () => {
    it('should calculate total points for all transactions', () => {
      const groupedTransactions = groupTransactionsByMonth(transactionsData, 3);
      const totalPoints = calculateTotalPoints(groupedTransactions);
      expect(totalPoints).toBe(67640)
    })
  })

  describe('calculateTotalPointsByMonth', ()=> {
    it("should calculate total points by month", () => {
      const groupedTransactions = groupTransactionsByMonth(transactionsData, 3);
      const pointsByMonth = calculateTotalPointsByMonth(groupedTransactions);
      expect(pointsByMonth['March 2024']).toBe(20600);
      expect(pointsByMonth['February 2024']).toBe(25480);
      expect(pointsByMonth['January 2024']).toBe(21560);
    })
  })
})

