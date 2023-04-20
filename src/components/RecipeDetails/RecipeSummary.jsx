import React from "react";
import { Box, Button, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeSettings } from "../../theme";

const RecipeSummary = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box px={isNonMobile ? "50px" : 0} color={color.palette.onSurface.main}>
			<Typography
				variant="h1Variant"
				fontSize={isNonMobile ? "36px" : "26px"}
				fontWeight={700}
				textAlign={isNonMobile && "left"}
			>
				{/* Recipe Title */}
				{props.title}
			</Typography>
			<Typography variant="h3" pt={"6px"} fontSize={!isNonMobile && "20px"}>
				{/* Author of the recipe */}
				{props.author}
			</Typography>
			<Typography variant="h3" pt={"20px"} fontStyle={"italic"}>
				{/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt veniam aliquam
				fugiat molestias numquam error sapiente sed exercitationem inventore velit? Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, vero! Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Cum at ipsam dicta corrupti ipsa. Est
				accusantium accusamus ipsam eligendi aliquid. */}
				{/* {props.summary} */}
			</Typography>
			{/* Recipe overview */}
			<Box display={"flex"} flexDirection={"column"} pt={isNonMobile ? "50px" : "20px"}>
				<Divider
					sx={{ backgroundColor: color.palette.outline.main }}
					flexItem
					orientation="horizontal"
				/>

				<Box display={"flex"} width={"100%"} minWidth={"100%"} height={"auto"}>
					<Box flex={"1 0 50%"} display={"flex"} justifyContent={"center"}>
						{/* Options for the left hand side */}
						<Box py={"15px"} display={"flex"} gap={"10px"} flexDirection={"column"}>
							<Typography variant={isNonMobile ? "h3" : "h4"} fontWeight={900}>
								<span style={{ fontWeight: 300 }}>Time: </span>
								{props.time} mins
							</Typography>
							<Typography variant={isNonMobile ? "h3" : "h4"} fontWeight={900}>
								<span style={{ fontWeight: 300 }}>Yield: </span>
								{props.yield} servings
							</Typography>
							<Typography variant={isNonMobile ? "h3" : "h4"} fontWeight={900}>
								<span style={{ fontWeight: 300 }}>Price per serving: </span>$
								{props.PPS}
							</Typography>
						</Box>
					</Box>

					<Divider
						sx={{ borderRightWidth: 1, backgroundColor: color.palette.outline.main }}
					/>

					{/* Options for the right hand side */}
					<Box flex={"1 0 50%"} display={"flex"} justifyContent={"center"} py={"15px"}>
						<Box display={"flex"} flexDirection={"column"} gap={"10px"}>
							{/* Button to display nutrional info */}
							<Typography
								variant={isNonMobile ? "h3" : "h4"}
								fontWeight={900}
								onClick={() => props.setOpenModal(!props.openModal)}
								sx={{
									color: color.palette.primary.main,
									cursor: "pointer",
									":hover": { color: color.palette.onSurfaceVariant.main },
								}}
							>
								Nutrition Info
							</Typography>
							<Typography variant={isNonMobile ? "h3" : "h4"} fontWeight={900}>
								<span style={{ fontWeight: 300 }}>Health score: </span>
								{props.healthScore}
							</Typography>
						</Box>
					</Box>
				</Box>

				<Divider
					sx={{ backgroundColor: color.palette.outline.main }}
					flexItem
					orientation="horizontal"
				/>
			</Box>
			{/* Recipe Tags */}
			<Box pt={"50px"}>
				<Typography variant="h4">Tags:</Typography>
				<Box display={"flex"} gap={"10px"} pt={"10px"} flexWrap={"wrap"}>
					{props.tags.map(i => (
						<Button key={i} variant="contained">
							{i}
						</Button>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default RecipeSummary;
