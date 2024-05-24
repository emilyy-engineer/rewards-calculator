import '../styles/Greeting.scss'
function Greeting({ name, role='customer'}) {
  return (
    <div className="greeting">
    <h3>Hi! {role === 'admin' ? 'Admin' : name}</h3>
  </div>
  )
}

export default Greeting
