import React from "react";

const ErrorMessage = (props) => {
    const {errorMessage} = props;
    if (!errorMessage) return null;

    return (
        <div className="errorMessage">
            {errorMessage}
        </div>
    )
}

export default ErrorMessage