import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoMask from "../../assets/images/VideoMask";
import imglogo from "../../assets/images/logo.png";
const VideoLogo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} {...props}>
            <VideoMask className={classes.mask} />
            <img
                    title="background-3d"
                    src={imglogo}
                    frameBorder="0"
                    className={classes.iframe}
                ></img>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        overflow:"hidden",
        position: "relative",
        width: "300px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "53px",
        },
    },
    mask: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "300px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "52px",
        },
    },
    video: {
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: "1px",
        right: "1px",
        width: "298px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "228px",
            height: "52px",
        },
    },
    iframe: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "70%",
        maxWidth: "38rem",
        marginTop:"6rem",
    },
}));

export default VideoLogo;
