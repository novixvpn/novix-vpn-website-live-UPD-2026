"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type User = {
  username: string;
  // Add more fields if needed
};

type AuthContextType = {
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedToken = Cookies.get("token");
    const savedUser = Cookies.get("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (token: string, user: User) => {
    setToken(token);
    setUser(user);

    Cookies.set("token", token, { expires: 7 }); // expires in 7 days
    Cookies.set("user", JSON.stringify(user), { expires: 7 });
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    Cookies.remove("token");
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
