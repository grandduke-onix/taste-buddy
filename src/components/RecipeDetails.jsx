import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../configure";
import { themeSettings } from "../theme";

const RecipeIngredients = function (props) {
	return (
		<Box display={"flex"} gap={"10px"} width={"100%"} pt={"15px"}>
			<Typography variant="h3">
				{props.amount}
				{props.unit}
			</Typography>
			<Typography variant="h3">{props.name}</Typography>
		</Box>
	);
};

const RecipeDetails = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const { recipeId } = useParams();
	console.log(recipeId);
	const [recipeDetails, setRecipeDetails] = useState([]);

	const dataLoad = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${APIKEY}`
		);
		try {
			const responseData = await response.json();
			setRecipeDetails(responseData);
			console.log(responseData);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		dataLoad();
	}, [recipeId]);

	return (
		<Box display={"flex"}>
			<Box backgroundColor="aqua" flex={"1 0 60%"} height={"500px"}></Box>
			<Box backgroundColor="pink" flex={"1 0 40%"} height={"auto"}>
				<Box>
					<Box
						height={"350px"}
						width={"100%"}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<img
							src={recipeDetails.image}
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
						{recipeDetails.extendedIngredients.map(i => (
							<RecipeIngredients
								amount={i.measures.metric.amount}
								unit={i.measures.metric.unitShort}
								name={i.name}
							/>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default RecipeDetails;
