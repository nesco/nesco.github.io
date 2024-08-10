import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Select, Card, Collapse, Row, Col, ConfigProvider } from "antd";
import type { CardProps, SelectProps } from "antd";
import "../www/styles.css";

const { Panel } = Collapse;

import {
  diseaseAims,
  allAims,
  allDiseases,
  pharmacologicalPlans,
  colors,
  theme,
  Option,
  Compound,
  Category,
  PharmaPlan,
} from "./data";

let rootDiv = document.getElementById("root");

function SelectField({
  label,
  ...props
}: { label: string } & SelectProps): JSX.Element {
  return (
    <Row gutter={8} align="middle" style={{ marginBottom: 16 }}>
      <Col span={4}>
        <label
          htmlFor={props.id}
          style={{ display: "block", textAlign: "left", color: colors.text }}
        >
          {label}
        </label>
      </Col>
      <Col span={16}>
        <Select {...props} style={{ width: 200 }} />
      </Col>
    </Row>
  );
}

function CompoundCard({ compound }: { compound: Compound }) {
  return (
    <Card title={compound.name} style={{ marginBottom: 16, height: "100%" }}>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        {compound.companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </Card>
  );
}

/*function CategorySection({ category }: { category: Category }) {
  return (
    <Panel header={category.name} key={category.name}>
      {category.compounds.map((compound, index) => (
        <CompoundCard key={index} compound={compound} />
      ))}
    </Panel>
  );
}*/

function PharmaPlanDisplay({ plan }: { plan: PharmaPlan }) {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const onChange = (keys: string | string[]) => {
    setActiveKeys(typeof keys === "string" ? [keys] : keys);
  };

  return (
    <div
      style={{
        marginTop: 20,
        backgroundColor: "white",
      }}
    >
      <Collapse
        activeKey={activeKeys}
        onChange={onChange}
        style={{ marginTop: "50px" }}
      >
        {plan.categories.map((category, index) => (
          <Panel header={category.name} key={category.name}>
            <Row gutter={[16, 16]}>
              {category.compounds.map((compound, compoundIndex) => (
                <Col xs={24} sm={12} md={8} lg={6} key={compoundIndex}>
                  <CompoundCard key={compoundIndex} compound={compound} />
                </Col>
              ))}
            </Row>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

function ChooseDiseaseAim() {
  // Manage states
  const [selectedDisease, setSelectedDisease] = useState(allDiseases[0].value);
  const [selectedAim, setSelectedAim] = useState("");
  const [currentPlan, setCurrentPlan] = useState<PharmaPlan | null>(null);

  const availableAims = allAims.filter((aim) =>
    diseaseAims[selectedDisease]?.includes(aim.value),
  );

  useEffect(() => {
    setSelectedAim(availableAims[0]?.value || "");
  }, [selectedDisease]);

  useEffect(() => {
    const plan = pharmacologicalPlans.find(
      (p) => p.disease === selectedDisease && p.aim === selectedAim,
    );
    setCurrentPlan(plan || null);
  }, [selectedDisease, selectedAim]);

  const handleDiseaseChange: SelectProps["onChange"] = (value: string) => {
    setSelectedDisease(value as string);
  };

  const handleAimChange: SelectProps["onChange"] = (value: string) => {
    setSelectedAim(value as string);
  };
  return (
    <div style={{ maxWidth: 1400, margin: "20px" }}>
      <div className="select-area">
        <SelectField
          label="Select Disease:"
          value={selectedDisease}
          options={allDiseases}
          onChange={handleDiseaseChange}
          id="select-disease"
        />
        <SelectField
          label="Specify Treatment Goal:"
          value={selectedAim}
          options={availableAims || []}
          onChange={handleAimChange}
          id="select-aim"
        />
      </div>
      {currentPlan && <PharmaPlanDisplay plan={currentPlan} />}
    </div>
  );
}

function App(): JSX.Element {
  return (
    <ConfigProvider theme={theme}>
      <h1>Welcome to Pharma Intelligence!</h1>
      <ChooseDiseaseAim />
    </ConfigProvider>
  );
}

ReactDOM.createRoot(rootDiv!).render(<App />);
