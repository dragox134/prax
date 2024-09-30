// src/app/layout.tsx

import React from 'react';
import NavBar from '../components/NavBar'; // Ensure this path is correct

export const metadata = {
  title: 'Your App Title', // Set your desired app title
  description: 'Your App Description', // Optional: provide a description
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> {/* Required html tag with language attribute */}
      <body>
        <main style={{ paddingBottom: '60px' }}> {/* Adjusted for bottom nav */}
          {children}
        </main>
        <NavBar /> {/* Bottom navigation bar */}
      </body>
    </html>
  );
}
