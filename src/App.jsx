import React, { Suspense, lazy } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";
import "./index.css";
import Global from "./scenes/global";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import ErrorPage from "./components/ErrorPage";
import { RouteChangeAnimation } from "./components/Loader";

const MyFeed = lazy(() => import("./scenes/feed"));
const MyRecipes = lazy(() => import("./scenes/recipes"));
const MyPlanning = lazy(() => import("./scenes/planning"));
const RestaurantSearch = lazy(() => import("./scenes/restaurants"));
const BrowseRecipes = lazy(() => import("./scenes/browse"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Global />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<RouteChangeAnimation />}>
						<MyFeed />
					</Suspense>
				),
				loader: () => import("./scenes/feed").then(module => module.loader()),
			},
			{
				path: "browse",
				element: (
					<Suspense fallback={<RouteChangeAnimation />}>
						<BrowseRecipes />
					</Suspense>
				),
			},
			{
				path: "guided-recipes",
				element: (
					<Suspense fallback={<RouteChangeAnimation />}>
						<MyRecipes />
					</Suspense>
				),
			},
			{
				path: "meal-planning",
				element: (
					<Suspense fallback={<RouteChangeAnimation />}>
						<MyPlanning />
					</Suspense>
				),
			},
			{
				path: "restaurant-search",
				element: (
					<Suspense fallback={<RouteChangeAnimation />}>
						<RestaurantSearch />
					</Suspense>
				),
			},
			{
				path: "/recipe-details/:recipeId",
				element: (
					<Suspense fallback={<RouteChangeAnimation />}>
						<RecipeDetails />
					</Suspense>
				),
			},
		],
	},
]);

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<RouterProvider router={router} />
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
