import "./App.scss";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [valueList, setValueList] = useState([]);

  const [experienceValue, setExperienceValue] = useState("");
  const [experienceList, setExperienceList] = useState([]);

  const [educationValue, setEducationValue] = useState("");
  const [educationList, setEducationList] = useState([]);

  const [interestsValue, setInterestsValue] = useState("");
  const [interestsList, setInterestsList] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setExperienceValue(event.target.value);
  };
  const handleEducationChange = (event) => {
    setEducationValue(event.target.value);
  };
  const handleInterestsChange = (event) => {
    setInterestsValue(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      // Enter key was pressed, and input is not empty
      setValueList([...valueList, inputValue]);
      setInputValue("");
    }
  };
  const handleExperienceEnterKey = (event) => {
    if (event.key === "Enter" && experienceValue.trim() !== "") {
      setExperienceList([...experienceList, experienceValue]);
      setExperienceValue("");
    }
  };
  const handleEducationEnterKey = (event) => {
    if (event.key === "Enter" && educationValue.trim() !== "") {
      setEducationList([...educationList, educationValue]);
      setEducationValue("");
    }
  };
  const handleInterestsEnterKey = (event) => {
    if (event.key === "Enter" && interestsValue.trim() !== "") {
      setInterestsList([...interestsList, interestsValue]);
      setInterestsValue("");
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>CAREER GURU</h1>

      <form onSubmit={handleSubmitForm}>
        <section>
          <label>Skills</label>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleEnterKey}
          />
          <ul className="list">
            {valueList.map((value, index) => (
              <li className="list-box" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <label>Work Experience</label>
          <input
            type="text"
            value={experienceValue}
            onChange={handleExperienceChange}
            onKeyPress={handleExperienceEnterKey}
          />
          <ul className="list">
            {experienceList.map((value, index) => (
              <li className="list-box" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <label>Education</label>
          <input
            type="text"
            value={educationValue}
            onChange={handleEducationChange}
            onKeyPress={handleEducationEnterKey}
          />
          <ul className="list">
            {educationList.map((value, index) => (
              <li className="list-box" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <label>Interests</label>
          <input
            type="text"
            value={interestsValue}
            onChange={handleInterestsChange}
            onKeyPress={handleInterestsEnterKey}
          />
          <ul className="list">
            {interestsList.map((value, index) => (
              <li className="list-box" key={index}>
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <label>Desired Role</label>
          <input type="text" name="role" />
        </section>

        <section>
          <h3>Type of Response:</h3>
          <div>
            <input type="radio" name="response" value="skillsToLearn" />
            <label for="skillsToLearn">What skills should I learn next?</label>
          </div>
          <div>
            <input type="radio" name="response" value="skillsMissing" />
            <label for="skillsMissing">
              What crucial skills and experience am I missing?
            </label>
          </div>
          <div>
            <input type="radio" name="response" value="skillsForJob" />
            <label for="skillsForJob">
              What do I need to do to maximize my chances of getting a job right
              now?
            </label>
          </div>
        </section>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
