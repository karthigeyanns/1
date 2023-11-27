import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/about">SignInSide</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;