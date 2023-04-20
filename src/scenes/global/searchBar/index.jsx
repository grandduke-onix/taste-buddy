import React, { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../../theme";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import { keyframes } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SearchBar = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const firstThreshold = useMediaQuery("(min-width:850px)");
	const theme = useTheme();
	const color = themeSettings(theme.palette.mode);
	const [buttonClick, setButtonClick] = useState(false);

	// console.log(firstThreshold);

	return (
		<Box>
			{/* Search Button */}
			<Box
				margin={"auto"}
				width={!firstThreshold ? "400px" : "720px"}
				backgroundColor={"transaparent"}
				pt={buttonClick === true ? "0" : "20px"}
				display={!isNonMobile ? "none" : "flex"}
				justifyContent={"center"}
			>
				<button
					style={{
						background: "transparent",
						outline: "none",
						border: 0,
						width: "600px",
					}}
					onClick={() => setButtonClick(true)}
				>
					<Box
						backgroundColor={color.palette.surface.mainVariant}
						color={color.palette.onBackground.main}
						width={"auto"}
						height={"56px"}
						padding={"16px"}
						gap={"16px"}
						borderRadius={"24px"}
						display={"flex"}
						alignItems={"center"}
						position={buttonClick === true ? "absolute" : "none"}
						visibility={buttonClick === true ? "hidden" : "visible"}
						zIndex={1}
						boxShadow={
							"4.4px 12.5px 10px rgba(0, 0, 0, 0.035), 35px 100px 80px rgba(0, 0, 0, 0.07)"
						}
						sx={{
							":hover": {
								transform: "translateY(-1px)",
								cursor: "pointer",
								boxShadow:
									"1.1px 2.8px 2.2px rgba(0, 0, 0, 0.02), 2.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 5px 12.5px 10px rgba(0, 0, 0, 0.035), 8.9px 22.3px 17.9px rgba(0, 0, 0, 0.042), 16.7px 41.8px 33.4px rgba(0, 0, 0, 0.05), 40px 100px 80px rgba(0, 0, 0, 0.07)",
							},
						}}
					>
						<SearchIcon fontSize="large" />
						<Typography variant="h3">Search through thousands of recipes </Typography>
					</Box>
				</button>
			</Box>

			{/* Search bar on MOBILE SCREENS */}
			<Box
				display={isNonMobile ? "none" : "flex"}
				flexDirection={"row-reverse"}
				backgroundColor={color.palette.background.main}
				height={"64px"}
				width={"100%"}
				alignItems={"center"}
				justifyContent={"space-between"}
				position={"fixed"}
				zIndex={1000}
				paddingRight={"30px"}
			>
				<IconButton onClick={() => setButtonClick(true)}>
					<SearchIcon sx={{ color: color.palette.onBackground.main }} fontSize="large" />
				</IconButton>
				<Typography variant="h3" color={color.palette.onBackground.main}>
					Taste Buddies
				</Typography>
				<IconButton>
					<MenuIcon sx={{ color: color.palette.onBackground.main }} fontSize="large" />
				</IconButton>
			</Box>

			{/* overlay */}
			<Box
				position={"fixed"}
				backgroundColor={"rgba(0, 0, 0, 0.4)"}
				top={0}
				left={0}
				right={0}
				bottom={0}
				zIndex={"1"}
				onClick={() => setButtonClick(false)}
				display={buttonClick === true ? "block" : "none"}
			></Box>

			{/* The Search Form */}
			<Box
				position={"fixed"}
				zIndex={2}
				width={"90%"}
				height={"450px"}
				backgroundColor={color.palette.surface.mainVariant}
				borderRadius={"16px"}
				sx={{
					display: buttonClick === true ? "block" : "none",
					animation: `${animate} 400ms ${theme.transitions.easing.easeInOut}`,
				}}
			>
				{/* The Search Bar */}
				<Box pt={"20px"} display={"flex"} justifyContent={"center"} width={"100%"}>
					<Box
						width={"700px"}
						height={"56px"}
						display={"flex"}
						gap={"16px"}
						alignItems={"center"}
						borderBottom={`solid ${color.palette.onBackground.main}`}
					>
						<IconButton onClick={() => setButtonClick(false)}>
							<ArrowBackIcon />
						</IconButton>
						<input
							type="text"
							placeholder="Search Recipes"
							style={{
								width: "100%",
								background: "transparent",
								outline: "none",
								border: 0,
								fontSize: color.typography.h3.fontSize,
								color: color.palette.onBackground.main,
							}}
						/>
						<IconButton>
							<ClearIcon />
						</IconButton>
						<Box />
					</Box>
				</Box>

				<Box
					width={"800px"}
					margin={"auto"}
					pt={"40px"}
					height={"200px"}
					px={isNonMobile ? 0 : "20px"}
				>
					<Typography variant="h4" color={color.palette.onBackground.main}>
						Recent Searches:{" "}
					</Typography>
				</Box>
				<Box width={"800px"} margin={"auto"} px={isNonMobile ? 0 : "20px"}>
					<Typography variant="h3" color={color.palette.onBackground.main}>
						Find recipes you can make right now
					</Typography>
					<Typography variant="h4" color={color.palette.onBackground.main} mt={"16px"}>
						Get inspired by the ingredients you have at home today
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default SearchBar;
