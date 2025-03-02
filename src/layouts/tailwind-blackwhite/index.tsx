import Breadcrumbs from '@/components/layout/breadcrumbs';
import LanguageSwitcher from '@/components/layout/language-switcher';
import { ModeToggle } from '@/components/layout/mode-toggle';
import { AppSidebar } from '@/components/layout/tailwind-blackwhite/app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 h-4"
          />
          <Breadcrumbs />
          <div className="flex-1" /> {/* Spacer to push items to the right */}
          <LanguageSwitcher />
          <ModeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link
              to="/sign-in"
              className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Sign In
            </Link>
          </SignedOut>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Breadcrumbs
            mobile
            className="block md:hidden"
          />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
