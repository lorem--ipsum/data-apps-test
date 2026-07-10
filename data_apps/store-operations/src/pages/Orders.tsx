import { StaticQuestion } from "@metabase/embedding-sdk-react";
import Card from "../components/Card";

export default function Orders() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* KPI row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        <Card>
          <div style={{ height: 140 }}>
            <StaticQuestion
              questionId={39}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
        <Card>
          <div style={{ height: 140 }}>
            <StaticQuestion
              questionId={30}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
        <Card>
          <div style={{ height: 140 }}>
            <StaticQuestion
              questionId={34}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
      </div>

      {/* Orders by category over time */}
      <Card title="Orders by Product Category">
        <div style={{ height: 400 }}>
          <StaticQuestion
            questionId={24}
            height="100%"
            width="100%"
            withChartTypeSelector={false}
            title={false}
          />
        </div>
      </Card>

      {/* Bottom row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        <Card title="Total Orders by Category">
          <div style={{ height: 360 }}>
            <StaticQuestion
              questionId={20}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
        <Card title="Orders by Source & Quarter">
          <div style={{ height: 360 }}>
            <StaticQuestion
              questionId={10}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
