import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import family from "../../assets/family.jpg";
import { themeSettings } from "../../theme";

const Hero = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box
			borderRadius={"30px"}
			backgroundColor={color.palette.surface.mainVariant}
			// border={`solid ${color.palette.outline.main}`}
		>
			<Box
				display={"flex"}
				gap={"50px"}
				justifyContent={"center"}
				alignItems={"center"}
				flexWrap={"wrap"}
				py={"50px"}
			>
				<Box flex={"1 1 400px"}>
					<Box py={"20px"} px={"40px"}>
						<Box paddingBottom={"50px"}>
							<Typography
								variant="h1Variant"
								fontSize={isNonMobile ? null : "36px"}
								color={color.palette.onSurface.main}
							>
								Your Personal Food Companion, Discover your new favorite dish
							</Typography>
						</Box>
						<Box paddingBottom={"20px"}>
							<Typography variant="h3" color={color.palette.onSurface.main}>
								Discover new flavors, track your meals, and stay healthy with...
								<span
									style={{
										fontSize: "36px",
										fontFamily: color.typography.fontFamilyVariant,
										color: color.palette.primary.main,
									}}
								>
									{" "}
									Taste-Buddies
								</span>
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box flex={"1 1 400px"}>
					<Box height={"450px"} mx={"20px"}>
						<img
							src={family}
							alt="a happy family cooking"
							style={{
								height: "100%",
								width: "100%",
								objectFit: "cover",
								borderRadius: "0 0 70% 70%",
								border: `solid ${color.palette.outline.main}`,
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
