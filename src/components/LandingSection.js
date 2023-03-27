import React from "react";
import { Avatar, Button, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Josh!";
const bio1 = "A frontend developer";
const bio2 = "specialised in HTML, CSS, Bootstrap, JavaScript and React.";
const photo = {
    getImageSrc: () => require("../images/photo1.png"),
};

const LandingSection = () => ( <
    FullScreenSection justifyContent = "center"
    alignItems = "center"
    isDarkBackground backgroundColor = "#2A4365" >
    <
    VStack spacing = "6" >
    <
    Avatar size = "2xl"
    name = "Josh"
    src = { photo.getImageSrc() }
    />{" "} <
    Heading size = "sm"
    color = "white" > { " " } { greeting } { " " } <
    /Heading>{" "} <
    Heading size = "2xl"
    color = "white" > { " " } { bio1 } { " " } <
    /Heading>{" "} <
    Heading size = "lg"
    color = "white" > { " " } { bio2 } { " " } <
    /Heading>{" "} <
    Heading > { " " } <
    a href = "mailto:xpdigita@gmail.com" > { " " } <
    Button backgroundColor = "green"
    colorScheme = "purple" >
    Contact Me { " " } <
    /Button>{" "} <
    /a>{" "} <
    /Heading>{" "} <
    /VStack>{" "} <
    /FullScreenSection>
);

export default LandingSection;