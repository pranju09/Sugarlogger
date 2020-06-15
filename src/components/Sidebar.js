import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="nav-link">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/patients">Patients</Link>
      </li>
    </ul>
  );
}
