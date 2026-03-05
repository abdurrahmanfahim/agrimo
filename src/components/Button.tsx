import Link from "next/link";
import React from "react";

const Button: React.FC<{
  text: string;
  pre?: React.ReactNode;
  pos?: React.ReactNode;
  variant?: string;
  className?: string;
  href?: string;
}> = ({ text, pre, pos, variant, className, href }) => {
  const buttonClasses = `flex items-center gap-2 py-4.5 px-9 rounded-full font-medium text-text-color capitalize cursor-pointer inline-flex ${
    variant === "secondary"
      ? "bg-background"
      : variant === "primary"
        ? "bg-secondary"
        : "bg-secondary"
  } ${className || ""}`;
  return href ? (
    <Link href={href} className={buttonClasses}>
      {pre}
      <span>{text}</span>
      {pos}
    </Link>
  ) : (
    <button className={buttonClasses}>
      {pre}
      <span>{text}</span>
      {pos}
    </button>
  );
};

export default Button;
