import '../../styles/MonthlyPointsItem.scss'
function MonthlyPointsItem({ month, points }) {
  return (
    <li className="monthly-points-item">
    <div className="monthly-points-item__month">{month}</div>
    <div className="monthly-points-item__points">{points} points</div>
  </li>
  )
}

export default MonthlyPointsItem
