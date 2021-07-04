import React, { useState, useRef, useMemo, useCallback } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./EndClassModal.module.css";
import RedButton from "../UI/RedButton/RedButton";
import RadioInput from "../UI/RadioInput/RadioInput";
import CSSTransition from "react-transition-group/CSSTransition";
import modalTransition from "./modalTransition.module.css";
import radioTransition from "./radioTransition.module.css";

//endClass modal with animation---------------------------------

function EndClassModal(props) {
  const modalRef = useRef();
  const radioRef = useRef();
  const textareaRef = useRef();

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
  const { clearTimer, modalClose } = { ...props };
  const closeModal = useCallback(
    (end) => {
      setCheckBoxValue("Completed Completed");
      subCheckBoxValue("I got disconnected");
      modalClose();
      if (end === "end") {
        clearTimer();
      }
    },
    [modalClose, clearTimer]
  );
  const onCheckboxChange = (event) => {
    if (event.target.value === "Completed Completed") {
      setCheckBoxValue(event.target.value);
      subCheckBoxValue("I got disconnected");
      return;
    }
    setCheckBoxValue(event.target.value);
    console.log(event.target.value);
  };
  const onInterruptChange = (event) => {
    subCheckBoxValue(event.target.value);
    console.log(event.target.value);
  };

  // if class was inturrepted selcted show the sub categories
  const InterruptReasonElementList = InterruptReason.map((item) => (
    <div className={classes.InputRadio} key={item.value}>
      <RadioInput
        value={item.value}
        name={item.name}
        changed={onInterruptChange}
        defaultChecked={item.value === "I got disconnected"}
      />
      <CSSTransition
        in={
          subcheckBoxValue === "Other reason" && item.value === "Other reason"
        }
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames={radioTransition}
        nodeRef={textareaRef}
      >
        {(state) => (
          <div ref={textareaRef} className={classes.InterruptOther}>
            <textarea cols="30" rows="4" className={classes.Textarea} />
          </div>
        )}
      </CSSTransition>
    </div>
  ));

  // show the main 2 categories with codition to show shub categories
  const EndClassElementList = EndClassList.map((item) => {
    return (
      <div className={classes.InputRadio} key={item.value}>
        <RadioInput
          value={item.value}
          name={item.name}
          changed={onCheckboxChange}
          defaultChecked={item.value === "Completed Completed"}
        />
        <CSSTransition
          in={
            checkBoxValue === "Class interrupted/aborted" &&
            item.value === "Class interrupted/aborted"
          }
          mountOnEnter
          unmountOnExit
          timeout={300}
          classNames={radioTransition}
          nodeRef={radioRef}
        >
          {(state) => <div ref={radioRef}>{InterruptReasonElementList}</div>}
        </CSSTransition>
      </div>
    );
  });
  const button = useMemo(
    () => (
      <div className={classes.ModalButtons}>
        <RedButton clicked={() => closeModal("end")}>End Class</RedButton>
        <div className={classes.Cancel} onClick={closeModal}>
          Cancel
        </div>
      </div>
    ),
    [closeModal]
  );
  const backdrop = useMemo(
    () => <Backdrop clicked={closeModal} />,
    [closeModal]
  );
  return (
    <React.Fragment>
      {props.showModal ? backdrop : null}
      <CSSTransition
        in={props.showModal}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames={modalTransition}
        nodeRef={modalRef}
      >
        {(state) => (
          <div className={classes["EndClassModal"]} ref={modalRef}>
            <h2>Select a reason to end class</h2>
            <div className={classes.InputRadioConatainer}>
              {EndClassElementList}
            </div>
            {button}
          </div>
        )}
      </CSSTransition>
    </React.Fragment>
  );
}

export default EndClassModal;
