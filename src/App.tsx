import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SavedPlaces from './pages/SavedPlaces';
import MyRoutes from './pages/MyRoutes';
import Bookmarks from './pages/Bookmarks';
import CreateRoute from './components/CreateRoute';
import AdminLogin from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './components/admin/ManageUsers';
import ManageRestaurants from './components/admin/ManageRestaurants';
import ManageCategories from './components/admin/ManageCategories';
import ManagePlaces from './components/admin/ManagePlaces';
import ManageLocations from './components/admin/ManageLocations';
import ManageEvents from './components/admin/ManageEvents';
import AdminSettings from './components/admin/AdminSettings';

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="restaurants" element={<ManageRestaurants />} />
        <Route path="categories" element={<ManageCategories />} />
        <Route path="places" element={<ManagePlaces />} />
        <Route path="locations" element={<ManageLocations />} />
        <Route path="events" element={<ManageEvents />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Main App Routes */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="saved-places" element={<SavedPlaces />} />
              <Route path="my-routes" element={<MyRoutes />} />
              <Route path="create-route" element={<CreateRoute />} />
              <Route path="bookmarks" element={<Bookmarks />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
}

export default App;