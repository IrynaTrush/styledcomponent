import React from 'react'


import Home from './pages/homepage';
import SignUp from './pages/signup';



export const routes = [
    /*{
        path: "/routing/photos",
        component: <Photos/>
    },*/
   
    {
        path: "/styledcomponent/",
        component: <Home/>, 
        exact: true
    },
    {
        path: "/styledcomponent/signup",
        component: <SignUp/>
    },
    {
        path: '*',
        component: () => ( <div>page not found 404</div>)
    },
   
]