import React from "react";
import { Box, Divider, List, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../../theme";
import ColorMode from "../../../components/ColorMode";
import ButtonElement from "./ButtonElement";
import { useLocation } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Navbar = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const location = useLocation().pathname.split("/")[1];

	return (
		<Box
			backgroundColor={color.palette.surface.main}
			height={isNonMobile ? "100%" : "100px"}
			// pt={isNonMobile ? "12px" : 0}
			pt={"12px"}
			pb={"16px"}
			width={isNonMobile ? "80px" : "100%"}
			display={"flex"}
			flexDirection={isNonMobile ? "column" : "row"}
			justifyContent={"space-between"}
			borderRadius={isNonMobile ? "0 16px 16px 0" : "16px 16px 0 0"}
			position={!isNonMobile && "fixed"} //fix the navbar to the bottom in mobile screens
			zIndex={!isNonMobile && 900}
		>
			<List
				sx={{
					width: "100%",
					height: "70%",
					display: "flex",
					margin: "auto",
					flexDirection: isNonMobile ? "column" : "row",
					justifyContent: isNonMobile ? "space-between" : "space-around",
					overflow: isNonMobile ? "auto" : "visible",
					py: "12px",
				}}
			>
				<ButtonElement
					link={""}
					text="My Feed"
					activeIcon={
						<lord-icon
							src="https://cdn.lordicon.com/qvbrkejx.json"
							trigger={"click"}
							state="hover"
							colors={`primary:${
								location === ""
									? color.palette.onSecondaryContainer.main
									: color.palette.onSurfaceVariant.main
							}`}
							stroke="100"
						/>
					}
					currentLocation={location === "" ? true : false}
					toolTip="Search Feed"
				/>
				<ButtonElement
					link={"browse"}
					text="Browse"
					activeIcon={
						<lord-icon
							src="https://cdn.lordicon.com/xfftupfv.json"
							trigger="click"
							colors={`primary:${
								location === "browse"
									? color.palette.onSecondaryContainer.main
									: color.palette.onSurfaceVariant.main
							}`}
							state="hover"
						/>
					}
					currentLocation={location === "browse" ? true : false}
					toolTip="Browse and discover new recipes "
				/>
				<ButtonElement
					link={"guided-recipes"}
					text="Guide"
					activeIcon={
						<lord-icon
							src="https://cdn.lordicon.com/pkmkagva.json"
							trigger="click"
							colors={`primary:${
								location === "guided-recipes"
									? color.palette.onSecondaryContainer.main
									: color.palette.onSurfaceVariant.main
							}`}
							state="hover"
						/>
					}
					currentLocation={location === "guided-recipes" ? true : false}
					toolTip="Decide on what to eat"
				/>

				{isNonMobile ? (
					<Divider
						sx={{
							borderBottomWidth: "2px",
							backgroundColor: color.palette.onBackground.main,
						}}
					/>
				) : null}

				<ButtonElement
					link={"meal-planning"}
					text="Planning"
					activeIcon={
						<lord-icon
							src="https://cdn.lordicon.com/qtxqkhzr.json"
							trigger="click"
							colors={`primary:${
								location === "meal-planning"
									? color.palette.onSecondaryContainer.main
									: color.palette.onSurfaceVariant.main
							}`}
						/>
					}
					currentLocation={location === "meal-planning" ? true : false}
					toolTip="Schedule and plan your meals"
				/>
				<ButtonElement
					link={"restaurant-search"}
					text="Dines"
					activeIcon={
						<lord-icon
							src="https://cdn.lordicon.com/slduhdil.json"
							trigger="click"
							colors={`primary:${
								location === "restaurant-search"
									? color.palette.onSecondaryContainer.main
									: color.palette.onSurfaceVariant.main
							}`}
							state="hover-2"
						/>
					}
					currentLocation={location === "restaurant-search" ? true : false}
					toolTip="Search popular restaurants"
				/>
			</List>

			{isNonMobile ? (
				<Box
					display={"flex"}
					gap={"16px"}
					alignItems={"center"}
					justifyContent={"center"}
					p={0}
					height={"80px"}
					width={"100%"}
					backgroundColor={"inherit"}
					borderRadius={"25%"}
					color={color.palette.onPrimary.main}
				>
					<ColorMode />
				</Box>
			) : null}
		</Box>
	);
};

export default Navbar;
