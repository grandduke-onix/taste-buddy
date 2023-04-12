import React from "react";
import { Box, Divider, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NoImage = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	return (
		<Box
			width={"100%"}
			height={"100%"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
			color={color.palette.onBackground.main}
			border={`solid ${color.palette.outline.main}`}
		>
			<ErrorOutlineIcon sx={{ fontSize: "100px" }} />
			<Typography variant="h2">No Image</Typography>
		</Box>
	);
};

const RecipeCard = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box
			flex={isNonMobile ? null : "40%"}
			component={Link}
			to={`/recipe-details/${props.recipeId}`}
			display={"flex"}
			flexDirection={"column"}
			my={isNonMobile ? "30px" : "10px"}
			mx={isNonMobile ? "15px" : "5px"}
			// height={"450px"}
			// height={isNonMobile ? "450px" : "auto"}
			height={isNonMobile ? "450px" : "300px"}
			// width={"300px"}
			width={isNonMobile ? "300px" : "170px"}
			backgroundColor={color.palette.surface.mainVariant}
			color={color.palette.onSurface.main}
			borderRadius={"12px"}
			overflow={"hidden"}
			sx={{
				boxShadow: 0,
				transition: "box-shadow .2s ease-out",
				":hover": { boxShadow: "1px 3px 6px -1px rgba(0,0,0,0.75)" },
				cursor: "pointer",
				textDecoration: "none",
			}}
		>
			<Box
				height={"300px"}
				borderRadius={"0 0 15px 15px"}
				overflow={"hidden"}
				display={"flex"}
				justify-content={"center"}
				align-items={"center"}
			>
				{props.image ? (
					<img
						src={props.image}
						alt="product pic"
						style={{
							objectFit: "fill",
							flexShrink: 0,
							minWidth: "100%",
							minHeight: "100%",
						}}
					/>
				) : (
					<NoImage />
				)}
			</Box>
			<Box mt={"15px"} px={isNonMobile ? "16px" : "8px"}>
				<Typography
					variant="h3"
					fontFamily={"Abril fatface"}
					fontSize={isNonMobile ? null : "15px"}
				>
					{props.name}
				</Typography>

				{isNonMobile ? (
					<Typography variant="h4" pt={"10px"} fontWeight={300}>
						{props.author}
					</Typography>
				) : null}

				{isNonMobile ? (
					<Typography variant="h4" fontWeight={300}>
						Cuisine:{" "}
						{props.cuisines ? (
							<span style={{ fontWeight: "normal" }}>{props.cuisines}</span>
						) : (
							"Unavailable"
						)}
					</Typography>
				) : null}

				<Typography variant="h4" pt={"10px"} fontWeight={300}>
					Diet:{" "}
					{props.diet ? (
						<span style={{ fontWeight: "normal" }}>{props.diet}</span>
					) : (
						"Unavailable"
					)}
				</Typography>

				<Box
					pt={"10px"}
					mb={"20px"}
					display={"flex"}
					flexGrow={1}
					justifyContent={"space-between"}
					alignItems={"center"}
					height={"40px"}
				>
					<Box display={"flex"} alignItems={"center"} gap={"7px"}>
						<AccessTimeIcon fontSize="medium" />{" "}
						<Typography variant="h4" fontSize={"10px"}>
							{props.time}'
						</Typography>
					</Box>
					<Divider
						orientation="vertical"
						sx={{ borderRightWidth: 2, borderColor: color.palette.onSurface.main }}
					/>
					<Box display={"flex"} alignItems={"center"} gap={"7px"}>
						<OutdoorGrillIcon fontSize="medium" />{" "}
						<Typography variant="h4" fontSize={"10px"}>
							{props.plateAmount} serving(s)
						</Typography>
					</Box>
					<Divider
						orientation="vertical"
						sx={{ borderRightWidth: 2, borderColor: color.palette.onSurface.main }}
					/>
					<Box display={"flex"} alignItems={"center"} gap={"7px"}>
						<IconButton>
							<ShoppingCartIcon fontSize="medium" />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default RecipeCard;
