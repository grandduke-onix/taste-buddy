import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
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

const Cuisine = function () {
	const dishArray = [
		{ pic: africanDish, name: "African" },
		{ pic: americanDish, name: "American" },
		{ pic: chineseDish, name: "Chinese" },
		{ pic: frenchDish, name: "French" },
		{ pic: italianDish, name: "Italian" },
		{ pic: mediterraneanDish, name: "Mediterranean" },
		{ pic: middleEasternDish, name: "Middle East" },
	];
	const [onHovered, setOnHovered] = useState(false);
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box>
			<Typography variant="h1" fontWeight={700}>
				Cuisines
			</Typography>
			<Typography variant="h3" pt={"20px"}>
				Are you tired of searching for new recipes online and never finding what you're
				looking for? Look no further than the recipe web app! With this app, you can browse
				cuisines from around the world at your own comfort. Whether you're in the mood for
				Italian, Chinese, or Mexican, the recipe web app has got you covered. With its
				easy-to-use interface and vast database of recipes, you'll never run out of options
			</Typography>

			<Box pt={"70px"}>
				<Splide
					aria-label="My Favorite Images"
					options={{
						perPage: isNonMobile ? 4 : 2,
						perMove: 1,
						arrows: isNonMobile ? true : false,
					}}
				>
					{dishArray.map(i => {
						return (
							<SplideSlide>
								<Box
									display={"flex"}
									gap={"20px"}
									flexDirection={"column"}
									alignItems={"center"}
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
									<Typography variant="h3" color={onHovered && "aqua"}>
										{i.name}
									</Typography>
								</Box>
							</SplideSlide>
						);
					})}
				</Splide>
				<Box>mad</Box>
			</Box>
		</Box>
	);
};

export default Cuisine;
