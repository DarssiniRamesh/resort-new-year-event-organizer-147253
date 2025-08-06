import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle, FaBell, FaCog, FaCalendarAlt } from 'react-icons/fa';

/**
 * PUBLIC_INTERFACE
 * LayoutShell is the fixed nav/header and outer shell for all content.
 * Adjusts navigation bar based on user role (attendee/organizer).
 */
export default function LayoutShell({ children }) {
  const { theme, toggleTheme } = useTheme();
  const { user, role, logout } = useAuth();
  const location = useLocation();

  // Nav links for attendee and organizer roles
  const navLinks = role === 'organizer' ? [
    { path: '/organizer', label: 'Dashboard', icon: <FaCalendarAlt /> },
    { path: '/groups', label: 'Groups', icon: <FaUserCircle /> },
    { path: '/rooms', label: 'Rooms', icon: <FaUserCircle /> },
    { path: '/events', label: 'Events', icon: <FaCalendarAlt /> },
    { path: '/food', label: 'Food', icon: <FaCog /> },
    { path: '/notifications', label: 'Notifications', icon: <FaBell /> },
    { path: '/settings', label: 'Settings', icon: <FaCog /> }
  ] : [
    { path: '/dashboard', label: 'Dashboard', icon: <FaCalendarAlt /> },
    { path: '/groups', label: 'Groups', icon: <FaUserCircle /> },
    { path: '/rooms', label: 'Rooms', icon: <FaUserCircle /> },
    { path: '/events', label: 'Events', icon: <FaCalendarAlt /> },
    { path: '/food', label: 'Food', icon: <FaCog /> },
    { path: '/notifications', label: 'Notifications', icon: <FaBell /> },
    { path: '/settings', label: 'Settings', icon: <FaCog /> }
  ];

  return (
    <div className={`layout-shell theme-${theme}`}>
      <header className="main-header">
        <div className="logo-area">
          <span className="logo-mark" aria-label="Event Logo">🎉</span>
          <span className="app-title">New Year Get-Together</span>
        </div>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Switch theme">
            {theme === 'light' ? '🌙 Festive' : '☀️ Light'}
          </button>
          {user && (
            <span className="user-email">{user.email}</span>
          )}
        </div>
      </header>
      <nav className="sidebar" aria-label="Main Navigation">
        {navLinks.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className={`nav-link${location.pathname === path ? ' active' : ''}`}
            aria-current={location.pathname === path ? 'page' : undefined}
          >
            <span className="nav-icon">{icon}</span> {label}
          </Link>
        ))}
        {user &&
          <button className="nav-link logout-btn" onClick={logout} tabIndex={0}>Logout</button>
        }
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
