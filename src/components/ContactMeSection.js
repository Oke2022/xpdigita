import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: "",
        },
        onSubmit: (values, { resetForm }) => {
            submit(values)
                .then((response) => {
                    onOpen({
                        type: response.type,
                        message: `Thank you ${values.firstName}! We received your message.`,
                    });
                    resetForm();
                })
                .catch((error) => {
                    onOpen({
                        type: "error",
                        message: "An error occurred. Please try again later.",
                    });
                });
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            type: Yup.string().required("Type of enquiry is required"),
            comment: Yup.string().required("Message is required"),
        }),
    });

    const { touched, errors, getFieldProps, handleSubmit } = formik;

    return ( <
        FullScreenSection isDarkBackground backgroundColor = "#512DA8"
        py = { 16 }
        spacing = { 8 } >
        <
        VStack w = "1024px"
        p = { 32 }
        alignItems = "flex-start" >
        <
        Heading as = "h1"
        id = "contactme-section" >
        Contact me { " " } <
        /Heading>{" "} <
        Box p = { 6 }
        rounded = "md"
        w = "100%" >
        <
        form onSubmit = { handleSubmit } >
        <
        VStack spacing = { 4 } >
        <
        FormControl isInvalid = { touched.firstName && errors.firstName } >
        <
        FormLabel htmlFor = "firstName" > Name < /FormLabel>{" "} <
        Input {...getFieldProps("firstName") }
        id = "firstName"
        name = "firstName" /
        >
        <
        FormErrorMessage > { errors.firstName } < /FormErrorMessage>{" "} <
        /FormControl>{" "} <
        FormControl isInvalid = { touched.email && errors.email } >
        <
        FormLabel htmlFor = "email" > Email Address < /FormLabel>{" "} <
        Input {...getFieldProps("email") }
        id = "email"
        name = "email"
        type = "email" /
        >
        <
        FormErrorMessage > { errors.email } < /FormErrorMessage>{" "} <
        /FormControl>{" "} <
        FormControl isInvalid = { touched.type && errors.type } >
        <
        FormLabel htmlFor = "type" > Type of enquiry < /FormLabel>{" "} <
        Select {...getFieldProps("type") }
        id = "type"
        name = "type"
        placeholder = "Select an option" >
        <
        option value = "hireMe" > Freelance project proposal < /option>{" "} <
        option value = "openSource" >
        Open source consultancy session { " " } <
        /option>{" "} <
        option value = "other" > Other < /option>{" "} <
        /Select>{" "} <
        FormErrorMessage > { errors.type } < /FormErrorMessage>{" "} <
        /FormControl>{" "} <
        FormControl isInvalid = { touched.comment && errors.comment } >
        <
        FormLabel htmlFor = "comment" > Your message < /FormLabel>{" "} <
        Textarea {...getFieldProps("comment") }
        id = "comment"
        name = "comment"
        height = { 250 }
        />{" "} <
        FormErrorMessage > { errors.comment } < /FormErrorMessage>{" "} <
        /FormControl>{" "} <
        Button type = "submit"
        colorScheme = "purple"
        width = "full"
        isLoading = { isLoading } >
        Submit { " " } <
        /Button>{" "} <
        /VStack>{" "} <
        /form>{" "} <
        /Box>{" "} <
        /VStack>{" "} <
        /FullScreenSection>
    );
};

export default LandingSection;