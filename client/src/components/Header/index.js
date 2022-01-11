import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center ">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <Link className="text-dark" to="/me">
          <h1 className="m-1" style={{ fontSize: '1rem', textAlign: 'right'}}>
            My Profile
          </h1>
        </Link>
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Mechanic App
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Find local mechanics to help with your issue
        </p>
      </div>
    </header>
  );
};

export default Header;
