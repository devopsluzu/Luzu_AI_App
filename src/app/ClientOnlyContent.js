// ClientOnlyContent.js (Client Component)
"use client";

import ConditionalNavbar from '@components/navbar/ConditionalNavbar';
import Signup from '@components/auth/signup/signup';
import { UserAuth } from '@context/AuthContext';

export default function ClientOnlyContent({ children }) {
  const { user } = UserAuth();

  return !user ? (
    <Signup />
  ) : (
    <>
      <ConditionalNavbar />
      {children}
    </>
  );
}



