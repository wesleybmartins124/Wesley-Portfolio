import * as React from "react";
import { motion } from "framer-motion";
import imglogo from "../../assets/images/logo.png";

const container = {
    hidden: {
        opacity: 1,
        scale: 1,
    },
    visible: {
        opacity: 0,
        scale: 0,
        transition: {
            delay: 3.4,
            duration: 0.3,
        },
    },
};

const svg = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 0.5,
        transition: {
            when: "afterChildren",
            duration: 0.1,
            delay: 3,
            staggerChildren: 0.2,
        },
    },
};

const path = (strokeDashoffset) => ({
    hidden: { strokeDashoffset },
    visible: {
        strokeDashoffset: 0,
    },
});

const pathProps = {
    variants: path(200),
    transition: {
        duration: 1,
    },
};

const rectProps = {
    variants: path(866),
    transition: {
        duration: 1.5,
    },
};

const Pre = (props) => {

    return (
        <>
            <motion.div variants={container} initial="hidden" animate="visible">
             
            <img
        title="background-3d"
        src={imglogo}
        frameBorder="0"
        width={200}
    ></img>
            </motion.div>
        </>
    );
};

export default Pre;
