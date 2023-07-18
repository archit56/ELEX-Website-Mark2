import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const AddBtn = (props) => {
    return (
        <div className="resources-add-btn">
        <NavLink to={props.formAddress} state={{whatToDo: "register"}} aria-current="page">
          <Button  variant="danger" className={props.SetDisplay}><b>+</b></Button>
        </NavLink>
      </div>
    )
}

export default AddBtn;