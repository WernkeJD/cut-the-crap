import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function StepComponent(props) {
  const { step } = props;

  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Accordion
        sx={{
          backgroundColor: "#36454F",
          margin: "8px 0",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#F9F6EE" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h2
            style={{
              color: "#F9F6EE",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.15rem",
              fontWeight: 600,
              margin: 0,
            }}
          >
            {step.title}
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              color: "#F9F6EE",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.05rem",
              marginBottom: 8,
            }}
          >
            {step.instruction}
          </p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {step.ingredients.map((ingredient, idx) => (
              <li
                key={idx}
                style={{
                  color: "#F9F6EE",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  marginBottom: 2,
                }}
              >
                {ingredient.quantity} {ingredient.name}
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function StepsComponent({ recipeData }) {
  const steps = recipeData.steps;

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "#22223b",
          fontSize: "2rem",
          margin: "32px 0 16px 0",
        }}
      >
        Steps
      </h2>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {steps.length > 0 &&
          steps.map((step, index) => <StepComponent key={index} step={step} />)}
      </div>
    </div>
  );
}

export default StepsComponent;
