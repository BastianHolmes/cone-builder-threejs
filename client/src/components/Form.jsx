import React, { useState } from "react";
import apis from "../apis";

const Form = () => {
  const [height, setHeight] = useState("");
  const [radius, setRadius] = useState("");
  const [segments, setSegments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apis.post("/", {
        height,
        areas: segments,
        radius,
      });
      console.log(response.data.data.base);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="height">Height</label>
        <input
          min="1"
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="type height"
        />
      </div>
      <div className="form-group">
        <label htmlFor="radius">Radius</label>
        <input
          min="1"
          id="radius"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="type radius"
        />
      </div>
      <div className="form-group">
        <label htmlFor="segments">Segments</label>
        <input
          min="3"
          id="segments"
          type="number"
          value={segments}
          onChange={(e) => setSegments(e.target.value)}
          placeholder="type segments"
        />
      </div>
      <button
        type="submit"
        className="btn-submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
