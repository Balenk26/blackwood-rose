import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blackwood & Rose',
  description: 'Luxury Furniture & Home Accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black m-0 p-0 antialiased">
        {children}
      </body>
    </html>
  );
}