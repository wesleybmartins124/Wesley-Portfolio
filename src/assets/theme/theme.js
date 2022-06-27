import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: "70px",
    mobileNavbarHeight: "55px",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: "#112B3C ",
            paper:"#bd3b22"
        },
        primary: {
            main: "#F66B0E",
            contrastText: "#fff",
        },
        secondary: {
            main: "#F66B0E",
            contrastText: "#fff",
        },
        text: {
            primary: "#FFF",
            secondary: "rgb(200,200,200)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    logoColor:"#fff",
    ...baseTheme
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: "#EFEFEF",
        },
        primary: {
            main: "#F66B0E",
            contrastText: "#000",
        },
        secondary: {
            main: "#112B3C",
            contrastText: "rgb(230,230,230)",
        },
        text: {
            primary: "#000",
            secondary: "rgb(30,30,30)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    backgroundSecondary: {
        bg : "#EFEFEF",
        text: "rgb(230,230,230) "
    },
    logoColor:"#fff",
    ...baseTheme
});

export { darkTheme, lightTheme };
