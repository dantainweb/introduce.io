import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          Ren Chieh's Web
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            首頁
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            自我簡介
          </NavLink>
          <NavLink to="/works" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            作品集
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
