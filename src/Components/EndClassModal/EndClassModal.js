import React, { useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./EndClassModal.module.css";
import RedButton from "../UI/RedButton/RedButton";
import RadioInput from "../UI/RadioInput/RadioInput";

function EndClassModal(props) {
  const [checkBoxValue, setCheckBoxValue] = useState("Completed Completed");
  const [subcheckBoxValue, subCheckBoxValue] = useState("I got disconnected");

  const EndClassList = [
    { value: "Completed Completed", name: "class" },
    { value: "Class interrupted/aborted", name: "class" },
  ];
  const InterruptReason = [
    { value: "Student didn't show up for class", name: "InteruppetReason" },
    { value: "Student didn't show any interest", name: "InteruppetReason" },
    { value: "Student got disconnected", name: "InteruppetReason" },
    { value: "I got disconnected", name: "InteruppetReason" },
    { value: "Other reason", name: "InteruppetReason" },
  ];

  const onCheckboxChange = (event) => {
    setCheckBoxValue(event.target.value);
    console.log(event.target.value);
  };
  const onInterruptChange = (event) => {
    subCheckBoxValue(event.target.value);
    console.log(event.target.value);
  };

  const InterruptReasonElementList = InterruptReason.map((item) => (
    <div className={classes.InputRadio} key={item.value}>
      <RadioInput
        value={item.value}
        name={item.name}
        changed={onInterruptChange}
        defaultChecked={item.value === "I got disconnected"}
      />
      {subcheckBoxValue === "Other reason" && item.value === "Other reason" ? (
        <div className={classes.InterruptOther}>
          <textarea cols="40" rows="4" />
        </div>
      ) : null}
    </div>
  ));

  const EndClassElementList = EndClassList.map((item) => {
    return (
      <div className={classes.InputRadio} key={item.value}>
        <RadioInput
          value={item.value}
          name={item.name}
          changed={onCheckboxChange}
          defaultChecked={item.value === "Completed Completed"}
        />
        {checkBoxValue === "Class interrupted/aborted" &&
        item.value === "Class interrupted/aborted"
          ? InterruptReasonElementList
          : null}
      </div>
    );
  });
  return (
    <React.Fragment>
      <Backdrop clicked={props.modalClose} />
      <div className={classes.EndClassModal}>
        <h2>Select a reason to end class</h2>
        <div className={classes.InputRadioConatainer}>
          {EndClassElementList}
        </div>
        <div className={classes.ModalButtons}>
          <RedButton clicked={props.clearTimer}>End Class</RedButton>
          <div className={classes.Cancel} onClick={props.modalClose}>
            Cancel
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EndClassModal;
