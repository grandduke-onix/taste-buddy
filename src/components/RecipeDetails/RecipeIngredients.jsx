import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../theme";

const RecipeIngredients = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box color={color.palette.onSurface.main}>
			<Box
				height={"350px"}
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				backgroundColor="red"
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
			<Box m={"30px"}>
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
			</Box>
		</Box>
	);
};

export default RecipeIngredients;
