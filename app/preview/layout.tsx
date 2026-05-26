import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blackwood & Rose - Preview',
  description: 'Luxury Furniture & Home Accessories',
};

export default function PreviewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="preview-container">
      {children}
    </div>
  );
}