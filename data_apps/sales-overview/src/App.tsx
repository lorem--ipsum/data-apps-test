import { StaticQuestion } from "@metabase/embedding-sdk-react";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", boxSizing: "border-box", padding: 24 }}>
      <h1 style={{ margin: 0 }}>Sales Overview</h1>

      <p style={{ color: "#555" }}>Test app built from the data-app template.</p>

      <div style={{ height: 400 }}>
        <StaticQuestion
          questionId={13}
          height="100%"
          width="100%"
          withChartTypeSelector={false}
          title={false}
        />
      </div>
    </div>
  );
}
