import React, { useContext, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext, themeSettings } from "../theme";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const ColorMode = function () {
	const colorMode = useContext(ColorModeContext);
	const [hovered, setHovered] = useState(false);
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box
			backgroundColor={color.palette.surface.main}
			color={color.palette.primary.main}
			height={isNonMobile ? "60px" : "40px"}
			width={isNonMobile ? "60px" : "40px"}
			p={0}
			borderRadius={"50%"}
			border={"solid"}
			borderColor={color.palette.outline.main}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			onClick={colorMode.toggleColorMode}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			sx={{
				cursor: "pointer",
				":hover": { backgroundColor: color.palette.outline.main },
			}}
		>
			{/* Display light or darkmode icons bases on current mode */}
			{color.palette.mode === "light" ? (
				<Box>
					{/* On hover change icon from outlined to filled */}
					{hovered ? (
						<DarkModeIcon fontSize={isNonMobile ? "large" : "medium"} />
					) : (
						<DarkModeOutlinedIcon fontSize={isNonMobile ? "large" : "medium"} />
					)}
				</Box>
			) : (
				<Box>
					{/* On hover change icon from outlined to filled */}
					{hovered ? (
						<LightModeIcon fontSize={isNonMobile ? "large" : "medium"} />
					) : (
						<LightModeOutlinedIcon fontSize={isNonMobile ? "large" : "medium"} />
					)}
				</Box>
			)}
		</Box>
	);
};

export default ColorMode;
