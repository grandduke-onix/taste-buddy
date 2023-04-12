import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = function () {
	const params = useParams();

	return <Box>yes oh {params.recipeId}</Box>;
};

export default RecipeDetails;
