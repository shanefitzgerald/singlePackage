"use client";

import { ReactNode } from "react";
import { version } from "../package.json";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app! v${version} fixed bug`)}
    >
      {children}
    </button>
  );
};
