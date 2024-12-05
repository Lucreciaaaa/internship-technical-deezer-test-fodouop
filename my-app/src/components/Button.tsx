// Button.tsx
import { useState } from "react";
import { buttonStyles } from "../utils/buttonStyles";

// Définition des types directement dans Button.tsx
type Variant = "solid" | "outline" | "ghost";
type ColorPalette =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "teal"
  | "pink"
  | "purple";

interface ButtonProps {
  children: string;
  size: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl";
  variant: Variant;
  colorPalette: ColorPalette;
  loadingText?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  size,
  variant,
  colorPalette,
  loadingText = "Loading...",
  onClick,
}: ButtonProps) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const buttonClass = buttonStyles[variant]?.[colorPalette] || "";

  console.log("buttonClass:", buttonClass); // Vérifiez ce que vous obtenez ici

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulation de chargement de 2s
  };

  const isDisabled = disabled || loading;

  const handleClick = () => {
    if (onClick) onClick();
    handleLoading();
  };

  return (
    <button
      type="button"
      className={`rounded px-4 py-2 ${size} ${buttonClass} ${
        isDisabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {loading ? (
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            {loadingText}
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
