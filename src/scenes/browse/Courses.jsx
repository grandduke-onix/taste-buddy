import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { themeSettings } from "../../theme";
import { courseTypes } from "../../components/browsePortal/browseRecipes";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Courses = function () {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const overlay = "linear-gradient(to bottom,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))";

	return (
		<Box px={isNonMobile && "70px"} color={color.palette.onSurface.main}>
			<Typography variant={isNonMobile ? "h1" : "h2"} fontWeight={700}>
				Recipe by Courses
			</Typography>
			<Typography variant={isNonMobile ? "h3" : "h4"} pt={"20px"}>
				If you're on a quest to design the perfect meal, you've landed in the right place to
				plan your menu for any course. Cooking for a Christmas crowd or crafting an intimate
				five-course meal for two, there are thousands of recipes to make every meal
				overwhelmingly enjoyable. With our taste-buddy, you can easily find recipes by
				course and create mouth-watering meals in no time! Whether you’re looking for
				appetizers, entrees, or desserts, we’ve got you covered. Get ready to explore and
				enjoy!
			</Typography>

			<Box pt={"70px"}>
				<Typography variant={isNonMobile ? "h2" : "h3"}>Featured courses</Typography>
				{/* collage */}
				<Box
					px={isNonMobile && "100px"}
					pt={"50px"}
					height={isNonMobile ? "500px" : "800px"}
					width={"100%"}
					display={"flex"}
					flexDirection={isNonMobile ? "row" : "column"}
					gap={isNonMobile ? "20px" : "10px"}
				>
					{/* Left Collage */}
					<Box
						flex={"1 0 50%"}
						display={"flex"}
						flexDirection={"column"}
						gap={isNonMobile ? "20px" : "10px"}
						width={"100%"}
					>
						<Box
							component={Link}
							to={courseTypes[2].name}
							flex={"1 0 47.5%"}
							width={"100%"}
							borderRadius={"10px"}
							display={"flex"}
							flexDirection={"column"}
							alignItems={"center"}
							justifyContent={"center"}
							sx={{
								textDecoration: "none",
								backgroundImage: `${overlay}, url(${courseTypes[2].pic})`,
								objectFit: "scale-down",
								backgroundSize: "cover",
								":hover": {
									transform: "translateY(-5px)",
									transition: "transform .3s",
								},
							}}
						>
							<Typography variant={isNonMobile ? "h3" : "h4"} color={"white"}>
								Fresh ideas for dessert
							</Typography>
							<Typography
								variant={isNonMobile ? "h2" : "h3"}
								color={"white"}
								fontWeight={700}
							>
								Search for tasty healthy desserts
							</Typography>
						</Box>
						<Box
							component={Link}
							to={courseTypes[13].name}
							flex={"1 0 47.5%"}
							width={"100%"}
							borderRadius={"10px"}
							display={"flex"}
							flexDirection={"column"}
							alignItems={"center"}
							justifyContent={"center"}
							sx={{
								textDecoration: "none",
								backgroundImage: `${overlay}, url(${courseTypes[13].pic})`,
								objectFit: "scale-down",
								backgroundSize: "cover",
								":hover": {
									transform: "translateY(-5px)",
									transition: "transform .3s",
								},
							}}
						>
							<Typography variant={isNonMobile ? "h3" : "h4"} color={"white"}>
								Access to tasty drinks
							</Typography>
							<Typography
								variant={isNonMobile ? "h2" : "h3"}
								color={"white"}
								fontWeight={700}
							>
								Search for fun and special drinks
							</Typography>
						</Box>
					</Box>

					{/* Right collage */}
					<Box
						component={Link}
						to={courseTypes[0].name}
						flex={"1 0 50%"}
						height={"100%"}
						width={"100%"}
						borderRadius={"10px"}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"center"}
						color={"white"}
						sx={{
							textDecoration: "none",
							backgroundImage: `${overlay}, url(${courseTypes[0].pic})`,
							objectFit: "scale-down",
							backgroundSize: "cover",
							":hover": {
								transform: "translateY(-5px)",
								transition: "transform .3s",
							},
						}}
					>
						<Typography variant={isNonMobile ? "h3" : "h4"}>What to eat now</Typography>
						<Typography variant={isNonMobile ? "h2" : "h3"} fontWeight={700}>
							Search for Main-courses
						</Typography>
					</Box>
				</Box>

				<Typography variant={isNonMobile ? "h2" : "h3"} sx={{ pt: "100px" }}>
					Browse by courses
				</Typography>
				<Box
					display={"grid"}
					gridTemplateColumns={isNonMobile ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
					gridTemplateRows={"auto"}
					rowGap={"20px"}
					pt={"50px"}
					px={isNonMobile && "50px"}
				>
					{courseTypes.map(i => {
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

export default Courses;
