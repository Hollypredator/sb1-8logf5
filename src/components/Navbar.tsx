import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Search, Menu, User, LogOut, BookMarked, MapIcon, Heart, Lock } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              TravelEats
            </Link>
          </div>
          
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-12">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search restaurants or events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-700 hover:text-indigo-600">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Istanbul</span>
            </button>

            <button 
              onClick={handleAdminClick}
              className="flex items-center gap-1 text-gray-500 hover:text-indigo-600"
            >
              <Lock className="h-4 w-4" />
              <span className="text-sm">Admin</span>
            </button>

            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-indigo-600" />
                </div>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                  <Link to="/saved-places" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Heart className="h-4 w-4" />
                    Saved Places
                  </Link>
                  <Link to="/my-routes" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <MapIcon className="h-4 w-4" />
                    My Routes
                  </Link>
                  <Link to="/bookmarks" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <BookMarked className="h-4 w-4" />
                    Bookmarks
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}