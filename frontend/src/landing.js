import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./landing.css";

import { TextField} from "@mui/material";

export default function Landing() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleRoute = () => {
    // Navigate to the dynamic path based on the input value
    if (text) {
      navigate(`/recipe?url=${text}`);
    }
  };

  return (
    <div style={{display:"flex", flexDirection: "column", alignitems: "center", justifyContent: "center", height: "100vh"}}>
      <header
        style={{ width: "100%", textAlign: "center" ,justifycontent: "center", alignItems: "center", fontSize: "32px", fontWeight: "bold", fontFamily: "Roboto"}}
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
        <button id="fetchContent" class="button-64" role="button" onClick={(handleRoute)}><span class="text">Get the Steps Without Crap!</span></button>
      </div>
    </div>
  );
}
