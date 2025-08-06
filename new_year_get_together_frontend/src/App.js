import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';

import LayoutShell from './components/LayoutShell';

// Page imports (will become actual screens)
import LandingPage from './pages/Landing/LandingPage';
import RegistrationPage from './pages/Registration/RegistrationPage';
import LoginPage from './pages/Landing/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import GroupPage from './pages/Groups/GroupPage';
import RoomPage from './pages/Rooms/RoomPage';
import EventPage from './pages/Events/EventPage';
import FoodPage from './pages/Food/FoodPage';
import OrganizerDashboard from './pages/Organizer/OrganizerDashboard';
import NotificationPage from './pages/Notifications/NotificationPage';
import SettingsPage from './pages/Settings/SettingsPage';
import NotFound from './pages/NotFound';

// PUBLIC_INTERFACE
function App() {
  // Auth gate for routes
  const RequireAuth = ({ children, role: routeRole }) => {
    const { user, loading, role } = useAuth();
    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;
    if (routeRole && role !== routeRole) return <Navigate to="/" replace />;
    return children;
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* Authenticated Shell */}
              <Route path="/" element={<LayoutShell />}>
                <Route
                  path="/dashboard"
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/groups"
                  element={
                    <RequireAuth>
                      <GroupPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/rooms"
                  element={
                    <RequireAuth>
                      <RoomPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/events"
                  element={
                    <RequireAuth>
                      <EventPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/food"
                  element={
                    <RequireAuth>
                      <FoodPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    <RequireAuth>
                      <NotificationPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <RequireAuth>
                      <SettingsPage />
                    </RequireAuth>
                  }
                />
                {/* Organizer routes */}
                <Route
                  path="/organizer"
                  element={
                    <RequireAuth role="organizer">
                      <OrganizerDashboard />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
