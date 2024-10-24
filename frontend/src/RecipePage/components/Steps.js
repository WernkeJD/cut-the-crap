import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          {step.ingredients.map((ingredient) => {
            return (
              <>
                <p style={{ color: "#F9F6EE" }}>{ingredient.name}</p>
                <p style={{ color: "#F9F6EE" }}>{ingredient.quantity}</p>
              </>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function StepsComponent({ recipeData }) {
  const steps = recipeData.steps;

  return (
    <div>
      <h2>Steps</h2>
      <div style={{ textAlign: "center" }}>
        {steps.length > 0 &&
          steps.map((step, index) => <StepComponent key={index} step={step} />)}
      </div>
    </div>
  );
}

export default StepsComponent;
