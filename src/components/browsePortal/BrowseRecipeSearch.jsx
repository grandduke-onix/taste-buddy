import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { themeSettings } from "../../theme";
import { recipeType } from "./browseRecipes";
import { APIKEY } from "../../configure";
import RecipeCard from "../RecipeCard";
import { RecipeLoader, RouteChangeAnimation } from "../Loader";
import Footer from "../../scenes/global/Footer";
import GeneralButton from "../GeneralButton";

const BrowseRecipesSearch = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const params = useParams();
	const [recipeData, setRecipeData] = useState(null);
	const [newRecipeData, setNewRecipeData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [offsetCount, setOffsetCount] = useState(10);
	const [recipeCount, setRecipeCount] = useState();

	const cuisineSearch = async function () {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?number=10&addRecipeInformation=true&${params.search}=${params.parameter}&apiKey=${APIKEY}`
		);
		const responseData = await response.json();
		setRecipeData(responseData);
	};

	// This api is called when the user clicks the "load more" button
	const apiReCall = async function () {
		setIsLoading(true);
		const response = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?number=10&addRecipeInformation=true&${params.search}=${params.parameter}&offset=${offsetCount}&apiKey=${APIKEY}`
		);
		const rawData = await response.json();
		const responseData = rawData.results;
		setNewRecipeData(newData => [...newData, ...responseData]);
		setIsLoading(false);
		setOffsetCount(prev => prev + 10);
		setRecipeCount(newRecipeData.length + 10);
	};

	// console.log(recipeData.totalResults);
	console.log(recipeCount);
	// console.log(!recipeCount >= recipeData.totalResults);

	useEffect(() => {
		cuisineSearch();
	}, [params.search, params.parameter]);

	// this returns the specific cuisine description for each respective cuisine
	const cuisineExplanation = recipeType.filter(i => {
		if (i.name === params.parameter) {
			return i;
		}
	});

	return (
		<Box>
			{/* for lazy loading */}
			{recipeData ? (
				<Box>
					<Box
						height={"auto"}
						display={"flex"}
						gap={"50px"}
						p={"50px"}
						px={isNonMobile && "70px"}
					>
						<Box
							backgroundColor="aqua"
							height={"150px"}
							width={"150px"}
							borderRadius={"100%"}
						>
							image
						</Box>
						<Box
							display={"flex"}
							gap={"10px"}
							flexDirection={"column"}
							justifyContent={"center"}
						>
							<Box
								display={"flex"}
								gap={"10px"}
								color={color.palette.onSurfaceVariant.main}
							>
								<Typography variant="h4">maga</Typography> /{" "}
								<Typography variant="h4">baga</Typography>
							</Box>
							<Typography
								variant={isNonMobile ? "h2" : "h3"}
								fontWeight={900}
								color={color.palette.onSurface.main}
							>
								{params.parameter.toUpperCase()}
							</Typography>
						</Box>
					</Box>

					{/* Body */}
					<Box pt={"50px"}>
						<Box px={isNonMobile && "70px"}>
							<Typography variant={isNonMobile ? "h3" : "h4"}>
								{cuisineExplanation[0].explain1}
							</Typography>
							<Typography variant={isNonMobile ? "h3" : "h4"} sx={{ pt: "20px" }}>
								{cuisineExplanation[0].explain2}
							</Typography>
						</Box>

						<Box pt={"100px"}>
							<Typography
								variant={isNonMobile ? "h2" : "h3"}
								sx={{ pl: isNonMobile && "25px" }}
							>
								Feed your {params.parameter} curiosity:
							</Typography>
							<Box
								pt={"50px"}
								display={"flex"}
								flexWrap={"wrap"}
								alignItems={"center"}
								justifyContent={"center"}
								flex={isNonMobile ? "auto" : "100%"}
							>
								{/* <RecipeCard /> */}
								{recipeData.results.map(recipe => (
									<RecipeCard
										key={recipe.id}
										recipeId={recipe.id}
										image={recipe.image}
										name={recipe.title}
										author={recipe.sourceName}
										time={recipe.readyInMinutes}
										plateAmount={recipe.servings}
										diet={
											isNonMobile
												? recipe.diets.join(", ")
												: `${recipe.diets.slice(0, 2).join(", ")}...`
										}
										cuisines={recipe.cuisines.join(", ")}
									/>
								))}

								{/* to load more recipes on button click */}
								{newRecipeData.map(recipe => (
									<RecipeCard
										key={recipe.id}
										recipeId={recipe.id}
										image={recipe.image}
										name={recipe.title}
										author={recipe.sourceName}
										time={recipe.readyInMinutes}
										plateAmount={recipe.servings}
										diet={
											isNonMobile
												? recipe.diets.join(", ")
												: `${recipe.diets.slice(0, 2).join(", ")}...`
										}
										cuisines={recipe.cuisines.join(", ")}
									/>
								))}
							</Box>
						</Box>
						{isLoading && <RecipeLoader />}
						<p>bull</p>
						{/* {recipeCount >= recipeData.totalResults ? <p>yes</p> : null} */}
						{/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
							{errorLoading && errorMessage && (
								<Typography variant="h3" textAlign={"center"}>
									{errorMessage}
								</Typography>
							)}
						</Box> */}

						<Box
							display={isNonMobile ? "flex" : "null"}
							alignItems={"center"}
							justifyContent={"center"}
							py={"50px"}
							px={isNonMobile ? 0 : "20px"}
						>
							{!isLoading && (
								<GeneralButton action={apiReCall}>Load more...</GeneralButton>
							)}
						</Box>
					</Box>
					<Footer />
				</Box>
			) : (
				<RouteChangeAnimation />
			)}
		</Box>
	);
};

export default BrowseRecipesSearch;
