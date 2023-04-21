import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { APIKEY } from "../../configure";
import { themeSettings } from "../../theme";
import RecipeSummary from "./RecipeSummary";
import RecipeIngredients from "./RecipeIngredients";
import NutritionInfo from "./NutritionInfo";
import RecipeInstructions from "./RecipeInstructions";
import { RouteChangeAnimation } from "../Loader";
import NutritionChart from "./nutrition_chart";
import Ingredients from "./RecipeIngredients/Ingredients";
import { Link as RouterLink } from "react-router-dom";

const RecipeDetails = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const [openModal, setOpenModal] = useState(false);
	const { recipeId } = useParams();
	const location = useLocation();
	console.log(location);
	const [recipeData, setRecipeData] = useState(null);
	const [similarRecipes, setSimilarRecipes] = useState(null);

	// console.log(recipeData.nutrition);

	const dataLoader = async function () {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${APIKEY}`
		);
		const responseJson = await response.json();
		setRecipeData(responseJson);
	};

	const getSimilarRecipes = async function () {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${APIKEY}`
		);
		const responseData = await response.json();
		setSimilarRecipes(responseData);
		console.log(similarRecipes);
	};

	useEffect(() => {
		// if (!location.pathname) {
		// 	window.scrollTo(0, 0);
		// }
		getSimilarRecipes();
		dataLoader();
	}, [recipeId]);

	return (
		<Box>
			{/* For lazy loading when changing the route */}
			{recipeData ? (
				<Box>
					<Box
						display={"flex"}
						flexDirection={isNonMobile ? "row" : "column-reverse"}
						gap={!isNonMobile && "20px"}
					>
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
							{/* Recipe ingredients for mobile view */}
							<Box display={isNonMobile && "none"}>
								<Ingredients ingredients={recipeData.extendedIngredients} />
							</Box>
							<RecipeInstructions
								instructions={recipeData.analyzedInstructions[0].steps}
							/>
						</Box>

						{/* Left hand side */}
						<Box
							backgroundColor={color.palette.surface.mainVariant}
							flex={"1 0 40%"}
							height={"auto"}
							borderRadius={"24px"}
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
					{/* Nutrition diagrams */}
					<NutritionChart recipeData={recipeData} />

					{similarRecipes && (
						<Box
							pt={"100px"}
							px={isNonMobile && "50px"}
							color={color.palette.onSurface.main}
						>
							<Typography variant={isNonMobile ? "h2" : "h3"}>
								Related Recipes:
							</Typography>
							{similarRecipes.map(i => (
								<Box
									key={i.id}
									px={"20px"}
									display={"flex"}
									flexDirection={"column"}
									color={color.palette.onSurface.main}
								>
									<Link
										component={RouterLink}
										to={`/recipe-details/${i.id}`}
										variant={isNonMobile ? "h3" : "h4"}
										underline="hover"
										color="inherit"
										sx={{
											pt: "15px",
											":hover": { color: color.palette.primary.main },
										}}
									>
										{i.title}
									</Link>
								</Box>
							))}
						</Box>
					)}
				</Box>
			) : (
				<RouteChangeAnimation />
			)}
		</Box>
	);
};

export default RecipeDetails;
