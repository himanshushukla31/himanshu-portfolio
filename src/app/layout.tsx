import React from 'react';
import Header from '../components/Header';
import '../app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16"> {/* Add padding-top to account for fixed header */}
          {children}
        </main>
      </body>
    </html>
  );
}
