import { useState } from "react";

import "./App.css";

function App() {
  const [feature, setFeature] = useState(0);

  return (
    <>
      <div></div>
      <h1>Cecilia Catanzano</h1>
      <h2>Full Stack Developer</h2>
      <code>Based in Barcelona</code>
    </>
  );
}

export default App;
