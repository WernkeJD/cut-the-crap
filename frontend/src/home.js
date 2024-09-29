import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function getSteps() {
  // Call our API
  return `1.	Sift the dry ingredients together:
	•	In a large bowl, sift together 1 ½ cups all-purpose flour, 3 ½ teaspoons baking powder, 1 tablespoon white sugar, and ¼ teaspoon salt.
	2.	Make a well and add the wet ingredients:
	•	Make a well in the center of the dry ingredients, then add 1 ¼ cups milk, 3 tablespoons melted butter, and 1 egg. Mix until smooth.
	3.	Heat and prepare the cooking surface:
	•	Heat a lightly oiled griddle or pan over medium-high heat.
	4.	Scoop and cook the pancakes:
	•	Scoop about ¼ cup of batter onto the hot griddle for each pancake. Cook until bubbles form on top and the edges look dry, about 2 to 3 minutes.
	5.	Flip and continue cooking:
	•	Flip the pancakes and cook until the other side is browned, about 2 to 3 minutes.
	6.	Repeat for remaining batter:
	•	Continue this process with the remaining batter. Serve the pancakes with your choice of toppings!`;
}

function parseSteps(props) {
  // Parse the data back from ChatGPT
  return [
    `1.	Sift Dry Ingredients:
In a large bowl, sift together 1 ½ cups all-purpose flour, 3 ½ teaspoons baking powder, 1 tablespoon white sugar, and ¼ teaspoon salt.`,
    `2.	Add Wet Ingredients:
Make a well in the center of the dry ingredients. Add 1 ¼ cups milk, 3 tablespoons melted butter, and 1 egg. Stir everything until the batter is smooth.`,
    `3.	Prepare Griddle or Pan:
Heat a lightly oiled griddle or pan over medium-high heat.`,
    `4.	Cook Pancakes:
Pour or scoop ¼ cup of batter for each pancake onto the hot surface. Cook for 2-3 minutes until bubbles form on top and the edges look dry. Flip and cook until the other side is browned.`,
    `5.	Serve and Enjoy:
Repeat with the remaining batter and serve with your favorite toppings.`,
  ];
}

function StepComponent(props) {
  let { step } = props;

  step = step.replace("\n", "");

  const stepRegex = /(.*):(.*)/;

  const matches = step.match(stepRegex);

  const header = matches[1];
  const rest = matches[2];

  return (
    <div style={{paddingLeft: "10px", paddingRight: '10px'}}>
      <Accordion style={{backgroundColor: "#36454F", margin: '3px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#F9F6EE"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2 style={{color: "#F9F6EE"}}>{header}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{color: "#F9F6EE"}}>{rest}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Home() {
  const apiData = getSteps()
  const testData = parseSteps(apiData);

  const [data, setData] = useState(null);

  const query = window.location.search;

  useEffect(() => {
    fetch(`http://localhost:5000/${query}`, {
      method: "GET",
      headers: {
        source: "website",
      },
    })
      .then((response) => response.text())
      .then((urldata) => {
        console.log("Server response:", urldata);
        setData(urldata);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div style={{paddingBottom: "20px"}}>
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
        Here is your Recipie Without the Crap
      </header>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>{data}</p>
        {testData.map((step) => {
          return <StepComponent step={step} />;
        })}
      </div>
    </div>
  );
}

export default Home;
