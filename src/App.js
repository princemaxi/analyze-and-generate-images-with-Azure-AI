import React, { useState } from "react";
import analyzeImage from "./azure-image-analysis.js";

function App() {
  const [imageURL, setImageURL] = useState("");
  const [result, setResult] = useState(null);

  const handleImageAnalysis = async () => {
    try {
      const result = await analyzeImage(imageURL);
      setResult(result);
    } catch (error) {
      console.log(error);
    }
  }

  const displayResult = () => {
    if (!result) {
      return null;
    }
    return (
      <div>
        <h2>Image Analysis Result</h2>
        <img
        width="500"
        src={result?.url ? result.url: imageURL}
        alt="Uploaded"
        ></img>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Analyze and Generate Images</h1>
      <input
        type="text"
        placeholder="Enter image URL or textual prompt"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button onClick={handleImageAnalysis}>Analyze Image</button>
      <button>Generate Image</button>
      {displayResult()}
    </div>
  );
} 

export default App;
