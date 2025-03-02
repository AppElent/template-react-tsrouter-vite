import type { RouterContext } from '@/main';
import { redirect } from '@tanstack/react-router';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type requireAuthProps = {
  auth: RouterContext['auth'];
};

export const requireAuth = async ({ auth }: requireAuthProps) => {
  const { isSignedIn } = auth;
  console.log(isSignedIn, auth);
  if (!isSignedIn) {
    console.log('NEE');
    throw redirect({ to: '/', search: { redirect: location.href } }); //TODO: Implement future proof solution
  }
};
