import React from "react";

const Loading = (props) => {
    if (!props.loading) return null;

    const loadingStyle = {
        background: "rgba(0, 0, 0, .8) no-repeat",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999
    }

    return (
        <div style={loadingStyle} />
    )
}

export default Loading;