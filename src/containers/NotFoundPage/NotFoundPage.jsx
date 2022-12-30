import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '40%',
      left: '45%'
    }}>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/home">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
