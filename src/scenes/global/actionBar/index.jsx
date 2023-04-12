import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import { themeSettings } from "../../../theme";
import ColorMode from "../../../components/ColorMode";

const ActionBar = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box
			display={props.isVisible ? "none" : "inline-block"}
			position={"fixed"}
			right={0}
			height={"600px"}
			mr={isNonMobile ? "20px" : "10px"}
		>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				flexDirection={"column"}
				height={"100%"}
			>
				<Box display={"flex"} flexDirection={"column"} gap={"20px"}>
					<Box
						height={isNonMobile ? "60px" : "40px"}
						width={isNonMobile ? "60px" : "40px"}
						backgroundColor={color.palette.surfaceVariant.main}
						borderRadius={"50%"}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						color={color.palette.onSurfaceVariant.main}
						onClick={() => props.setButtonClick(true)}
						boxShadow={
							"2.3px 2.3px 1.9px rgba(0, 0, 0, 0.018),5.4px 5.4px 4.3px rgba(0, 0, 0, 0.026),9.7px 9.7px 7.7px rgba(0, 0, 0, 0.032),16.1px 16.1px 12.8px rgba(0, 0, 0, 0.038),26.5px 26.5px 21.2px rgba(0, 0, 0, 0.044),46.2px 46.2px 37px rgba(0, 0, 0, 0.052),100px 100px 80px rgba(0, 0, 0, 0.07)"
						}
						sx={{
							cursor: "pointer",
							":hover": {
								backgroundColor: color.palette.secondaryContainer.main,
								color: color.palette.onSecondaryContainer.main,
							},
						}}
					>
						<SearchIcon fontSize="large" />
					</Box>

					{/* Display color button when in mobile screen */}
					{isNonMobile ? null : <ColorMode />}
				</Box>
				<Box
					onClick={props.scrollUp}
					height={isNonMobile ? "60px" : "40px"}
					width={isNonMobile ? "60px" : "40px"}
					backgroundColor={color.palette.surfaceVariant.main}
					borderRadius={"50%"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					color={color.palette.onSurfaceVariant.main}
					boxShadow={
						"2.3px 2.3px 1.9px rgba(0, 0, 0, 0.018),5.4px 5.4px 4.3px rgba(0, 0, 0, 0.026),9.7px 9.7px 7.7px rgba(0, 0, 0, 0.032),16.1px 16.1px 12.8px rgba(0, 0, 0, 0.038),26.5px 26.5px 21.2px rgba(0, 0, 0, 0.044),46.2px 46.2px 37px rgba(0, 0, 0, 0.052),100px 100px 80px rgba(0, 0, 0, 0.07)"
					}
					sx={{
						cursor: "pointer",
						":hover": {
							backgroundColor: color.palette.secondaryContainer.main,
							color: color.palette.onSecondaryContainer.main,
						},
					}}
				>
					<KeyboardArrowUpIcon fontSize="large" />
				</Box>
			</Box>
		</Box>
	);
};

export default ActionBar;
