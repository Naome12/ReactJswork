import React, { useState } from 'react';
import "./form.css";

const Form = () => {
  const [priceRange, setPriceRange] = useState(0);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    transmission: "",
    condition: "",
    features: [],
    contact: ""
  });
  const [formError, setFormError] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const features = Array.isArray(formData.features)
        ? formData.features.includes(value)
          ? formData.features.filter((feature) => feature !== value)
          : [...formData.features, value]
        : [value];

      setFormData((prevData) => ({
        ...prevData,
        features,
      }));
    } else if (type === "range" && name === "priceRange") {
      setPriceRange(parseInt(value));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "range" ? parseInt(value) : value,
      }));
    console.log(formData);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any required fields are empty
    if (
      formData.make.trim() === "" ||
      formData.model.trim() === "" ||
      formData.year.trim() === "" ||
      formData.mileage.trim() === "" ||
      formData.transmission.trim() === "" ||
      formData.condition.trim() === "" ||
      formData.features.length === 0 ||
      formData.contact.trim() === ""
    ) {
      setFormError(true);
    } else {
      setFormError(false);
      // Form submission logic
      console.log(formData);
    }
  };

  const { make, model, year, mileage, transmission, condition, features, contact } = formData;

  return (
    <div className="app">
      <h1>ORDER THE CAR </h1>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="make">Car Make:</label>
          <input type="text" id="make" name="make" value={make} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="model">Car Model:</label>
          <input type="text" id="model" name="model" value={model} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="date" id="year" name="year" value={year} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mileage">Mileage:</label>
          <input type="number" id="mileage" name="mileage" value={mileage} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="priceRange">Price Range:</label>
          <input type="range" id="priceRange" name="priceRange" min={0} max={1000} value={priceRange} onChange={handleChange} />
          <span>{priceRange}</span>
        </div>
        <div>
          <label htmlFor="transmission">Transmission:</label>
          <select id="transmission" name="transmission" value={transmission} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <fieldset>
          <legend>Condition:</legend>
          <div>
            <input type="radio" id="excellent" name="condition" value="Excellent" checked={condition === "Excellent"} onChange={handleChange} />
            <label htmlFor="excellent">Excellent</label>
          </div>
          <div>
            <input type="radio" id="good" name="condition" value="Good" checked={condition === "Good"} onChange={handleChange} />
            <label htmlFor="good">Good</label>
          </div>
          <div>
            <input type="radio" id="fair" name="condition" value="Fair" checked={condition === "Fair"} onChange={handleChange} />
            <label htmlFor="fair">Fair</label>
          </div>
          <div>
            <input type="radio" id="poor" name="condition" value="Poor" checked={condition === "Poor"} onChange={handleChange} />
            <label htmlFor="poor">Poor</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Features:</legend>
          <div>
            <input type="checkbox" id="ac" name="features" value="Air Conditioning" checked={features.includes("Air Conditioning")} onChange={handleChange} />
            <label htmlFor="ac">Air Conditioning</label>
          </div>
          <div>
            <input type="checkbox" id="ps" name="features" value="Power Steering" checked={features.includes("Power Steering")} onChange={handleChange} />
            <label htmlFor="ps">Power Steering</label>
          </div>
          <div>
            <input type="checkbox" id="pw" name="features" value="Power Windows" checked={features.includes("Power Windows")} onChange={handleChange} />
            <label htmlFor="pw">Power Windows</label>
          </div>
          <div>
            <input type="checkbox" id="abs" name="features" value="ABS" checked={features.includes("ABS")} onChange={handleChange} />
            <label htmlFor="abs">ABS</label>
          </div>
        </fieldset>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input type="number" id="contact" name="contact" value={contact} onChange={handleChange} />
        </div> <br/>
        {formError && <p style={{color:"red"}}>Please fill in all required fields.</p>}
        <button type="submit">Purchase Now &rarr;</button>
      </form>
    </div>
  );
};

export default Form;
