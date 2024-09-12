// app/layout.tsx
import './globals.css';
import DarkModeToggle from './DarkModeToggle';  // Import the new DarkModeToggle client component

export const metadata = {
  title: 'Dashboard',
  description: 'Charts Dashboard with Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <DarkModeToggle /> {/* Client Component for toggling dark mode */}
        {children}
      </body>
    </html>
  );
}
