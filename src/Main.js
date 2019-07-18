import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Login';
export default () => (
  <div>
    <h1>
      <Link to="/"><Form/></Link>
    </h1>
  </div>
)