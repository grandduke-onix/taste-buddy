import React, { useState } from "react";
import Hero from "./Hero";
import { Box, Typography, useMediaQuery } from "@mui/material";
import About from "./About";
import RecipeCard from "../../components/RecipeCard";
import { APIKEY } from "../../configure";
import { useLoaderData, useNavigation } from "react-router-dom";
import { RecipeLoader } from "../../components/Loader";
import GeneralButton from "../../components/GeneralButton";

const MyFeed = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const navigation = useNavigation();
	const data = useLoaderData();
	const recipes = data.recipes;
	const [newRecipes, setNewRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorLoading, setErrorLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("Unable to fetch recipes 😥");

	// This function is called on button click to load more recipes
	const apiReCall = async function () {
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://api.spoonacular.com/recipes/random?number=10&addRecipeInformation=true&apiKey=${APIKEY}`
			);
			const data = await response.json();
			const loadedData = data.recipes;
			// console.log(loadedData);
			//Add the new data to the previous data on button click
			setNewRecipes(prevData => [...prevData, ...loadedData]);
			setIsLoading(false);
			setErrorLoading(false);
		} catch {
			setErrorMessage("Unable to fetch recipes😥, please check your connection");
			setIsLoading(false);
			setErrorLoading(true);
		}
	};

	return (
		<Box>
			<Hero />
			<About />
			<Typography
				mx={isNonMobile ? "70px" : "20px"}
				mt={isNonMobile ? "200px" : "100px"}
				variant={isNonMobile ? "h2" : "h3"}
				fontWeight={700}
			>
				Just for you:
			</Typography>
			<Box
				display={"flex"}
				flexWrap={"wrap"}
				alignItems={"center"}
				justifyContent={"center"}
				flex={isNonMobile ? "auto" : "100%"}
			>
				{/* <Card /> */}
				{navigation.state === "loading" && <RecipeLoader />}
				{recipes.map(recipe => (
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

				{/* Load new recipe cards on button click */}
				{newRecipes.map(recipe => (
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
			{isLoading && <RecipeLoader />}
			<Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
				{errorLoading && errorMessage && (
					<Typography variant="h3" textAlign={"center"}>
						{errorMessage}
					</Typography>
				)}
			</Box>

			<Box
				display={isNonMobile ? "flex" : "null"}
				alignItems={"center"}
				justifyContent={"center"}
				py={"50px"}
				px={isNonMobile ? 0 : "20px"}
			>
				<GeneralButton action={apiReCall} text="Load more..." />
			</Box>
		</Box>
	);
};

export default MyFeed;

export const loader = async function () {
	const response = await fetch(
		`https://api.spoonacular.com/recipes/random?number=10&addRecipeInformation=true&apiKey=${APIKEY}`
	);
	if (!response.ok) {
		throw new Response(JSON.stringify({ message: "Could not fetch recipes" }), { status: 402 });
	} else {
		return response;
	}
};
