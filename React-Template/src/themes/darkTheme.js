import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '', // Color principal primario
        },
        secondary: {
            main: '', // Color principal secundario
        },
        background: {
            default: '', // Color de fondo por defecto
            paper: '',  // Color de fondo de elementos como Paper y Card
        },
        text: {
            primary: '', // Color de texto principal
            secondary: '', // Color de texto secundario
        },
    },

    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Familia tipográfica por defecto
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 500,
            textTransform: 'uppercase',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // Radio de borde de los botones
                    padding: '8px 16px', // Padding de los botones
                },
                containedPrimary: {
                    // backgroundColor: '', // Color de fondo del botón contenido primario
                    // color: '', // Color de texto del botón contenido primario
                    '&:hover': {
                        // backgroundColor: '', // Color de fondo del botón al pasar el mouse
                    },
                    '&.Mui-disabled': {
                        // backgroundColor: '', // Color de fondo del botón cuando está deshabilitado
                        // color: '', // Color de texto del botón cuando está deshabilitado
                    },
                },
                outlinedPrimary: {
                    // color: '', // Color de texto del botón delineado primario
                    // borderColor: '', // Color del borde del botón delineado primario
                    '&:hover': {
                        // borderColor: '', // Color del borde del botón al pasar el mouse
                    },
                    '&.Mui-disabled': {
                        // borderColor: '', // Color del borde del botón cuando está deshabilitado
                        // color: '', // Color de texto del botón cuando está deshabilitado
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    // backgroundColor: '', // Color de fondo de la barra de aplicaciones
                    // color: '', // Color de texto de la barra de aplicaciones
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    // backgroundColor: '', // Color de fondo de los elementos de papel
                    // color: '', // Color de texto de los elementos de papel
                },
            },
        },
    },
});
