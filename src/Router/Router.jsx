import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Pages/Root/Root';

const router = createBrowserRouter([
    {
        path:'',
        element:<Root/>
    }
])

export default router;