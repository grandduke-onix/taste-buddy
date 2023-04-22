import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../theme";
import Navbar from "./navbar";
import SearchBar from "./searchBar";
import { Outlet } from "react-router-dom";

const Global = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box
			backgroundColor={color.palette.background.main}
			display={"flex"}
			flexDirection={!isNonMobile ? "column-reverse" : "row"}
			height={"100%"}
			width={"100%"}
		>
			<Navbar />
			<main className="content">
				<SearchBar />
				<Box p={"0 20px"} pt={isNonMobile ? "40px" : "80px"}>
					<Outlet />
				</Box>
			</main>
		</Box>
	);
};

export default Global;
