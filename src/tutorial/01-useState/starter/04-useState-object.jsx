import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Miracle",
    age: 23,
    hobby: "Coding",
  });
  // const [name, setName] = useState("Miracle");
  // const [age, setAge] = useState(23);
  // const [hobby, setHobby] = useState("Coding");

  const displayPerson = () => {
    // setPerson({
    //   name: "Betty",
    //   age: 42,
    //   hobby: "Actress",
    // });
    setPerson({ ...person, name: "susan" });
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button type="button" className="btn" onClick={displayPerson}>
        Show Gemini
      </button>
    </div>
  );
};

export default UseStateObject;
