import { Routes } from '@/routes';
import { signIn, signOut } from 'next-auth/react';

export function signInByCredentials(credentials: { email: string; password: string }) {
  return signIn('credentials', {
    ...credentials,
    redirect: false,
  });
}

export function logout() {
  return signOut({
    redirect: false,
    callbackUrl: Routes.home(),
  });
}
