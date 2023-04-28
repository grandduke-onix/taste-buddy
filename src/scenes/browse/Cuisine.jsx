import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import africanDish from "../../assets/african-dish.jpg";
import americanDish from "../../assets/american-dish.jpg";
import chineseDish from "../../assets/chinese-dish.jpg";
import frenchDish from "../../assets/french-dish.jpg";
import italianDish from "../../assets/italian-dish.jpg";
import mediterraneanDish from "../../assets/mediterranean-dish.jpg";
import middleEasternDish from "../../assets/middle-east.jpg";
import { themeSettings } from "../../theme";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Cuisine = function () {
	const popularCuisines = [
		{ pic: africanDish, name: "African", to: "cuisine/african" },
		{ pic: americanDish, name: "American", to: "cuisine/american" },
		{ pic: chineseDish, name: "Chinese", to: "cuisine/chinese" },
		{ pic: frenchDish, name: "French", to: "cuisine/french" },
		{ pic: italianDish, name: "Italian", to: "cuisine/italian" },
		{ pic: mediterraneanDish, name: "Mediterranean", to: "cuisine/mediterranean" },
		{ pic: middleEasternDish, name: "Middle East", to: "cuisine/middle-east" },
	];

	const otherCuisines = [
		{ name: "British", to: "cuisine/british" },
		{ name: "Cajun", to: "cuisine/cajun" },
		{ name: "Caribbean", to: "cuisine/caribbean" },
		{ name: "Eastern European", to: "cuisine/eastern-european" },
		{ name: "European", to: "cuisine/european" },
		{ name: "German", to: "cuisine/german" },
		{ name: "Greek", to: "cuisine/greek" },
		{ name: "Indian", to: "cuisine/indian" },
		{ name: "Irish", to: "cuisine/irish" },
		{ name: "Japanese", to: "cuisine/japanese" },
		{ name: "Jewish", to: "cuisine/jewish" },
		{ name: "Korean", to: "cuisine/korean" },
		{ name: "Latin American", to: "cuisine/latin-american" },
		{ name: "Mexican", to: "cuisine/mexican" },
		{ name: "Nordic", to: "cuisine/nordic" },
		{ name: "Southern", to: "cuisine/southern" },
		{ name: "Spanish", to: "cuisine/spanish" },
		{ name: "Thai", to: "cuisine/thai" },
		{ name: "Vietnamese", to: "cuisine/vietnamese" },
	];

	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box px={isNonMobile && "70px"}>
			<Typography variant={isNonMobile ? "h1" : "h2"} fontWeight={700}>
				Cuisines
			</Typography>
			<Typography variant={isNonMobile ? "h3" : "h4"} pt={"20px"}>
				Are you tired of searching for new recipes online and never finding what you're
				looking for? Look no further than the recipe web app! With this app, you can browse
				cuisines from around the world at your own comfort. Whether you're in the mood for
				Italian, Chinese, or Mexican, the recipe web app has got you covered. With its
				easy-to-use interface and vast database of recipes, you'll never run out of options
			</Typography>

			<Box pt={"70px"}>
				<Typography variant={isNonMobile ? "h2" : "h3"}>Popular cuisines</Typography>
				<Splide
					style={{ color: "red" }}
					aria-label="My Favorite Images"
					options={{
						perPage: isNonMobile ? 4 : 2,
						perMove: 1,
						// arrows: isNonMobile ? true : false,
					}}
				>
					{popularCuisines.map(i => {
						return (
							<SplideSlide key={i.name}>
								<Box
									display={"flex"}
									gap={"20px"}
									flexDirection={"column"}
									alignItems={"center"}
									component={Link}
									to={i.to}
									color={color.palette.onSurface.main}
									sx={{
										textDecoration: "none",
										":hover": {
											color: color.palette.primary.main,
											transition: "color .5s",
										},
									}}
								>
									<Box
										height={isNonMobile ? "200px" : "100px"}
										width={isNonMobile ? "200px" : "100px"}
										borderRadius={"100%"}
										overflow={"hidden"}
									>
										<img
											src={i.pic}
											alt="african dish"
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</Box>
									<Typography variant={isNonMobile ? "h3" : "h4"}>
										{i.name}
									</Typography>
								</Box>
							</SplideSlide>
						);
					})}
				</Splide>
				<Box pt={"100px"}>
					<Typography
						variant={isNonMobile ? "h2" : "h3"}
						color={color.palette.onSurface.main}
					>
						Other Cuisines
					</Typography>
					<Box
						display={"grid"}
						gridTemplateColumns={isNonMobile ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
						gridTemplateRows={"auto"}
						rowGap={"20px"}
						pt={"50px"}
						px={isNonMobile && "50px"}
					>
						{otherCuisines.map(i => {
							return (
								<Typography
									key={i.name}
									component={Link}
									to={i.to}
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
		</Box>
	);
};

export default Cuisine;
