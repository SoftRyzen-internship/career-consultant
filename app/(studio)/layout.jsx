import React from 'react';

export const metadata = {
  title: 'Career Consultant адміністратор',
  description: 'Career Consultant панель адміністратора',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
