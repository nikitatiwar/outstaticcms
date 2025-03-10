// import { ReactNode } from 'react';

// interface RootLayoutProps {
//   children: 0
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//     return (
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     )
//   }

export const metadata = {
  title: 'Outstatic'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="outstatic">{children}</body>
    </html>
  )
}