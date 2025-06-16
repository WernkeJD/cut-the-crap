import React, { useEffect, useState } from "react";

import CTCGradientContainer from "../componenets/CTCGradientContainer";
import IngredientsComponent from "./components/Ingredients";
import StepsComponent from "./components/Steps";
import InfoComponent from "./components/Info";
import { grey } from "@mui/material/colors";

async function getSteps(queryUrl) {
  // const response = await fetch(`https://calorie-counter-k4kc.onrender.com/cutthecrap?url=${queryUrl}`);
  const response = await fetch(
    `https://calorie-counter-k4kc.onrender.com/cutthecrap?url=${queryUrl}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json().then((data) => data.output_data);
}

function RecipiePage() {
  const [recipeData, setRecipeData] = useState([]);
  const query = new URLSearchParams(window.location.search);

  // Fetch steps from API once
  useEffect(() => {
    const fetchSteps = async () => {
      const steps = await getSteps(query.get("url"));
      setRecipeData(steps);
      console.log("Steps:", steps);
    };
    fetchSteps();
  }, []);

  return (
    <CTCGradientContainer>
      {/* Title */}
      <header
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          textAlign: "center",
          padding: "32px 0 16px 0",
          letterSpacing: "1px",
          color: "#22223b",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Here is your Recipe Without the Crap
      </header>
      {recipeData.length !== 0 && (
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "rgba(255,255,255,0.85)",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            padding: "32px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <InfoComponent recipeData={recipeData} />
            <IngredientsComponent recipeData={recipeData} />
          </div>
          <StepsComponent recipeData={recipeData} />
        </div>
      )}
    </CTCGradientContainer>
  );
}

export default RecipiePage;
