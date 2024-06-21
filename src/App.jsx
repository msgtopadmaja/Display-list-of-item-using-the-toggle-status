import React, { useState } from "react";
import ListItem from "./ListItem";
import ToggleStatus from "./ToggleStatus";

const App = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  const data = [
    { name: "len", age: 24 },
    { name: "Max", age: 25 },
    { name: "david", age: 26 },
    { name: "Jan", age: 27 },
    { name: "Sham", age: 28 },
    { name: "John", age: 29 },
    { name: "karthi", age: 30 },
    { name: "Mahi", age: 31 },
    { name: "Raji", age: 32 },
    { name: "Hema", age: 33 },
  ];

  const handleToggleChange = (status) => {
    // console.log(status,'current status');
    setToggleStatus(status);
  };
  console.log(toggleStatus, "togglestatus");// inital false -> on -> true (togglestatus)
  return (
    <div className="items">
      <ToggleStatus toggleStatus={toggleStatus} onChange={handleToggleChange} />
      {toggleStatus ? (
        <div>
          <ListItem data={data} />
        </div>
      ) : (
        <div className="toggle">Toggle is off</div>
      )}
    </div>
  );
};

export default App;
