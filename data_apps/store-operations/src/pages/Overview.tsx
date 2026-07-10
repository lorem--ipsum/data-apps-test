import { StaticQuestion } from "@metabase/embedding-sdk-react";
import Card from "../components/Card";

export default function Overview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* KPI row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        <Card>
          <div style={{ height: 140 }}>
            <StaticQuestion
              questionId={15}
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
              questionId={27}
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
              questionId={22}
              height="100%"
              width="100%"
              withChartTypeSelector={false}
              title={false}
            />
          </div>
        </Card>
      </div>

      {/* Revenue trend */}
      <Card title="Revenue & Orders Over Time">
        <div style={{ height: 400 }}>
          <StaticQuestion
            questionId={12}
            height="100%"
            width="100%"
            withChartTypeSelector={false}
            title={false}
          />
        </div>
      </Card>

      {/* Revenue by geography */}
      <Card title="Revenue by State">
        <div style={{ height: 500 }}>
          <StaticQuestion
            questionId={2}
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
