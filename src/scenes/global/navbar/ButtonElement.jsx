import React from "react";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	Tooltip,
	Typography,
	Zoom,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { themeSettings } from "../../../theme";
import { Link } from "react-router-dom";

const ButtonElement = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Tooltip
			title={<Typography>{props.toolTip}</Typography>}
			placement={isNonMobile ? "right" : "top"}
			arrow
			TransitionComponent={Zoom}
		>
			<ListItem disableGutters disablePadding>
				<ListItemButton
					onMouseDown={props.onMouseDown}
					onMouseUp={props.onMouseUp}
					onTouchStart={props.onTouchStart}
					onTouchEnd={props.onTouchEnd}
					component={Link}
					to={props.link}
					// autoFocus={props.focus}
					// disableTouchRipple
					disableRipple
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: isNonMobile ? "5px" : 0,
						justifyContent: isNonMobile ? "start" : "space-between",
						alignItems: "center",
						height: isNonMobile ? "56px" : 0,
						px: isNonMobile ? "12px" : 0,
						// styling the states of each element
						"&:hover :first-child": {
							backgroundColor: color.palette.surfaceVariant.main,
							color: color.palette.onSurfaceVariant.main,
							borderRadius: "16px",
						},
						":hover": {
							color: color.palette.onSurfaceVariant.main,
						},
						":active :first-child": {
							backgroundColor: color.palette.secondary.main,
							color: color.palette.onSecondaryContainer.main,
							borderRadius: "16px",
						},
						":active": { color: color.palette.onSurface.main },
					}}
				>
					<ListItemIcon
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: props.currentLocation
								? color.palette.secondaryContainer.main
								: null,
							color: props.currentLocation ? color.palette.onSurface.main : null,
							borderRadius: "16px",
						}}
					>
						{props.activeIcon}
					</ListItemIcon>
					<Typography
						variant="h4"
						color={
							props.currentLocation
								? color.palette.onSurface.main
								: color.palette.onSurfaceVariant.main
						}
					>
						{props.text}
					</Typography>
				</ListItemButton>
			</ListItem>
		</Tooltip>
	);
};

export default ButtonElement;
