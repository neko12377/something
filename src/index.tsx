import React from "react";
import { render } from "react-dom";
import Button from "./Shared components/View/Buttons/ConfirmButton";

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
