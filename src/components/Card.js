import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
    return ( <
        VStack alignItems = "flex-start"
        borderWidth = "1px"
        borderColor = "gray.200"
        borderRadius = "lg"
        overflow = "hidden"
        w = "100%" >
        { " " } <
        Image src = { imageSrc }
        w = "100%"
        h = "auto" / > { " " } <
        VStack p = { 4 }
        alignItems = "flex-start"
        spacing = { 2 } > { " " } <
        Heading as = "h3"
        size = "md" > { " " } { title } { " " } <
        /Heading>{" "} <
        Text > { description } < /Text>{" "} <
        HStack spacing = { 2 }
        fontWeight = "bold" > { " " } <
        a href = { url } > View Projects < /a>{" "} <
        FontAwesomeIcon icon = { faArrowRight }
        size = "1x" / > { " " } <
        /HStack>{" "} <
        /VStack>{" "} <
        /VStack>
    );
};

export default Card;