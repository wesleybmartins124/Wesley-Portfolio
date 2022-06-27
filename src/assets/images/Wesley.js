import * as React from "react";
import { useTheme } from "@material-ui/styles";
import imglogo from "../../assets/images/logo.png";

const Logo = (props) => {
    const theme = useTheme();
    return (
        <img
        title="background-3d"
        src={imglogo}
        frameBorder="0"
        width={105}
    ></img>
    );
};

export default Logo;
