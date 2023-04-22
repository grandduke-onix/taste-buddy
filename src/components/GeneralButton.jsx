import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { themeSettings } from "../theme";
import { Link } from "react-router-dom";

const GeneralButton = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	return (
		<Box>
			<Box
				onClick={props.action}
				borderRadius={"24px"}
				padding={"10px 20px 10px 20px"}
				border={props.outline ? `solid ${color.palette.outline.main}` : null}
				backgroundColor={props.outline ? null : color.palette.primary.main}
				color={
					props.outline ? color.palette.onBackground.main : color.palette.onPrimary.main
				}
				sx={{
					textDecoration: "none",
					cursor: "pointer",
					":hover": {
						transform: "translateY(-1px)",
						boxShadow: "1px 3px 6px -1px rgba(0,0,0,0.75)",
					},
					":active": { transform: "translateY(1px)" },
					transition: "all .2s",
				}}
			>
				{props.router ? (
					<Link to={props.to}>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								color: props.outline
									? color.palette.onBackground.main
									: color.palette.onPrimary.main,
								width: "100%",
								cursor: "inherit",
							}}
						>
							<Typography variant="h3" textAlign={"center"}>
								{props.text}
							</Typography>
						</button>
					</Link>
				) : (
					<button
						style={{
							backgroundColor: "transparent",
							border: "none",
							color: "inherit",
							width: "100%",
							cursor: "inherit",
						}}
					>
						<Typography variant="h3" textAlign={"center"}>
							{props.children}
						</Typography>
					</button>
				)}
			</Box>
		</Box>
	);
};

export default GeneralButton;
