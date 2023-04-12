import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react"

export const tokens = {
    primary: {
        0: "#000000",
        10: "#341100",
        20: "#562000",
        25: "#672800",
        30: "#7a3000",
        35: "#893b0b",
        40: "#984717",
        50: "#b75f2e",
        60: "#d77744",
        70: "#f7915b",
        80: "#ffb692",
        90: "#ffdbcb",
        95: "#ffede6",
        98: "#fff8f6",
        99: "#fffbff",
        100: " #ffffff",
    },
    secondary: {
        0: "#000000",
        10: "#251a00",
        20: "#3f2e00",
        25: "#4d3800",
        30: "#5b4300",
        35: "#694e00",
        40: "#785a00",
        50: "#977100",
        60: "#b68a0e",
        70: "#d3a42e",
        80: "#f1c048",
        90: "#ffdf9c",
        95: "#ffefd3",
        98: "#fff8f2",
        99: "#fffbff",
        100: "#ffffff",
    },
    tertiary: {
        0: "#000000",
        10: "#3f0015",
        20: "#660027",
        25: "#7b0031",
        30: "#90023a",
        35: "#a01646",
        40: "#b12551",
        50: "#d24069",
        60: "#f45a82",
        70: "#ff86a0",
        80: "#ffb2bf",
        90: "#ffd9de",
        95: "#ffecee",
        98: "#fff8f7",
        99: "#fffbff",
        100: "#ffffff",
    },
    neutral: {
        0: "#000000",
        10: "#112000",
        20: "#203600",
        25: "#294200",
        30: "#314f00",
        35: "#3a5c02",
        40: "#466811",
        50: "#5d822a",
        60: "#769c41",
        70: "#90b859",
        80: "#aad471",
        90: "#c6f08a",
        95: "#d4ff97",
        98: "#f0ffd5",
        99: "#f9ffe8",
        100: "#ffffff"
    },
    neutralVariant: {
        0: "#000000",
        10: "#241914",
        20: "#3b2e27",
        25: "#463832",
        30: "#52443d",
        35: "#5f4f48",
        40: "#6b5b54",
        50: "#85736c",
        60: "#a08d85",
        70: "#bba79f",
        80: "#d7c2b9",
        90: "#f4ded5",
        95: "#ffede6",
        98: "#fff8f6",
        99: "#fffbff",
        100: "#ffffff",
    },
    error: {
        0: "#000000",
        10: "#410002",
        20: "#690005",
        25: "#7e0007",
        30: "#93000a",
        35: "#a80710",
        40: "#ba1a1a",
        50: "#de3730",
        60: "#ff5449",
        70: "#ff897d",
        80: "#ffb4ab",
        90: "#ffdad6",
        95: "#ffedea",
        98: "#fff8f7",
        99: "#fffbff",
        100: " #fffff",
    }
}


// MUI theme settings
export const themeSettings = function (mode) {
    // const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === "light") ? {
                primary: {
                    main: tokens.primary[40]
                },
                // primary: "#984717",
                onPrimary: {
                    main: tokens.primary[100]
                },
                primaryContainer: {
                    main: tokens.primary[90]
                },
                onPrimaryContainer: {
                    main: tokens.primary[10]
                },
                secondary: {
                    main: tokens.secondary[40]
                },
                onSecondary: {
                    main: tokens.secondary[100]
                },
                secondaryContainer: {
                    main: tokens.secondary[90]
                },
                onSecondaryContainer: {
                    main: tokens.secondary[10]
                },
                tertiary: {
                    main: tokens.tertiary[40]
                },
                onTertiary: {
                    main: tokens.tertiary[100]
                },
                tertiaryContainer: {
                    main: tokens.tertiary[90]
                },
                onTertiaryContainer: {
                    main: tokens.tertiary[10]
                },
                error: {
                    main: tokens.error[40]
                },
                onError: {
                    main: tokens.error[100]
                },
                errorContainer: {
                    main: tokens.error[90]
                },
                onErrorContainer: {
                    main: tokens.error[10]
                },
                background: {
                    main: tokens.neutral[99]
                },
                onBackground: {
                    main: tokens.neutral[10]
                },
                outline: {
                    main: tokens.neutralVariant[50]
                },
                surface: {
                    main: tokens.neutral[99],
                    mainVariant: tokens.neutral[98]
                },
                onSurface: {
                    main: tokens.neutral[10]
                },
                surfaceVariant: {
                    main: tokens.neutralVariant[90]
                },
                onSurfaceVariant: {
                    main: tokens.neutralVariant[30]
                }
            } : {
                primary: {
                    main: tokens.primary[80]
                },
                // primary: "#984717",
                onPrimary: {
                    main: tokens.primary[20]
                },
                primaryContainer: {
                    main: tokens.primary[30]
                },
                onPrimaryContainer: {
                    main: tokens.primary[90]
                },
                secondary: {
                    main: tokens.secondary[80]
                },
                onSecondary: {
                    main: tokens.secondary[20]
                },
                secondaryContainer: {
                    main: tokens.secondary[30]
                },
                onSecondaryContainer: {
                    main: tokens.secondary[90]
                },
                tertiary: {
                    main: tokens.tertiary[80]
                },
                onTertiary: {
                    main: tokens.tertiary[20]
                },
                tertiaryContainer: {
                    main: tokens.tertiary[30]
                },
                onTertiaryContainer: {
                    main: tokens.tertiary[90]
                },
                error: {
                    main: tokens.error[80]
                },
                onError: {
                    main: tokens.error[20]
                },
                errorContainer: {
                    main: tokens.error[30]
                },
                onErrorContainer: {
                    main: tokens.error[90]
                },
                background: {
                    main: tokens.neutral[10],
                },
                onBackground: {
                    main: tokens.neutral[90]
                },
                outline: {
                    main: tokens.neutralVariant[60]
                },
                surface: {
                    main: tokens.neutral[10],
                    mainVariant: tokens.neutral[20]
                },
                onSurface: {
                    main: tokens.neutral[90]
                },
                surfaceVariant: {
                    main: tokens.neutralVariant[30]
                },
                onSurfaceVariant: {
                    main: tokens.neutralVariant[80]
                },
            },
        },
        typography: {
            fontFamily: ["Lato", "sans-serif"].join(","),
            fontFamilyVariant: ["Abril Fatface", "cursive"].join(","),
            fontSize: 11,
            h1Variant: {
                fontFamily: ["Abril Fatface", "cursive"].join(","),
                fontSize: 48,
            },
            h1: {
                fontFamily: ["Lato", "sans-serif"].join(","),
                fontSize: 48,
            },
            h2: {
                fontFamily: ["Lato", "sans-serif"].join(","),
                fontSize: 36,
            },
            h3: {
                fontFamily: ["Lato", "sans-serif"].join(","),
                fontSize: 20,
            },
            h4: {
                fontFamily: ["Lato", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }
}
// The context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = function () {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        }
    }), []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}