import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blackwood & Rose Preview',
  description: 'Curating excellence in modern furniture.',
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}