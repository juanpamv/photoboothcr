import React from "react";

const ErrorMessage = (props) => (
    <React.Fragment>
        <p className="errorMessage">{props.message}</p>
    </React.Fragment>
)

export default ErrorMessage;