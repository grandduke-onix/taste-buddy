import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../theme";
import { useRouteError } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import GeneralButton from "./GeneralButton";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const ErrorPage = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const error = useRouteError();
	const isNonMobile = useMediaQuery("(min-width:600px)");

	let title = "An error occured";
	let subTitle = "Something went wrong";

	if (error.status === 404) {
		title = "Not Found";
		subTitle = "Could not find resource or page";
	}

	if (error.status === 500) {
		subTitle = JSON.parse(error.data).message;
	}

	return (
		<Box backgroundColor={color.palette.surface.main} height={"100%"} width={"100%"}>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				gap={isNonMobile ? "50px" : "10px"}
				flexDirection={isNonMobile ? "row" : "column-reverse"}
			>
				<Box color={color.palette.onBackground.main}>
					<Typography variant="h1" textAlign={"center"}>
						{error.status}
					</Typography>
					<Typography variant="h2" textAlign={"center"}>
						{title}
					</Typography>
					<Typography variant="h3" textAlign={"center"}>
						{subTitle}
					</Typography>

					<Box mt={"30px"} display={"flex"} gap={"10px"}>
						<GeneralButton text="Go Home" outline router to="/" />
						<GeneralButton text="Go Back" router to=".." />
					</Box>
				</Box>
				<Box>
					<lord-icon
						src="https://cdn.lordicon.com/tdrtiskw.json"
						trigger="loop"
						delay="2000"
						colors={`primary:${color.palette.onBackground.main},secondary:${color.palette.primary.main}`}
						scale="55"
						state="hover-1"
						style={{
							width: isNonMobile ? "500px" : "300px",
							height: isNonMobile ? "600px" : "400px",
						}}
					></lord-icon>
				</Box>
			</Box>
		</Box>
	);
};

export default ErrorPage;
