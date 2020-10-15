import React from "react";
import { render } from "react-dom";
import Button from "./Public Elements/Buttons/ConfirmButton";

render(
    <Button
        width={60}
        buttonColor="mediumseagreen"
        borderColor="dodgerblue"
        borderRadius={12}
    >
        HEllo
    </Button>,
    document.getElementById("root"),
);
