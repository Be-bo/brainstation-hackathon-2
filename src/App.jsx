import "./App.scss";
import { useState } from "react";
import guru from "./image/guru.jpeg";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [valueList, setValueList] = useState([]);

  const [experienceValue, setExperienceValue] = useState("");
  const [experienceList, setExperienceList] = useState([]);

  const [educationValue, setEducationValue] = useState("");
  const [educationList, setEducationList] = useState([]);

  const [interestsValue, setInterestsValue] = useState("");
  const [interestsList, setInterestsList] = useState([]);

  const [selectedValue, setSelectedValue] = useState("0");
  const [roleValue, setRoleValue] = useState("");

  const [responseData, setresponseData] = useState([]);

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
      event.preventDefault();
      setValueList([...valueList, inputValue]);
      setInputValue("");
    }
  };
  const handleExperienceEnterKey = (event) => {
    if (event.key === "Enter" && experienceValue.trim() !== "") {
      event.preventDefault();
      setExperienceList([...experienceList, experienceValue]);
      setExperienceValue("");
    }
  };
  const handleEducationEnterKey = (event) => {
    if (event.key === "Enter" && educationValue.trim() !== "") {
      event.preventDefault();
      setEducationList([...educationList, educationValue]);
      setEducationValue("");
    }
  };
  const handleInterestsEnterKey = (event) => {
    if (event.key === "Enter" && interestsValue.trim() !== "") {
      event.preventDefault();
      setInterestsList([...interestsList, interestsValue]);
      setInterestsValue("");
    }
  };

  const handleRoleChange = (event) => {
    event.preventDefault();
    setRoleValue(event.target.value);
  };
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    ///console.log(event.target.value);
  };
  const handleSubmitForm = (event) => {
    // event.preventDefault();
    event.preventDefault();
    const data = {
      skills: valueList,
      work_experience: experienceList,
      interests: interestsList,
      education: educationList,
      desired_role: roleValue,
      response_type: parseInt(selectedValue, 10),
      //response_type: parseInt(selectedValue, 10)
    };
    //console.log(data);
    submitDatatoServer(data);
  };
  const submitDatatoServer = async (finaldata) => {
    console.log(finaldata);
    const response = await axios.post("http://localhost:8080/chat", finaldata);
    console.log(response.data.message.content);
    setresponseData(response.data.message.content);
  };

  return (
    <>
      <div className="outerbox">
        <div className="App">
          <div className="img">
            <img src={guru} alt="guru image" />
          </div>
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
              <input
                type="text"
                name="role"
                value={roleValue}
                onChange={handleRoleChange}
              />{" "}
            </section>

            <section>
              <h3>Type of Response:</h3>
              <div>
                <input
                  type="radio"
                  name="response"
                  value="0"
                  checked={selectedValue === "0"}
                  onChange={handleRadioChange}
                />
                <label for="skillsToLearn">
                  What skills should I learn next?
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="response"
                  value="1"
                  checked={selectedValue === "1"}
                  onChange={handleRadioChange}
                />
                <label for="skillsMissing">
                  What crucial skills and experience am I missing?
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="response"
                  value="2"
                  checked={selectedValue === "2"}
                  onChange={handleRadioChange}
                />
                <label for="skillsForJob">
                  What do I need to do to maximize my chances of getting a job
                  right now?
                </label>
              </div>
              <p>Selected value: {selectedValue}</p>
            </section>

            <button>Submit</button>
          </form>

          <div>
            <p>{responseData}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
