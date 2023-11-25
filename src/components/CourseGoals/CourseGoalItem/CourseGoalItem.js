import React, { useState } from "react";

import styles from "./CourseGoalItem.module.css";
import basketImage from "../../../img/basket-delete.svg";

const CourseGoalItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const checkboxChangeHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <li className={`${styles["goal-item"]}`}>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={checkboxChangeHandler}
          />
          <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
            {props.children}
          </span>
        </label>
        <img src={basketImage} alt="Icon: basket" onClick={deleteHandler} />
      </li>
    </>
  );
};

export default CourseGoalItem;
