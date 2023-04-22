import React from "react";
import { Box, IconButton, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../../theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box backgroundColor={color.palette.surfaceVariant.main} borderRadius={"24px 24px 0 0"}>
			<Box
				backgroundColor={color.palette.primary.main}
				height={"50px"}
				borderRadius={"24px 24px 0 0"}
			/>
			<Box
				display={"flex"}
				justifyContent={"space-around"}
				alignItems={"center"}
				flexDirection={isNonMobile ? "row" : "column"}
				height={"200px"}
				// flexWrap={"wrap"}
			>
				<Box
					color={color.palette.onSurfaceVariant.main}
					display={"flex"}
					flexDirection={"column"}
					gap={"10px"}
					alignItems={!isNonMobile && "center"}
				>
					<Typography variant="h4">Email: onimisayusuff@gmail.com</Typography>
					<Typography variant="h4">Phone: 09070927990</Typography>
				</Box>
				<Box>
					<IconButton href="https://www.linkedin.com/in/oayusuff/">
						<LinkedInIcon
							fontSize="large"
							sx={{ color: color.palette.onSurfaceVariant.main }}
						/>
					</IconButton>
					<IconButton href="https://github.com/grandduke-onix">
						<GitHubIcon
							fontSize="large"
							sx={{ color: color.palette.onSurfaceVariant.main }}
						/>
					</IconButton>
				</Box>
				<Box>
					<Typography variant="h4" color={color.palette.onSurfaceVariant.main}>
						Designed by{" "}
						<span style={{ textDecoration: "underline" }}>GrandDuke Onix</span>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
