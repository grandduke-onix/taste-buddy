import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../theme";
import { keyframes } from "@emotion/react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const animate = keyframes`
0% {
    transform: translate(0px, 0px) scaleX(1);
  }
  14% {
    transform: translate(-12px, -16px) scaleX(1.05);
  }
  28% {
    transform: translate(-27px, -28px) scaleX(1.07);
  }
  42% {
    transform: translate(-46px, -35px) scaleX(1.1);
  }
  57% {
    transform: translate(-70px, -37px) scaleX(1.1);
  }
  71% {
    transform: translate(-90px, -32px) scaleX(1.07);
  }
  85% {
    transform: translate(-105px, -22px) scaleX(1.05);
  }
  100% {
    transform: translate(-115px, -9px) scaleX(1);
  }
`;

const animate1 = keyframes`
0% {
    box-shadow: 0 -6px, -115px -8px;
  }
  25%, 75% {
    box-shadow: 0 0px, -115px -8px;
  }
  100% {
    box-shadow: 0 0px, -115px -16px;
  }
`;

export const RecipeLoader = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box display={"flex"} justifyContent={"center"}>
			<Box
				color={color.palette.onSurface.main}
				mt={"40px"}
				fontSize={"48px"}
				position={"relative"}
				display={"inline-block"}
				letterSpacing={"4px"}
				boxSizing={"border-box"}
				sx={{
					"&::before": {
						content: '""',
						position: "absolute",
						right: "66px",
						bottom: "17px",
						height: "28px",
						width: "5.15px",
						background: "currentColor",
						boxSizing: "border-box",
						animation: `${animate1} 1s linear infinite alternate`,
					},
					"&::after": {
						content: '""',
						width: "10px",
						height: "10px",
						position: "absolute",
						left: "117px",
						top: "10px",
						borderRadius: "50%",
						background: color.palette.primary.main,
						boxSizing: "border-box",
						animation: `${animate} 1s linear infinite alternate`,
					},
				}}
			>
				<Typography fontSize={"48px"}>Load&nbsp;ng</Typography>
			</Box>
		</Box>
	);
};

export const RouteChangeAnimation = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			flexDirection={"column"}
		>
			<lord-icon
				src="https://cdn.lordicon.com/fyhanzjw.json"
				trigger="loop"
				// delay="2000"
				colors={`primary:${color.palette.onBackground.main},secondary:${color.palette.primary.main}`}
				stroke="55"
				scale="100"
				axis-x="100"
				axis-y="95"
				style={{ width: isNonMobile ? "450px" : "300px", height: "450px" }}
			></lord-icon>

			<Typography variant="h1" color={color.palette.onBackground.main} fontWeight={900}>
				Loading...
			</Typography>
		</Box>
	);
};
