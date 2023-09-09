import Form from "./components/Form";
import { Canvas } from "@react-three/fiber";
import Cone from "./cone/Cone";
import { useState } from "react";
import { baseVertices, baseIndieces } from "./cone/baseCone";

function App() {
  const [geometryData, setGeometryData] = useState([
    baseVertices,
    baseIndieces,
  ]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <Form setGeometryData={setGeometryData} setIsLoading={setIsLoading} />
      <div className="cone_container">
        {isLoading ? (
          <div className="preloader">Loading...</div>
        ) : (
          <Canvas>
            <Cone geometryData={geometryData} />
          </Canvas>
        )}
        <h4 className="sub-text">You can scale and rotate the cone! </h4>
      </div>
    </div>
  );
}

export default App;
