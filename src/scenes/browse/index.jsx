import { Box, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { themeSettings } from "../../theme";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EggAltIcon from "@mui/icons-material/EggAlt";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ScaleIcon from "@mui/icons-material/Scale";
import { Link, Outlet } from "react-router-dom";

const TabPanel = function (props) {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	return (
		<Box px={isNonMobile && "70px"}>
			{props.value === props.index && <Box sx={{ py: 3 }}>{props.children}</Box>}
		</Box>
	);
};

const BrowseRecipes = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const [value, setValue] = useState(0);

	const handleChange = (_, newValue) => {
		setValue(newValue);
	};

	const tabNames = [
		{ name: "Cuisines", icon: <LocalDiningIcon sx={{ fontSize: "24px" }} />, to: "" },
		{ name: "Diet", icon: <ScaleIcon sx={{ fontSize: "24px" }} />, to: "diet" },
		{ name: "Courses", icon: <FastfoodIcon sx={{ fontSize: "24px" }} />, to: "courses" },
		{ name: "Intolerance", icon: <EggAltIcon sx={{ fontSize: "24px" }} />, to: "intolerance" },
	];

	return (
		<Box>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				gap={"10px"}
				borderRadius={"30px"}
				backgroundColor={color.palette.surface.mainVariant}
				p={"50px"}
				height={"500px"}
				color={color.palette.onSurface.main}
			>
				<Typography
					variant="h1Variant"
					fontSize={isNonMobile ? "70px" : "45px"}
					color={color.palette.primary.main}
					textAlign={!isNonMobile && "center"}
				>
					Browse-<span style={{ color: color.palette.onSurface.main }}>recipes</span>
				</Typography>
				<Typography
					variant="h3"
					fontSize={isNonMobile ? "25px" : "20px"}
					width={isNonMobile ? "80%" : null}
					textAlign={!isNonMobile && "center"}
				>
					With this user-friendly platform, you can easily search for recipes based on
					ingredients, cuisine, cooking time, and more. Say goodbye to the frustration of
					sifting through irrelevant results and hello to a personalized recipe
					experience.
				</Typography>
			</Box>

			<Box mt={"100px"} width={"100%"}>
				<Box
					sx={{ borderBottom: 1, borderColor: "divider" }}
					position={"sticky"}
					top={0}
					backgroundColor={color.palette.surface.main}
					zIndex={800}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						centered={isNonMobile ? true : false}
						variant={isNonMobile ? "standard" : "fullWidth"}
					>
						{tabNames.map(i => {
							return (
								<Tab
									key={i.name}
									component={Link}
									to={i.to}
									label={
										<Box
											display={"flex"}
											flexDirection={"column"}
											alignItems={"center"}
											justifyContent={"center"}
											gap={"5px"}
										>
											{i.icon}
											<Typography>{i.name}</Typography>
										</Box>
									}
								/>
							);
						})}
					</Tabs>
				</Box>

				<TabPanel value={value} index={0}>
					<Outlet />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Outlet />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Outlet />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Outlet />
				</TabPanel>
			</Box>
		</Box>
	);
};

export default BrowseRecipes;
