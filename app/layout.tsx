import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, BookOpen, Mail, MessageSquare } from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    name: "Newsletter",
    link: "/newsletter",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MessageSquare className="h-4 w-4" />,
  },
];

export const metadata: Metadata = {
  title: "Abdullah's Portfolio",
  description: 'Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="fixed top-4 right-4 z-[100]">
            <ThemeToggle />
          </div>
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}