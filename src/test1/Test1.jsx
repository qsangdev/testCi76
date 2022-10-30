import React from "react";

const Test1 = () => {
  const array1 = [1, 2, "a"];
  const array2 = [1, 3, "b"];
  const removeSim = (array1, array2) => {
    const newArray = [...array1, ...array2];
    return newArray.filter((e) => {
      return !(array1.includes(e) && array2.includes(e));
    });
  };
  console.log(removeSim(array1, array2));

  return (
    <div>
      Test1: <br /> 
    </div>
  );
};

export default Test1;
