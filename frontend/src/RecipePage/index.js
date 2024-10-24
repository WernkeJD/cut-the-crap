import React, { useEffect, useState } from "react";

import CTCGradientContainer from "../componenets/CTCGradientContainer";
import IngredientsComponent from "./components/Ingredients";
import StepsComponent from "./components/Steps";
import InfoComponent from "./components/Info";

async function getSteps(queryUrl) {
  // const response = await fetch(`https://calorie-counter-k4kc.onrender.com/cutthecrap?url=${queryUrl}`);
  const response = await fetch(
    `http://localhost:5678/cutthecrap?url=${queryUrl}`
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
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px",
        }}
      >
        Here is your Recipe Without the Crap
      </header>
      {recipeData.length !== 0 && (
        <>
          <InfoComponent recipeData={recipeData} />
          <IngredientsComponent recipeData={recipeData} />
          <StepsComponent recipeData={recipeData} />
        </>
      )}
    </CTCGradientContainer>
  );
}

export default RecipiePage;
