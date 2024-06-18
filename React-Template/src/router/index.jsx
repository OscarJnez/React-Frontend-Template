import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import ErrorPage from '../pages/ErrorPage'
import LandingPage from '../pages/LandingPage'
import LogInPage from '../pages/LoginPage'

const router = createBrowserRouter([

    {

        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [

            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/Login',
                element: <LogInPage />
            },

        ]

    }

])

export default router