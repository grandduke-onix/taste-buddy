import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import girl from "../../assets/happy-girl.jpg";
import { themeSettings } from "../../theme";

const About = function () {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box my={"100px"}>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={"20px"}
				flexWrap={"wrap"}
			>
				<Box
					height={"700px"}
					flex={"1 1 350px"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<img
						src={girl}
						alt="happy girl holding carrots"
						style={{
							height: "100%",
							width: isNonMobile ? null : "100%",
							objectFit: isNonMobile ? "contain" : "cover",
							borderRadius: "70px",
							border: `solid ${color.palette.outline.main}`,
						}}
					/>
				</Box>

				<Box
					flex={"1 1 450px"}
					pr={isNonMobile ? "100px" : null}
					color={color.palette.onBackground.main}
				>
					<Typography
						variant="h2"
						fontFamily={color.typography.fontFamilyVariant}
						color={color.palette.onSurface.main}
						mb={"40px"}
						textAlign={isNonMobile ? "start" : "center"}
					>
						Explore the world of flavour with{" "}
						<span style={{ color: color.palette.primary.main }}>Taste-buddies</span>
					</Typography>

					<Typography
						variant="h3"
						mb={"20px"}
						sx={{ wordBreak: isNonMobile ? null : "break-word" }}
					>
						Taste-buddies is the ultimate food companion web app for foodies,
						vegetarians, and anyone who loves to explore new and exciting flavors. With
						this app, you can discover a world of tasty dishes and restaurants that will
						satisfy your cravings and enhance your culinary experience. Whether you're
						looking for a quick bite or a fine dining experience, Taste-buddies has got
						you covered.
					</Typography>

					<Typography variant="h3" sx={{ wordBreak: isNonMobile ? null : "break-word" }}>
						you can be sure to find something that will excite and tantalize your taste
						buds. Let Taste Buddies be your guide and companion for food from all over
						the world!
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
