import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">🏠 דף הבית</Link></li>
          <li><Link to="/tasks">✅ משימות</Link></li>
          <li><Link to="/photos">📷 תמונות</Link></li>
          <li><Link to="/posts">📝 פוסטים</Link></li>
          <li><Link to="/users">👤 משתמשים</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

