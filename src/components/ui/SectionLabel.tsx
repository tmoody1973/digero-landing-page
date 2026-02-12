interface SectionLabelProps {
  text: string;
  color?: "orange" | "white" | "light";
}

const colorMap = {
  orange: "text-orange-500",
  white: "text-white",
  light: "text-orange-200",
};

export function SectionLabel({ text, color = "orange" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest ${colorMap[color]}`}
    >
      {text}
    </p>
  );
}
