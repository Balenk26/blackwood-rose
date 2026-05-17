import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blackwood & Rose - Preview',
  description: 'Luxury Furniture & Home Accessories',
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="preview-container">
      {children}
    </div>
  );
}