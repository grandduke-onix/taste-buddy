import React from "react";
import { NutientsBarGrams, NutientsBarMilligrams, CaloriePieChart } from "./Chart";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../../theme";

const NutritionChart = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box pt={isNonMobile ? "100px" : "50px"} mx={isNonMobile && "50px"}>
			<Typography
				variant={isNonMobile ? "h2" : "h3"}
				color={color.palette.onSurface.main}
				sx={{ pb: isNonMobile ? "60px" : 0 }}
			>
				Nutrition:
			</Typography>
			<Box display={"flex"} gap={"20px"} justifyContent={"center"}>
				<Box
					height={"500px"}
					width={isNonMobile ? "50%" : "100%"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					gap={isNonMobile ? "30px" : "10px"}
				>
					<CaloriePieChart calorieBreakdown={props.recipeData.nutrition} />
					<Typography variant={isNonMobile ? "h2" : "h3"} fontWeight={700}>
						Carloric Breakdown
					</Typography>
				</Box>

				{/* <Box
            height={"500px"}
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"30px"}
        >
            <NutientsBar nutrients={props.recipeData.nutrition.nutrients} />
            <Typography variant="h2" fontWeight={700}>
                Nutritional Information
            </Typography>
        </Box> */}
			</Box>
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				sx={{ pt: "150px" }}
			>
				<Box
					display={"flex"}
					gap={isNonMobile ? "20px" : "10px"}
					width={"100%"}
					flexWrap={!isNonMobile && "wrap"}
				>
					<Box
						height={"500px"}
						width={isNonMobile ? "50%" : "100%"}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={"30px"}
					>
						<NutientsBarGrams nutrients={props.recipeData.nutrition} />
					</Box>
					<Box
						height={"500px"}
						width={isNonMobile ? "50%" : "100%"}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={"30px"}
					>
						<NutientsBarMilligrams nutrients={props.recipeData.nutrition} />
					</Box>
				</Box>
				<Typography
					variant={isNonMobile ? "h2" : "h3"}
					fontWeight={700}
					sx={{ mt: "30px" }}
				>
					Nutritional Information
				</Typography>
			</Box>
		</Box>
	);
};

export default NutritionChart;
