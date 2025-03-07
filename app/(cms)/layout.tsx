import { ReactNode } from 'react';

interface RootLayoutProps {
  children: 0
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }