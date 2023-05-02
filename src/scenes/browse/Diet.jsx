import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../theme";
import { dietTypes } from "../../components/browsePortal/browseRecipes";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const DietCard = function (props) {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box
			component={Link}
			to={`${props.name}`}
			color={color.palette.onSurfaceVariant.main}
			borderBottom={`solid ${color.palette.outline.main}`}
			height={isNonMobile ? "400px" : "150px"}
			width={isNonMobile ? "300px" : "100%"}
			borderRadius={"12px"}
			display={"flex"}
			flexDirection={isNonMobile ? "column" : "row"}
			overflow={"hidden"}
			justify-content={"center"}
			align-items={"center"}
			sx={{
				textDecoration: "none",
				cursor: "pointer",
				":hover": {
					backgroundColor: color.palette.surface.mainVariant,
					color: color.palette.primary.main,
					transition: "all .3s",
				},
			}}
		>
			<Box
				height={isNonMobile ? "50%" : "100%"}
				width={isNonMobile ? "100%" : "40%"}
				overflow={"hidden"}
				display={"flex"}
				justify-content={"center"}
				align-items={"center"}
			>
				<img
					src={props.pic}
					alt=""
					style={{
						width: "100%",
						height: "100%",
						flexShrink: 0,
						objectFit: "cover",
					}}
				/>
			</Box>
			<Box px={"16px"} pb={"16px"} width={isNonMobile ? "100%" : "60%"} height={"40%"}>
				<Typography
					variant={isNonMobile ? "h2" : "h3"}
					fontSize={isNonMobile && "30px"}
					pt={"8px"}
					fontWeight={700}
				>
					{props.name.charAt(0).toUpperCase() + props.name.slice(1)}
				</Typography>
				<Typography
					variant={isNonMobile ? "h3" : "h4"}
					fontSize={isNonMobile ? "16px" : "12px"}
					sx={{ pt: "10px" }}
				>
					{props.description}
				</Typography>
			</Box>
			<Box
				display={isNonMobile ? "none" : "flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<KeyboardArrowRightIcon fontSize="large" />
			</Box>
		</Box>
	);
};

const Diet = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box px={isNonMobile && "70px"} color={color.palette.onSurface.main}>
			<Typography variant={isNonMobile ? "h1" : "h2"} fontWeight={700}>
				Diets
			</Typography>
			<Typography variant={isNonMobile ? "h3" : "h4"} pt={"20px"}>
				Following special diets limit what you can eat, but it doesn't limit what you can
				make! Healthy eating means something different for everyone and that means we all
				get different meal plans. Gluten-free or vegan, diabetic or paleo, taste-buddy makes
				meal-planning effortless for any type of special diet.
			</Typography>

			<Typography variant={isNonMobile ? "h3" : "h4"} pt={"20px"}>
				Everybody needs to eat, and everybody needs to eat calories, fat, protein,
				carbohydrates, etc. How much and which foods you eat to meet these requirements
				depends on which diet you're following. Which diet is best for you is going to
				depend on numerous factors: your taste preferences, physical needs, food
				intolerances, even ethical beliefs. Moreover, the best diet for health may be
				different than the best diet for weight loss or muscle gain. Since it can be
				difficult to decide, let's take a look at many of the most popular diets.
			</Typography>

			<Box pt={isNonMobile ? "70px" : "35px"}>
				<Typography variant={isNonMobile ? "h2" : "h3"}>Types of diets</Typography>

				<Box
					pt={isNonMobile ? "50px" : "25px"}
					display={"flex"}
					gap={"20px"}
					flexWrap={"wrap"}
					justifyContent={"center"}
				>
					{dietTypes.map(i => (
						<DietCard
							key={i.name}
							to={i.name}
							pic={i.pic}
							name={i.name}
							description={i.description}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Diet;
