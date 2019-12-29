import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
      <ul className='right'>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/signin'>Log In</Link>
        </li>
        <li>
          <Link to='/' className="btn btn-floating pink lighten-1">NN</Link>
        </li>
        
      </ul>
    );
}

export default SignedOutLinks;
