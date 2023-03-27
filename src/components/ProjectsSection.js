import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [{
        title: "News-Hompage",
        description: "Handy homepage belt to create a simple but amazing grid layout for a newspage, w" +
            "ith a little text animation",
        getImageSrc: () => require("../images/photo11.png"),
        url: "https://oke2022.github.io/news-homepage-main/",
    },
    {
        title: "Textile-Shop",
        description: "A One-stop shop for people who wants to design for an event or gift their loved " +
            "ones something special",
        getImageSrc: () => require("../images/photo22.png"),
        url: "https://oke2022.github.io/Afriktex/",
    },
    {
        title: "Tutorial-web",
        description: "A video tutorial website that integerate youtube video and a signup page for new" +
            "sletter follow up",
        getImageSrc: () => require("../images/photo33.png"),
        url: "https://oke2022.github.io/okejoshua/",
    },
    {
        title: "Qr-Code",
        description: "A responsive qr-code built to all screen size. It can be use for payment when sh" +
            "opping",
        getImageSrc: () => require("../images/photo44.png"),
        url: "https://oke2022.github.io/qr-code-challenge/",
    },
];

const ProjectsSection = () => {
    return ( <
        FullScreenSection backgroundColor = "#14532d"
        isDarkBackground p = { 8 }
        alignItems = "flex-start"
        spacing = { 8 } >
        { " " } <
        Heading as = "h1"
        id = "projects-section" > { " " }
        Featured Projects { " " } <
        /Heading>{" "} <
        Box display = "grid"
        gridTemplateColumns = "repeat(2,minmax(0,1fr))"
        gridGap = { 8 } >
        { " " } {
            projects.map((project) => ( <
                Card key = { project.title }
                title = { project.title }
                description = { project.description }
                imageSrc = { project.getImageSrc() }
                url = { project.url }
                />
            ))
        } { " " } <
        /Box>{" "} <
        /FullScreenSection>
    );
};

export default ProjectsSection;