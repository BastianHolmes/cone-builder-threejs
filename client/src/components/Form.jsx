import React, { useState } from "react";
import apis from "../apis";
import Input from "./Input";

const Form = ({ setGeometryData, setIsLoading }) => {
  const [height, setHeight] = useState("6");
  const [radius, setRadius] = useState("4");
  const [segments, setSegments] = useState("6");

  const handleSmooth = () => {
    setHeight(12);
    setRadius(4);
    setSegments(1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await apis.post("/", {
        height,
        areas: segments,
        radius,
      });
      setGeometryData(() => [
        response.data.data.vertices,
        response.data.data.indices,
      ]);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="form-container">
      <form className="form">
        <Input value={height} setValue={setHeight} Name="Height" />
        <Input value={radius} setValue={setRadius} Name="Radius" />
        <Input value={segments} setValue={setSegments} Name="Segments" />
        <button
          type="submit"
          className="btn-submit"
          onClick={(e) => handleSubmit(e)}
        >
          Draw
        </button>
      </form>
      <button className="smooth-btn" onClick={() => handleSmooth()}>
        Go Smooth
      </button>
    </div>
  );
};

export default Form;
