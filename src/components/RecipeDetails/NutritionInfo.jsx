import { Box, Divider, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";

const NutritionInfo = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const nutrients = props.nutrients;
	// console.log(nutrients);

	return (
		<Box
			width={isNonMobile ? "400px" : "100%"}
			height={isNonMobile ? "auto" : "100%"}
			// height={"auto"}
			backgroundColor={color.palette.surface.mainVariant}
			borderRadius={"28px"}
			// px={"24px"}
			position={"absolute"}
			top={isNonMobile ? "20%" : "70px"}
			left={isNonMobile ? "40%" : 0}
			display={!props.openModal && "none"}
			color={color.palette.onSurface.main}
			border={`solid ${color.palette.outline.main}`}
		>
			<Box display={"flex"} justifyContent={"end"} px={"24px"}>
				<IconButton onClick={() => props.setOpenModal(!props.openModal)}>
					<CloseIcon fontSize="large" />
				</IconButton>
			</Box>
			<Box display={"flex"} justifyContent={"space-between"} pt={"15px"} px={"24px"}>
				<Typography variant="h3">Nutritional Analysis</Typography>
				<Typography variant="h3">Per Serving</Typography>
			</Box>

			<Box pt={"30px"} px={"24px"}>
				<Box display={"flex"} justifyContent={"space-between"}>
					<Typography variant="h4">serving size</Typography>
					<Typography variant="h4">1 of {props.servings}</Typography>
				</Box>
				<Divider sx={{ pt: "15px", color: color.palette.outline.main }} />
			</Box>

			<Box height={"500px"} overflow={"auto"}>
				{nutrients.map(i => (
					<Box pt={"24px"} px={"24px"} key={`${i}-${i.name}`}>
						<Box display={"flex"} justifyContent={"space-between"}>
							<Typography variant="h4">{i.name}</Typography>
							<Typography variant="h4">
								{i.amount} {i.unit}
							</Typography>
						</Box>
						<Divider sx={{ pt: "15px", color: color.palette.outline.main }} flexItem />
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default NutritionInfo;
