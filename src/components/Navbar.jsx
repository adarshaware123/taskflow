import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TaskFlow</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Tasks</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

export default Navbar;