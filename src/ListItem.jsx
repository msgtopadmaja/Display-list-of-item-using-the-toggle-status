import React from "react";

const ListItem = ({ data }) => {
  return (
    <div>
      {data.map((data) => (
        <p key={data.name}>
          {data.name}:{data.age}
        </p>
      ))}
    </div>
  );
};

export default ListItem;
