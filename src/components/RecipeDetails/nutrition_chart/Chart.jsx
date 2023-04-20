import React from "react";
import { themeSettings } from "../../../theme";
import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

export const CaloriePieChart = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	const colorArray = [
		color.palette.primary.main,
		color.palette.secondary.main,
		color.palette.tertiary.main,
	];

	const data = Object.entries(props.calorieBreakdown.caloricBreakdown).map((key, value) => {
		return { id: key[0], label: key[0], value: key[1], color: colorArray[value] };
	});

	return (
		<ResponsivePie
			data={data}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.25}
			padAngle={1}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			colors={{ datum: "data.color" }}
			theme={{
				background: color.palette.surface.main,
				textColor: color.palette.onSurface.main,
				fontSize: 17,
				legends: {
					text: {
						fontSize: 16,
						fill: color.palette.onSurface.main,
					},
				},
				tooltip: {
					container: {
						background: color.palette.surface.main,
						color: color.palette.onSurface.main,
						fontSize: 15,
					},
				},
			}}
			borderWidth={1}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor={color.palette.onSurface.main}
			arcLinkLabelsThickness={3}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			motionConfig="wobbly"
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: 0,
					translateY: 56,
					itemsSpacing: 0,
					itemWidth: 150,
					itemHeight: 18,
					itemTextColor: color.palette.onSurfaceVariant.main,
					itemDirection: "left-to-right",
					itemOpacity: 1,
					symbolSize: 18,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: color.palette.onSurface.main,
							},
						},
					],
				},
			]}
		/>
	);
};

export const NutientsBarGrams = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	// not my fault just flow with the naming convention😁
	const gramsData = props.nutrients.nutrients
		.filter(element => {
			if (element.unit === "g") {
				return { nutrient: element.name, amount: element.amount };
			}
		})
		.map(element => {
			return { nutrient: element.name, amount: element.amount };
		});

	return (
		<ResponsiveBar
			data={gramsData}
			keys={["amount"]}
			indexBy={"nutrient"}
			margin={{ top: 50, right: 130, bottom: 110, left: 60 }}
			padding={0.3}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={color.palette.primary.main}
			theme={{
				background: color.palette.surface.main,
				textColor: "aqua",
				textColor: color.palette.onSurface.main,
				fontSize: 11,
				axis: {
					domain: {
						line: {
							stroke: color.palette.outline.main,
							strokeWidth: 1,
						},
					},
					legend: {
						text: {
							fontSize: 20,
							fill: color.palette.onSurface.main,
						},
					},
					ticks: {
						line: {
							stroke: color.palette.outline.main,
							strokeWidth: 1,
						},
						text: {
							fontSize: 14,
							fill: color.palette.onSurface.main,
						},
					},
				},
				grid: {
					line: {
						stroke: color.palette.onSurfaceVariant.main,
						strokeWidth: 1,
					},
				},
				legends: {
					title: {
						text: {
							fontSize: 11,
							fill: "#333333",
						},
					},
					text: {
						fontSize: 14,
						fill: color.palette.onSurface.main,
					},
					ticks: {
						line: {},
						text: {
							fontSize: 10,
							fill: "#333333",
						},
					},
				},
			}}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: -90,
				legend: "nutrient",
				legendPosition: "middle",
				legendOffset: 220,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "amount (grams)",
				legendPosition: "middle",
				legendOffset: -55,
			}}
			enableLabel={false}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
		/>
	);
};

export const NutientsBarMilligrams = function (props) {
	const themes = useTheme();
	const color = themeSettings(themes.palette.mode);

	// not my fault also just flow with the naming convention😁
	// To filter out milligrams data
	const miligramsData = props.nutrients.nutrients
		.filter(element => {
			if (element.unit === "mg") {
				return { nutrient: element.name, amount: element.amount };
			}
		})
		.map(element => {
			return { nutrient: element.name, amount: element.amount };
		});

	return (
		<ResponsiveBar
			data={miligramsData}
			keys={["amount"]}
			indexBy={"nutrient"}
			margin={{ top: 50, right: 130, bottom: 110, left: 60 }}
			padding={0.3}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={color.palette.primary.main}
			theme={{
				background: color.palette.surface.main,
				textColor: "aqua",
				textColor: color.palette.onSurface.main,
				fontSize: 11,
				axis: {
					domain: {
						line: {
							stroke: color.palette.outline.main,
							strokeWidth: 1,
						},
					},
					legend: {
						text: {
							fontSize: 20,
							fill: color.palette.onSurface.main,
						},
					},
					ticks: {
						line: {
							stroke: color.palette.outline.main,
							strokeWidth: 1,
						},
						text: {
							fontSize: 14,
							fill: color.palette.onSurface.main,
						},
					},
				},
				grid: {
					line: {
						stroke: color.palette.onSurfaceVariant.main,
						strokeWidth: 1,
					},
				},
				legends: {
					title: {
						text: {
							fontSize: 11,
							fill: "#333333",
						},
					},
					text: {
						fontSize: 14,
						fill: color.palette.onSurface.main,
					},
					ticks: {
						line: {},
						text: {
							fontSize: 10,
							fill: "#333333",
						},
					},
				},
			}}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: -90,
				legend: "nutrient",
				legendPosition: "middle",
				legendOffset: 220,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "amount (miligrams)",
				legendPosition: "middle",
				legendOffset: -55,
			}}
			enableLabel={false}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
		/>
	);
};