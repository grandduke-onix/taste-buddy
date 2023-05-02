import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { themeSettings } from "../../theme";
import { recipeType, dietTypes } from "./browseRecipes";
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
	const [isLoading, setIsLoading] = useState(false); //detects whether data has been loaded from api
	const [offsetCount, setOffsetCount] = useState(0); //calculates the offset parameter for each time the load more button is clicked
	const [recipeCount, setRecipeCount] = useState(); //calculates whether there is still any recipe available for each cuisine

	const getApi = () =>
		`https://api.spoonacular.com/recipes/complexSearch?number=10&addRecipeInformation=true&${params.search}=${params.parameter}&offset=${offsetCount}&apiKey=${APIKEY}`;

	// console.log(params);
	const cuisineSearch = async function () {
		const response = await fetch(getApi());
		const responseData = await response.json();
		setRecipeData(responseData);
	};

	// This api is called when the user clicks the "load more" button
	const apiReCall = async function () {
		setIsLoading(true);
		const response = await fetch(getApi());
		const rawData = await response.json();
		const responseData = rawData.results;
		setNewRecipeData(newData => [...newData, ...responseData]);
		setIsLoading(false);
		setOffsetCount(prev => prev + 10);
		setRecipeCount(newRecipeData.length + 10);
	};

	useEffect(() => {
		cuisineSearch();
	}, [params.search, params.parameter]);

	// this returns the specific data description for each respective recipe search
	const egg = search => {
		if (search === "diet") return dietTypes;
		if (search === "cuisine") return recipeType;
	};
	const cuisineExplanation = egg(params.search).filter(i => {
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
						flexDirection={isNonMobile ? "row" : "column"}
						gap={"50px"}
						p={"50px"}
						px={isNonMobile && "70px"}
						alignItems={"center"}
					>
						<Box
							backgroundColor="aqua"
							height={"200px"}
							width={"200px"}
							borderRadius={"100%"}
							overflow={"hidden"}
						>
							<img
								src={cuisineExplanation[0].pic}
								alt=""
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
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
								variant={isNonMobile ? "h2" : "h2"}
								fontWeight={900}
								color={color.palette.onSurface.main}
							>
								{params.parameter.toUpperCase()}
							</Typography>
						</Box>
					</Box>

					{/* Body */}
					<Box pt={"50px"}>
						<Box px={isNonMobile && "70px"} color={color.palette.onSurface.main}>
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
								color={color.palette.onSurface.main}
								fontWeight={700}
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

						<Box
							display={recipeCount >= recipeData.totalResults ? null : "none"}
							pb={"50px"}
						>
							<Typography
								color={color.palette.tertiary.main}
								fontWeight={700}
								variant="h2"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								No more recipes...
							</Typography>
						</Box>

						<Box display={recipeCount >= recipeData.totalResults && "none"}>
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
