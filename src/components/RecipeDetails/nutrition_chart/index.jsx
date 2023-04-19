import React from "react";
import { NutientsBarGrams, NutientsBarMilligrams, CaloriePieChart } from "./Chart";
import { Box, Typography, useTheme } from "@mui/material";
import { themeSettings } from "../../../theme";

const NutritionChart = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box pt={"100px"} mx={"50px"}>
			<Typography variant="h2" color={color.palette.onSurface.main} sx={{ pb: "60px" }}>
				Nutrition:
			</Typography>
			<Box display={"flex"} gap={"20px"} justifyContent={"center"}>
				<Box
					height={"500px"}
					width={"50%"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					gap={"30px"}
				>
					<CaloriePieChart calorieBreakdown={props.recipeData.nutrition} />
					<Typography variant="h2" fontWeight={700}>
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
				<Box display={"flex"} gap={"20px"}>
					<Box
						height={"500px"}
						width={"50%"}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={"30px"}
					>
						<NutientsBarGrams nutrients={props.recipeData.nutrition} />
					</Box>
					<Box
						height={"500px"}
						width={"50%"}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={"30px"}
					>
						<NutientsBarMilligrams nutrients={props.recipeData.nutrition} />
					</Box>
				</Box>
				<Typography variant="h2" fontWeight={700} sx={{ mt: "30px" }}>
					Nutritional Information
				</Typography>
			</Box>
		</Box>
	);
};

export default NutritionChart;
