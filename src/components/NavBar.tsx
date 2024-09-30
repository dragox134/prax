// src/components/NavBar.tsx

import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search'; // You might want to keep this for visual consistency
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const NavBar: React.FC = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #dbdbdb',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>
        <HomeIcon />
      </Link>
      <Link href="/hladanie" style={{ textDecoration: 'none', color: '#000' }}> {/* Updated to hladanie */}
        <SearchIcon />
      </Link>
      <Link href="/pridat" style={{ textDecoration: 'none', color: '#000' }}>
        <AddBoxIcon />
      </Link>
      <Link href="/notifikacie" style={{ textDecoration: 'none', color: '#000' }}> {/* Updated to notifikacie */}
        <NotificationsIcon />
      </Link>
      <Link href="/profil" style={{ textDecoration: 'none', color: '#000' }}> {/* Updated to profil */}
        <PersonIcon />
      </Link>
    </nav>
  );
};

export default NavBar;
