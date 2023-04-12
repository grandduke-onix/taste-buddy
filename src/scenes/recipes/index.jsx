import React from "react";
import GeneralButton from "../../components/GeneralButton";
import { Box } from "@mui/material";

const MyRecipes = function () {
	return (
		<div>
			You are on MyRecipes
			<Box width={"100%"}>
				<GeneralButton color="aqua" text="click me" />
			</Box>
		</div>
	);
};

export default MyRecipes;
