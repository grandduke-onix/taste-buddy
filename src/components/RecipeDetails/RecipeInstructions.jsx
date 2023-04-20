import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../theme";

const RecipeInstructions = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box pt={isNonMobile ? "80px" : "20px"} px={isNonMobile && "50px"}>
			<Typography color={color.palette.onSurface.main} variant={isNonMobile ? "h2" : "h3"}>
				Directions:
			</Typography>
			{props.instructions.map(i => (
				<Box
					pt={isNonMobile && "20px"}
					px={isNonMobile ? "20px" : "8px"}
					color={color.palette.onSurface.main}
					key={`${i.number}`}
				>
					<Typography
						variant={isNonMobile ? "h3" : "h4"}
						sx={{ pt: "15px" }}
						fontWeight={700}
					>
						<span style={{ fontWeight: 300 }}>{i.number}) </span>
						{i.step}
					</Typography>
					<Box
						pt={"10px"}
						display={"grid"}
						gridTemplateRows={"repeat(2, auto)"}
						gridTemplateColumns={"70px auto"}
						gap={"10px"}
					>
						{i.ingredients && (
							<Typography sx={{ gridRow: 1 / 1 }}>ingredients: </Typography>
						)}
						{i.ingredients && (
							<Box
								display={"flex"}
								flexWrap={"wrap"}
								columnGap={"5px"}
								gridColumn={1 / 2}
							>
								{i.ingredients.map(j => (
									<Typography
										variant="h4"
										fontWeight={300}
										key={`${j}-${j.name}`}
									>
										{j.name},
									</Typography>
								))}
							</Box>
						)}
						{i.length && (
							<Typography variant="h4" sx={{ gridRow: 2 / 1 }}>
								time:{" "}
							</Typography>
						)}
						{i.length && (
							<Typography variant="h4" fontWeight={300} gridColumn={2 / -1}>
								{i.length.number}
								{i.length.unit}
							</Typography>
						)}
					</Box>
					<Divider
						sx={{
							mt: "20px",
							backgroundColor: color.palette.outline.main,
						}}
					/>
				</Box>
			))}
		</Box>
	);
};

export default RecipeInstructions;
