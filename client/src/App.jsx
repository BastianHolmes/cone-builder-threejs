import Form from "./components/Form";
import { Canvas } from "@react-three/fiber";
import Cone from "./cone/Cone";
import { useState, useRef } from "react";
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
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cone geometryData={geometryData} />
          </Canvas>
        )}
        <div className="sub-text">You can scale and rotate the cone! </div>
      </div>
    </div>
  );
}

export default App;
