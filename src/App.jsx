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

  return (
    <div className="App">
      <h1>Career Guru</h1>
      <section>
        <label>Skills</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleEnterKey}
        />
        <ul>
          {valueList.map((value, index) => (
            <li key={index}>{value}</li>
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
        <ul>
          {experienceList.map((value, index) => (
            <li key={index}>{value}</li>
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
        <ul>
          {educationList.map((value, index) => (
            <li key={index}>{value}</li>
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
        <ul>
          {interestsList.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>

      <section>
        <label>Desired Role</label>
        <input type="text" name="role" />
      </section>

      <section>
        <h2>Type of Response:</h2>
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
      </section>
    </div>
  );
}

export default App;
