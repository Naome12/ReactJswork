import React,{useState} from 'react'
import "./form.css";
const Form = () => {
  const [priceRange, setPriceRange] = useState(0);
    const [formData, setFormData] = useState({
        make: "",
        model: "",
        year: "",
        mileage: "",
        condition: "",
        features: [],
      });
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
        }else if (type === "range" && name === "priceRange") {
          setPriceRange(parseInt(value)); }else {
            setFormData((prevData) => ({
                ...prevData,
            [name]: type === "range" ? parseInt(value) : value,
        }));
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };
    
    const { make, model, year, mileage, condition, features } = formData;
    return (
        <div className="app">
        <form onSubmit={handleSubmit}>
        <label>
        Car Make:
              <input type="text" name="make" value={make} onChange={handleChange} required />
            </label>
    
            <label>
              Car Model:
              <input type="text" name="model" value={model} onChange={handleChange} required />
            </label>
    
            <label>
              Year:
              <input type="date" name="year" value={year} onChange={handleChange} required />
            </label>
    
            <label>
              Mileage:
              <input type="number" name="mileage" value={mileage} onChange={handleChange} required />
            </label>
            <label htmlFor="priceRange">Price Range</label>
            <input type="range" id="priceRange" name="priceRange" min={0} max={100} value={priceRange} onChange={handleChange} />
            <span>{priceRange}</span> {/* Display the selected price range value */} 
            <fieldset>
              <legend>Condition</legend>
              <label>
                <input type="radio" name="condition" value="Excellent" checked={condition === "Excellent"} onChange={handleChange} />
                Excellent
              </label>
              <label>
                <input type="radio" name="condition" value="Good" checked={condition === "Good"} onChange={handleChange} />
                Good
              </label>
              <label>
                <input type="radio" name="condition" value="Fair" checked={condition === "Fair"} onChange={handleChange} />
                Fair
              </label>
              <label>
                <input type="radio" name="condition" value="Poor" checked={condition === "Poor"} onChange={handleChange} />
                Poor
              </label>
            </fieldset>
    
            <fieldset>
              <legend>Features</legend>
              <label>
                <input type="checkbox" name="features" value="Air Conditioning" checked={features.includes("Air Conditioning")} onChange={handleChange} />
                Air Conditioning
              </label>
              <label>
                <input type="checkbox" name="features" value="Power Steering" checked={features.includes("Power Steering")} onChange={handleChange} />
                Power Steering
              </label>
              <label>
                <input type="checkbox" name="features" value="Power Windows" checked={features.includes("Power Windows")} onChange={handleChange} />
                Power Windows
              </label>
              <label>
                <input type="checkbox" name="features" value="ABS" checked={features.includes("ABS")} onChange={handleChange} />
                ABS
              </label>
            </fieldset>
    
            <button type="submit">Purchase Now &rarr;</button>
          </form>
      
    </div>
  )
}

export default Form
