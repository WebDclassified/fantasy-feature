import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white text-lg font-bold">Fantasy Game</Link>
      </div>
    </nav>
  );
}

export default Navbar;
