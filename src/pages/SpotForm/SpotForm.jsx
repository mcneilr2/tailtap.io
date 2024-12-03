import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import errorIcon from "../../assets/images/error-24px.svg";

export default function SpotForm() {
  const [formData, setFormData] = useState({
    type: "park",
    weather_coverage: "None",
    is_lit_night: "0",
    is_public: "0",
  });

  const [errors, setErrors] = useState({});
  const [selectedType, setSelectedType] = useState("park");
  const [selectedCoverage, setSelectedCoverage] = useState("None");
  let navigate = useNavigate();

  const validationRules = {
    name: {
      required: true,
    },
    address: {
      required: true,
    },
    latitude: {
      required: true,
    },
    longitude: {
      required: true,
    },
    hours: {
      required: true,
    },
    type: {
      required: true,
    },
    is_public: {
      required: true,
    },
    is_lit_night: {
      required: true,
    },
    weather_coverage: {
      required: true,
    },
    occupancy_level: {
      required: true,
    },
    median_skill_level: {
      required: true,
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "is_public" || name == "is_lit_night") {
      if (e.target.checked == true) {
        setFormData({
          ...formData,
          [name]: "1",
        });
      } else {
        setFormData({
          ...formData,
          [name]: "0",
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRadioChange = (type) => {
    console.log(type);
    if (type == "park" || type == "street") {
      setSelectedType(type);
      setFormData({
        ...formData,
        type: type,
      });
    } else {
      setSelectedCoverage(type);
      setFormData({
        ...formData,
        weather_coverage: type,
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    Object.keys(validationRules).forEach((field) => {
      const value = formData[field];
      const rules = validationRules[field];
      console.log(value, field);
      if (rules.required && !value) {
        newErrors[field] = "This field is required";
        return;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      addSpot(formData);
      navigate("/spots");
    } else {
      alert("Form Errors");
    }
  };

  const addSpot = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/spots/",
        formData
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-header">
        <h2 className="page-header__title">Add New Spot!</h2>
      </div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__section">
          <div className="form__field">
            <label htmlFor="name" className="form__label">
              Spot Name
            </label>
            <input
              className={`form__input${
                errors.name ? " form__input--error" : ""
              }`}
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Spot Name"
            />
            {errors.name && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.name}
              </p>
            )}
          </div>
          <div className="form__field">
            <fieldset>
              <label className="form__label">Spot Type</label>
              <label htmlFor="type" className="form__label--radio">
                Skate Park
              </label>
              <input
                className={`form__input${
                  errors.type ? " form__input--error" : ""
                }`}
                type="radio"
                name="type"
                id="park"
                onChange={() => handleRadioChange("park")}
                checked={selectedType === "park"}
              />
              <label htmlFor="street" className="form__label--radio">
                Street Spot
              </label>
              <input
                className={`form__input${
                  errors.type ? " form__input--error" : ""
                }`}
                type="radio"
                name="type"
                id="street"
                onChange={() => handleRadioChange("street")}
                checked={selectedType === "street"}
              />
            </fieldset>
          </div>
          <div className="form__field">
            <label htmlFor="latitude" className="form__label">
              Latitude
            </label>
            <input
              className={`form__input${
                errors.latitude ? " form__input--error" : ""
              }`}
              type="number"
              name="latitude"
              id="latitude"
              onChange={handleChange}
              placeholder="Latitude"
            />
            {errors.latitude && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.latitude}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="longitude" className="form__label">
              Longitude
            </label>
            <input
              className={`form__input${
                errors.longitude ? " form__input--error" : ""
              }`}
              type="number"
              name="longitude"
              id="longitude"
              onChange={handleChange}
              placeholder="Longitude"
            />
            {errors.longitude && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.longitude}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="address" className="form__label">
              Street Address
            </label>
            <input
              className={`form__input${
                errors.address ? " form__input--error" : ""
              }`}
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              placeholder="Street Address"
            />
            {errors.address && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.address}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="hours" className="form__label">
              Hours
            </label>
            <input
              className={`form__input${
                errors.hours ? " form__input--error" : ""
              }`}
              type="text"
              name="hours"
              id="hours"
              onChange={handleChange}
              placeholder="Hours"
            />
            {errors.hours && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.hours}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="is_lit_night" className="form__label">
              Is it free to skate here?
            </label>
            <input
              className={`form__input`}
              type="checkbox"
              name="is_public"
              id="is_public"
              onChange={handleChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="is_lit_night" className="form__label">
              Is this spot lit up at night?
            </label>
            <input
              className={`form__input${
                errors.is_lit_night ? " form__input--error" : ""
              }`}
              type="checkbox"
              name="is_lit_night"
              id="is_lit_night"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form__field">
          <fieldset>
            <label className="form__label">
              Does this spot have weather coverage?
            </label>
            <label htmlFor="dry" className="form__label--radio">
              Covered/Indoors
            </label>
            <input
              className={`form__input${
                errors.type ? " form__input--error" : ""
              }`}
              type="radio"
              name="dry"
              id="dry"
              onChange={() => handleRadioChange("Full")}
              checked={selectedCoverage === "Full"}
            />
            <label htmlFor="wet" className="form__label--radio">
              Partial (could have wet floors)
            </label>
            <input
              className={`form__input${
                errors.type ? " form__input--error" : ""
              }`}
              type="radio"
              name="wet"
              id="wet"
              onChange={() => handleRadioChange("Partial")}
              checked={selectedCoverage === "Partial"}
            />
            <label htmlFor="swim" className="form__label--radio">
              None/Outdoors
            </label>
            <input
              className={`form__input${
                errors.type ? " form__input--error" : ""
              }`}
              type="radio"
              name="swim"
              id="swim"
              onChange={() => handleRadioChange("None")}
              checked={selectedCoverage === "None"}
            />
          </fieldset>
          <div className="form__field">
            <label htmlFor="occupancy_level" className="form__label">
              Average Level of Crowding (0-10)
            </label>
            <input
              className={`form__input${
                errors.occupancy_level ? " form__input--error" : ""
              }`}
              type="number"
              name="occupancy_level"
              id="occupancy_level"
              onChange={handleChange}
              placeholder="Estimate how crowded this spot is"
            />
            {errors.occupancy_level && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.occupancy_level}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="medians" className="form__label">
              Average Skill Level at Spot (0-10)
            </label>
            <input
              className={`form__input${
                errors.median_skill_level ? " form__input--error" : ""
              }`}
              type="number"
              name="median_skill_level"
              id="median_skill_level"
              onChange={handleChange}
              placeholder="Estimate the skill level of skaters at this spot"
            />
            {errors.median_skill_level && (
              <p className="form__error">
                <img src={errorIcon} alt="error" />
                {errors.median_skill_level}
              </p>
            )}
          </div>
        </div>
        <div className="form__section form__section--actions">
          <Link to="/">
            <button type="button" className="form__button form__button--cancel">
              Cancel
            </button>
          </Link>
          <button type="submit" className="form__button form__button--submit">
            Save Skate Spot
          </button>
        </div>
      </form>
    </>
  );
}
