import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from './components/CartContext';

export const metadata = {
  title: 'Blackwood & Rose',
  description: 'Luxury Furniture & Home Accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <CartProvider>
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}