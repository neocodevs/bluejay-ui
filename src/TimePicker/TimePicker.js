import React from "react";
import TimeKeeper from "react-timekeeper";
import Picker from "../Picker";

const TimePicker = (props) => {
  return (
    <Picker {...props}>
      <TimeKeeper {...props} />
    </Picker>
  );
};

export default TimePicker;
