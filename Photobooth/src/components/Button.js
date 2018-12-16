import React from "react";
import { Button as BButton } from "react-bootstrap";

const Button = (props) => (
    <BButton className="button">{ props.text }</BButton>
)

export default Button;