import { StaticQuestion } from "@metabase/embedding-sdk-react";
import Card from "../components/Card";

export default function Products() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Top row: category breakdown */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        <Card title="Revenue by Product Category">
          <div style={{ height: 400 }}>
            <StaticQuestion
              questionId={13}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
        <Card title="Product Breakdown">
          <div style={{ height: 400 }}>
            <StaticQuestion
              questionId={7}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
      </div>

      {/* Best sellers */}
      <Card title="Best Selling Products">
        <div style={{ height: 360 }}>
          <StaticQuestion
            questionId={21}
            height="100%"
            width="100%"
            withChartTypeSelector={false}
            title={false}
          />
        </div>
      </Card>

      {/* Customer satisfaction */}
      <Card title="Customer Satisfaction by Category">
        <div style={{ height: 360 }}>
          <StaticQuestion
            questionId={3}
            height="100%"
            width="100%"
            withChartTypeSelector={false}
            title={false}
          />
        </div>
      </Card>
    </div>
  );
}
