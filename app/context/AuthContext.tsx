"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type AuthContextProps = {
  children: React.ReactNode;
};

const AuthContext = ({ children }: AuthContextProps) => {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
};

export default AuthContext;
