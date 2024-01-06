import { useState, useEffect, useCallback } from "react";
import InputComponent from "../../../components/input";
import { handleValidate } from "./methods";
import { userSchema } from "./schema";

//constants
const data = {
  firstName: "",
  lastName: "",
  age: 0,
};

const options = {
  strict: true,
};

const YupComponent = () => {
  //state values
  const [userData, setUserData] = useState(data);

  //functions
  const handleChange = (value) => {
    setUserData((prevData) => {
      return { ...prevData, ...value };
    });
  };

  //useEffects

  const getValidate = async (e) => {
    e.preventDefault();
    const response = await handleValidate(userSchema, userData, options);
  };

  return (
    <div>
      <form onSubmit={getValidate}>
        <InputComponent
          name="firstName"
          value={userData["firstName"] ?? ""}
          handleChange={handleChange}
        />
        <br />
        <InputComponent
          name="lastName"
          value={userData["lastName"] ?? ""}
          handleChange={handleChange}
        />
        <br />
        <InputComponent
          name="age"
          type="number"
          value={userData["age"] ?? ""}
          handleChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YupComponent;
