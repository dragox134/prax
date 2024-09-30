// src/components/NavBar.tsx

"use client"; // Marking this component as a Client Component

import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox'; // Icon for pridat
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { usePathname } from 'next/navigation'; // Import usePathname

const NavBar: React.FC = () => {
  const currentPath = usePathname(); // Get the current route path

  // Map of paths to their corresponding index values
  const pathToIndex: Record<string, number> = {
    '/': 0,
    '/hladanie': 1,
    '/pridat': 2,
    '/notifikacie': 3,
    '/profil': 4,
  };

  const value = pathToIndex[currentPath] !== undefined ? pathToIndex[currentPath] : 0; // Default to Home if no match

  return (
    <BottomNavigation
      showLabels
      value={value}
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <BottomNavigationAction 
        label="Home" 
        icon={<HomeIcon />} 
        href="/" 
        style={{ color: value === 0 ? 'blue' : undefined }} // Highlight active
      />
      <BottomNavigationAction 
        label="Hladanie" 
        icon={<SearchIcon />} 
        href="/hladanie" 
        style={{ color: value === 1 ? 'blue' : undefined }} // Highlight active
      />
      <BottomNavigationAction 
        label="Pridat" 
        icon={<AddBoxIcon />} 
        href="/pridat" 
        style={{ color: value === 2 ? 'blue' : undefined }} // Highlight active
      />
      <BottomNavigationAction 
        label="Notifikacie" 
        icon={<NotificationsIcon />} 
        href="/notifikacie" 
        style={{ color: value === 3 ? 'blue' : undefined }} // Highlight active
      />
      <BottomNavigationAction 
        label="Profil" 
        icon={<PersonIcon />} 
        href="/profil" 
        style={{ color: value === 4 ? 'blue' : undefined }} // Highlight active
      />
    </BottomNavigation>
  );
};

export default NavBar;
