import { useState } from "react";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

const TABS = [
  { id: "overview", label: "Overview", component: Overview },
  { id: "products", label: "Products", component: Products },
  { id: "orders", label: "Orders", component: Orders },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(TABS[0].id);

  const ActiveComponent =
    TABS.find((t) => t.id === activeTab)?.component ?? TABS[0].component;

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      {/* Header */}
      <header
        style={{
          background: "#0f172a",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Store Operations
          </h1>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: 13,
              color: "#94a3b8",
            }}
          >
            Executive Dashboard
          </p>
        </div>
      </header>

      {/* Tab bar */}
      <nav
        style={{
          background: "white",
          borderBottom: "1px solid #e2e8f0",
          padding: "0 32px",
          display: "flex",
          gap: 0,
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "14px 20px",
              fontSize: 14,
              fontWeight: activeTab === tab.id ? 600 : 400,
              color: activeTab === tab.id ? "#0f172a" : "#64748b",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #1e3a5f"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main style={{ padding: 32, maxWidth: 1400, margin: "0 auto" }}>
        <ActiveComponent />
      </main>
    </div>
  );
}
