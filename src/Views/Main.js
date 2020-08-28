import React, { useEffect } from "react";

const Main = ({ username }) => {
  useEffect(() => {
    console.log(username);
  });

  return <div>Test para</div>;
};

export default Main;
