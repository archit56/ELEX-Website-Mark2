import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const UpdateBtn = (props) => {
    return (<>

        <NavLink className="update-btn" to={props.updateAddress} state={{docKey: props.docKey, whatToDo: "update"}}>
            <Button className={props.SetDisplay} variant="outline-dark">Update</Button>
        </NavLink>

    </>)

}

export default UpdateBtn;