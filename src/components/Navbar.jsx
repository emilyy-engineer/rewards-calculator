import './Navbar.scss';
function Navbar({leftContent, rightContent}) {
  return (
    <div className="navbar">
    <div className="navbar__left">
      {leftContent}
    </div>
    <div className="navbar__right">
      {rightContent}
    </div>
  </div>
  )
}

export default Navbar
