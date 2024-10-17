import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

async function getSteps(queryUrl) {
  const response = await fetch("http://localhost:5000/cutthecrap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ queryUrl: queryUrl }),
  });

  //helps to ensure that the url that was passed is being parsed
  console.log(queryUrl);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json().then((data) => data.parsed_data);
}

function StepComponent(props) {
  const { step } = props;

  return (
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Home() {
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState(null);
  const query = new URLSearchParams(window.location.search);

  // Fetch steps from API once
  useEffect(() => {
    const fetchSteps = async () => {
      const steps = await getSteps(query.get('url'));
      setApiData(steps);
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
          fontFamily: "Brush Script MT",
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

export default Home;
