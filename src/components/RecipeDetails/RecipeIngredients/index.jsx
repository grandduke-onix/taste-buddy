import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../../theme";
import Ingredients from "./Ingredients";

const RecipeIngredients = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box color={color.palette.onSurface.main}>
			<Box
				height={"350px"}
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				borderRadius={"15px"}
				overflow={"hidden"}
			>
				<img
					src={props.image}
					alt="recipe image"
					style={{
						height: "100%",
						width: "100%",
						flexShrink: 0,
						objectFit: "fill",
					}}
				/>
			</Box>
			{/* To display the recipe ingredients */}
			<Box display={!isNonMobile && "none"}>
				<Ingredients ingredients={props.ingredients} />
			</Box>
			{/* <Box m={"30px"} display={!isNonMobile && "none"}>
				{props.ingredients.map(i => (
					<Box
						display={"flex"}
						gap={"10px"}
						width={"100%"}
						pt={"15px"}
						key={`${i}-${i.name}`}
					>
						<Typography variant="h3" fontWeight={900}>
							{i.amount ? i.amount : null} {i.unit ? i.unit : null}
						</Typography>
						<Typography variant="h3">{i.name}</Typography>
					</Box>
				))}
			</Box> */}
		</Box>
	);
};

export default RecipeIngredients;
