'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserData = {
  id: number;
  username: string;
  name: string;
  birthdate: string;
  religion: string;
  address: string;
  avatar: string;
  profession: string;
};

type AuthContextType = {
  user: UserData | null;
  setAuthData: (data: { user: UserData; token: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  const setAuthData = (data: { user: UserData; token: string }) => {
    setUser(data.user);
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    router.push('/');
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/me');

        if (!res.ok) throw new Error('Not authenticated');

        const data = await res.json();
        setAuthData({ user: data.user, token: data.token });
      } catch (err) {
        console.log('Session check failed:', err);
        setUser(null);
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
