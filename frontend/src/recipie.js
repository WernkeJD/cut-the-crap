import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

async function getSteps(queryUrl) {
  const response = await fetch(`https://calorie-counter-k4kc.onrender.com/cutthecrap?url=${queryUrl}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json().then((data) => data.output_data);
}

function StepComponent(props) {
  const { step } = props;

  return (<>
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Accordion style={{ backgroundColor: "#36454F", margin: "3px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#F9F6EE" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2 style={{ color: "#F9F6EE" }}>{step.title}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ color: "#F9F6EE" }}>{step.instruction}</p>
          {step.ingredients.map((ingredient) => {
            return <><p style={{ color: "#F9F6EE" }}>{ingredient.name}</p>
          <p style={{ color: "#F9F6EE" }}>{ingredient.quantity}</p></>
          })}
          
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );
}

function Recipie() {

  

  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState(null);
  const query = new URLSearchParams(window.location.search);

  // Fetch steps from API once
  useEffect(() => {
    const fetchSteps = async () => {
      const steps = await getSteps(query.get('url'));
      setApiData(steps.steps);
      console.log("Steps:", steps);
    };
    fetchSteps();
  }, []);

  return (
    <div style={{ paddingBottom: "20px" }}>
      {/* Title */}
      <header
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px",
          fontFamily: "Roboto"
        }}
      >
        Here is your Recipe Without the Crap
      </header>
      <div style={{ textAlign: "center" }}>
        <p>{data}</p>
        {apiData.length > 0 &&
          apiData.map((step, index) => (
            <StepComponent key={index} step={step} />
          ))}
      </div>
    </div>
  );
}

export default Recipie;
