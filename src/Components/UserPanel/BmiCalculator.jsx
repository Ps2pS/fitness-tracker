import { useState } from "react";

export default function BmiCalculator() {
  const [weight, updateWeightValue] = useState("");
  const [height, updateHeightValue] = useState("");
  const [bmiValue, updateBMIValue] = useState(0);

  // Calculating BMI 

  function calculateBMIValue() {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedOffBMIValue = bmiValue.toFixed(2);
    updateBMIValue(roundedOffBMIValue);
  }

  // Hadnling height and Weight

  function handleWeightInputChange(e) {
    updateWeightValue(e.target.value);
  }
  function handleHeightInputChange(e) {
    updateHeightValue(e.target.value);
  }

  // Handling reset

  function reset() {
    updateWeightValue("");
    updateHeightValue("");
    updateBMIValue(0);
  }

// Displaying the result based on user BMI

  function displayBMIValue() {
    if (bmiValue >= 18.5 && bmiValue <= 24.99) {
      return <div>You are in a healthy weight range</div>;
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return <div> You are overweight</div>;
    } else if (bmiValue >= 30) {
      return <div> You are obese</div>;
    }
  }
  return (
    <div>
      <div className="text-center image-container">
        <img
          height=""
          className="bmi-image"
          src="https://t4.ftcdn.net/jpg/05/11/15/31/360_F_511153154_ksxQyv9upzvw0WmnTjHvWSbyHHiICUxL.jpg"
        />
      </div>
      <div className="container">
        <h3 className="mb-4">How to calculate Body Mass Index</h3>
        <p className="my-3">
          Body Mass Index is a simple calculation using a person’s height and
          weight. The formula is BMI = kg/m2 where kg is a person’s weight in
          kilograms and m2 is their height in metres squared.
        </p >

        <p className="my-3">
          A BMI of 25.0 or more is overweight, while the healthy range is 18.5
          to 24.9. BMI applies to most adults 18-65 years.
        </p>

        <h3 className="my-3"> Who shouldn't use a BMI calculator</h3>
        <p>
          BMI is not used for muscle builders, long distance athletes, pregnant
          women, the elderly or young children. This is because BMI does not
          take into account whether the weight is carried as muscle or fat, just
          the number. Those with a higher muscle mass, such as athletes, may
          have a high BMI but not be at greater health risk. Those with a lower
          muscle mass, such as children who have not completed their growth or
          the elderly who may be losing some muscle mass may have a lower BMI.
          During pregnancy and lactation, a woman's body composition changes, so
          using BMI is not appropriate.
        </p>

        <div className="row row-auto">
          <div className="col-lg-8">
            <h1 className="my-5">BMI Calculator</h1>
            <div>
              <label className="me-1 my-4">Enter your Weight in kgs:</label>
              <br />

              <input
                className="form-control"
                type="text"
                value={weight}
                onChange={handleWeightInputChange}
              ></input>
            </div>
            <div>
              <label className="me-1 my-3">Enter your Height in cms:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={height}
                onChange={handleHeightInputChange}
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-4 me-3"
              onClick={() => {
                calculateBMIValue();
              }}
            >
              Calculate BMI
            </button>
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={reset}
            >
              Reset
            </button>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="text-center justify-content-between align-items-center experience">
                <span style={{ color: "", fontSize: "2.5rem" }}>Your</span>
                <h1
                  class="mb-3"
                  style={{ color: "lightslategrey", fontSize: "4.5rem" }}
                >
                  BMI
                </h1>
              </div>
              <br />
              <div class="col-md-12 text-center mx-auto bmi-info">
                <span className="display-3  ">{bmiValue}</span>
              </div>
              <div className="text-center">
              <h6 className="py-3">{displayBMIValue()}</h6>

              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
