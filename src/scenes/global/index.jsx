import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../theme";
import Navbar from "./navbar";
import SearchBar from "./searchBar";
import { Outlet, useNavigation } from "react-router-dom";

const Global = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const navigation = useNavigation();

	return (
		<Box
			backgroundColor={color.palette.background.main}
			display={"flex"}
			flexDirection={!isNonMobile ? "column-reverse" : "row"}
			height={"100%"}
			width={"100%"}
			// overflow={"scroll"}
		>
			<Navbar />
			<main className="content">
				<SearchBar />
				<Box pt={isNonMobile ? "40px" : "80px"}>
					<Outlet />
				</Box>
				{/* <Footer /> */}
			</main>
		</Box>
	);
};

export default Global;
