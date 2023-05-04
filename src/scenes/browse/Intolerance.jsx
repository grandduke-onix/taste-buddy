import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../theme";
import { intoleranceTypes } from "../../components/browsePortal/browseRecipes";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

const Intolerance = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box px={isNonMobile && "70px"} color={color.palette.onSurface.main}>
			<Typography variant={isNonMobile ? "h1" : "h2"} fontWeight={700}>
				Intolerances
			</Typography>
			<Typography variant={isNonMobile ? "h3" : "h4"} pt={"20px"}>
				Food intolerance is when you have difficulty digesting certain foods or ingredients
				in food. It’s not usually serious, but eating the food you’re intolerant to can make
				you feel unwell.
				<br />
				With taste-buddy, all recipes returned will not contain ingredients specified by
				you.
			</Typography>

			<Box pt={"50px"}>
				<Typography variant="h2">Popular types of Intolerances</Typography>
				<Box
					display={"grid"}
					gridTemplateColumns={isNonMobile ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
					gridTemplateRows={"auto"}
					rowGap={"20px"}
					pt={"50px"}
					px={isNonMobile && "50px"}
				>
					{intoleranceTypes.map(i => {
						return (
							<Typography
								key={i.name}
								component={Link}
								to={i.name}
								variant={isNonMobile ? "h3" : "h4"}
								color={color.palette.onSurface.main}
								sx={{
									display: "flex",
									gap: "10px",
									alignItems: "center",
									textDecoration: "none",
									":hover": {
										color: color.palette.primary.main,
										transition: "color .3s",
									},
								}}
							>
								<AddCircleOutlineIcon />
								{i.name}
							</Typography>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default Intolerance;
