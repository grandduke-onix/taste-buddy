import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { APIKEY } from "../../configure";
import { themeSettings } from "../../theme";
import RecipeSummary from "./RecipeSummary";
import RecipeIngredients from "./RecipeIngredients";
import NutritionInfo from "./NutritionInfo";

// import { pathToRegexp, match, parse, compile } from "path-to-regexp";

// const bed = window.location;
// console.log(bed);
// const regexp = pathToRegexp("/:foo/:bar");
// // console.log(regexp);
// const egg = regexp.exec(bed.pathname);
// console.log(egg);

const RecipeDetails = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const [openModal, setOpenModal] = useState(false);
	const { recipeId } = useParams();
	// const recipeData = useLoaderData();
	// console.log(recipeData);
	console.log(openModal);
	return (
		<Box display={"flex"}>
			<Box flex={"1 0 60%"} height={"500px"}>
				<RecipeSummary setOpenModal={setOpenModal} openModal={openModal} />
			</Box>
			<Box
				backgroundColor={color.palette.surface.mainVariant}
				flex={"1 0 40%"}
				height={"auto"}
			>
				<RecipeIngredients />
			</Box>
			<NutritionInfo openModal={openModal} setOpenModal={setOpenModal} />
			{/* <Box height={"100px"} width={"100px"} backgroundColor={"aqua"}></Box> */}
		</Box>
	);
};

export default RecipeDetails;

export const loader = async function () {
	const response = await fetch(
		`https://api.spoonacular.com/recipes/646515/information?includeNutrition=true&apiKey=${APIKEY}`
	);
	if (!response.ok) {
		throw new Response(JSON.stringify({ message: "Could not fetch recipes" }), { status: 402 });
	} else {
		return response;
	}
};
