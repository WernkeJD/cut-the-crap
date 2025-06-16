import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import { TextField } from "@mui/material";

export default function Landing() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleRoute = () => {
    if (text) {
      navigate(`/recipe?url=${text}`);
    }
  };

  return (
    <div style={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <header
        style={{ width: "100%", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: "32px", fontWeight: "bold", fontFamily: "Roboto"}}
      >
        Enter the Url of Your Recipie Below!
      </header>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <TextField
          id="cut-the-crap-url-entry"
          label="Enter Url"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{margin: "10px", width: "75%", marginTop: "100px"}}
        />
        <button id="fetchContent" className="button-64" onClick={handleRoute}>
          <span className="text">Get the Steps Without Crap!</span>
        </button>
      </div>
    </div>
  );
}
