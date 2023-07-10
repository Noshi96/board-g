"use client";

interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
  children?: React.ReactNode;
  onClick?: (args?: any) => void;
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "small",
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}>
      {label}
    </button>
  );
};
