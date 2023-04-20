import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Ingredients = function (props) {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box mx={isNonMobile ? "30px" : 0} my={"30px"}>
			<Typography variant="h3">Ingredients:</Typography>
			{props.ingredients.map(i => (
				<Box
					display={"flex"}
					gap={"10px"}
					width={"100%"}
					pt={"15px"}
					px={isNonMobile ? "20px" : "10px"}
					key={`${i}-${i.name}`}
					alignItems={"center"}
				>
					<AddCircleOutlineIcon />
					<Typography variant={isNonMobile ? "h3" : "h4"} fontWeight={900}>
						{i.amount ? i.amount : null} {i.unit ? i.unit : null}
					</Typography>
					<Typography variant={isNonMobile ? "h3" : "h4"}>{i.name}</Typography>
				</Box>
			))}
		</Box>
	);
};

export default Ingredients;
