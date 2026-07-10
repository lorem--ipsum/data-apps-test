import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
};

export default function Card({ title, children, style }: CardProps) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 12,
        border: "1px solid #e2e8f0",
        overflow: "visible",
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid #e2e8f0",
            fontWeight: 600,
            fontSize: 14,
            color: "#0f172a",
          }}
        >
          {title}
        </div>
      )}
      <div style={{ padding: title ? 0 : undefined }}>{children}</div>
    </div>
  );
}
