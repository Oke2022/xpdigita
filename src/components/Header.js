import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [{
        icon: faEnvelope,
        url: "mailto:xpdigita@gmail.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/Oke2022",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faInstagram,
        url: "https://instagram.com/xp.digita?igshid=ZDdkNTZiNTM=",
    },
    {
        icon: faFacebook,
        url: "https://facebook.com/xpdigita",
    },
];

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const boxRef = useRef(null);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
        setVisible(visible);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible]);

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const transformStyle = visible ? "translateY(0)" : "translateY(-200px)";

    return ( <
        Box ref = { boxRef }
        position = "fixed"
        top = { 0 }
        left = { 0 }
        right = { 0 }
        transform = { transformStyle }
        transitionProperty = "transform"
        transitionDuration = ".3s"
        transitionTimingFunction = "ease-in-out"
        backgroundColor = "#18181b" >
        <
        Box color = "white"
        maxWidth = "1280px"
        margin = "0 auto" >
        <
        HStack px = { 16 }
        py = { 4 }
        justifyContent = "space-between"
        alignItems = "center" >
        <
        nav >
        <
        HStack spacing = { 2 } > { " " } {
            socials.map((social) => ( <
                a href = { social.url } >
                <
                FontAwesomeIcon icon = { social.icon }
                size = "2x" / >
                <
                /a>
            ))
        } { " " } <
        /HStack>{" "} < /
        nav > { " " } <
        nav >
        <
        HStack spacing = { 8 } >
        <
        a href = "#projects-section"
        onClick = {
            (e) => handleClick(e, id)
        } >
        Projects { " " } <
        /a>{" "} <
        a href = "mailto:xpdigita@gmail.com"
        onClick = {
            (e) => handleClick(e, id)
        } >
        Contact Me { " " } <
        /a>{" "} < /
        HStack > { " " } <
        /nav>{" "} < /
        HStack > { " " } <
        /Box>{" "} < /
        Box >
    );
};

export default Header;