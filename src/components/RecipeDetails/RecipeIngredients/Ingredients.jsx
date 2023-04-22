import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { themeSettings } from "../../../theme";

const Ingredients = function (props) {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box mx={isNonMobile ? "30px" : 0} my={"30px"}>
			<Typography variant="h3">Ingredients:</Typography>
			{props.ingredients.map((i, j) => (
				<Box
					key={`${i.name}-${j}`}
					display={"flex"}
					gap={"10px"}
					width={"100%"}
					pt={"15px"}
					px={isNonMobile ? "20px" : "10px"}
					alignItems={"center"}
					color={color.palette.onSurface.main}
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
