import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../../configure";
import { themeSettings } from "../../theme";
import RecipeSummary from "./RecipeSummary";
import RecipeIngredients from "./RecipeIngredients";
import NutritionInfo from "./NutritionInfo";
import RecipeInstructions from "./RecipeInstructions";
import { RouteChangeAnimation } from "../Loader";

const RecipeDetails = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const [openModal, setOpenModal] = useState(false);
	const { recipeId } = useParams();
	const [recipeData, setRecipeData] = useState(null);

	const dataLoader = async function () {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${APIKEY}`
		);
		const responseJson = await response.json();
		setRecipeData(responseJson);
	};

	useEffect(() => {
		dataLoader();
	}, [recipeId]);

	return (
		<Box>
			{/* For lazy loading when changing the route */}
			{recipeData ? (
				<Box>
					<Box display={"flex"}>
						{/* Right hand side */}
						<Box flex={"1 0 60%"} height={"auto"}>
							<RecipeSummary
								setOpenModal={setOpenModal}
								openModal={openModal}
								title={recipeData.title}
								author={recipeData.sourceName}
								summary={recipeData.summary}
								time={recipeData.readyInMinutes}
								yield={recipeData.servings}
								PPS={recipeData.pricePerServing}
								healthScore={recipeData.healthScore}
								tags={[
									...recipeData.cuisines,
									...recipeData.dishTypes,
									...recipeData.diets,
									...recipeData.occasions,
								]}
							/>
							<RecipeInstructions
								instructions={recipeData.analyzedInstructions[0].steps}
							/>
						</Box>

						{/* Left hand side */}
						<Box
							backgroundColor={color.palette.surface.mainVariant}
							flex={"1 0 40%"}
							height={"auto"}
						>
							<Box position={"sticky"} top={"3px"}>
								<RecipeIngredients
									image={recipeData.image}
									ingredients={recipeData.extendedIngredients}
								/>
							</Box>
						</Box>
						<NutritionInfo
							openModal={openModal}
							setOpenModal={setOpenModal}
							servings={recipeData.servings}
							nutrients={recipeData.nutrition.nutrients}
						/>
					</Box>

					<Box pt={"100px"} px={"50px"}>
						<Typography variant="h3">Related:</Typography>
					</Box>
				</Box>
			) : (
				<RouteChangeAnimation />
			)}
		</Box>
	);
};

export default RecipeDetails;
