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

export const buttonStyles: Record<Variant, Record<ColorPalette, string>> = {
  solid: {
    gray: "bg-gray-500 text-white hover:bg-gray-600",
    red: "bg-red-500 text-white hover:bg-red-600",
    green: "bg-green-500 text-white hover:bg-green-600",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
    teal: "bg-teal-500 text-white hover:bg-teal-600",
    pink: "bg-pink-500 text-white hover:bg-pink-600",
    purple: "bg-purple-500 text-white hover:bg-purple-600",
  },
  outline: {
    gray: "border-gray-500 text-gray-500 hover:bg-gray-100",
    red: "border-red-500 text-red-500 hover:bg-red-100",
    green: "border-green-500 text-green-500 hover:bg-green-100",
    blue: "border-blue-500 text-blue-500 hover:bg-blue-100",
    yellow: "border-yellow-500 text-yellow-500 hover:bg-yellow-100",
    teal: "border-teal-500 text-teal-500 hover:bg-teal-100",
    pink: "border-pink-500 text-pink-500 hover:bg-pink-100",
    purple: "border-purple-500 text-purple-500 hover:bg-purple-100",
  },
  ghost: {
    gray: "text-gray-500 hover:bg-gray-100",
    red: "text-red-500 hover:bg-red-100",
    green: "text-green-500 hover:bg-green-100",
    blue: "text-blue-500 hover:bg-blue-100",
    yellow: "text-yellow-500 hover:bg-yellow-100",
    teal: "text-teal-500 hover:bg-teal-100",
    pink: "text-pink-500 hover:bg-pink-100",
    purple: "text-purple-500 hover:bg-purple-100",
  },
};
