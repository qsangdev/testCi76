import React from "react";

const Test2 = () => {
  const data = [
    { name: "Liverpool", points: 78, GD: 50 },
    { name: "MU", points: 80, GD: 50 },
    { name: "Chelsea", points: 78, GD: 50 },
    { name: "Arsenal", points: 99, GD: 50 },
  ];

  const newArray = data.sort((a, b) =>
    a.points > b.points
      ? -1
      : a.points === b.points
      ? a.GD > b.GD
        ? -1
        : a.GD === b.GD
        ? a.name > b.name
          ? 1
          : -1
        : 1
      : 1
  );

  for (var i = 0; i < newArray.length; i++) {
    newArray[i].position = i + 1;
  }
  console.log(newArray);

  return <div>Test2:
    
  </div>;
};

export default Test2;
