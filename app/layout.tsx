import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blackwood & Rose',
  description: 'Luxury Furniture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We are hardcoding the background to white to kill the transparent overlapping bug forever */}
      <body style={{ backgroundColor: '#ffffff', color: '#000000', margin: 0, padding: 0, WebkitFontSmoothing: 'antialiased' }}>
        {children}
      </body>
    </html>
  );
}