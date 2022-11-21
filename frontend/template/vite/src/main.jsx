import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';import AboutUs from './Pages/AboutUs';
import Accountancy from './Pages/Accountancy';
import BlogGrid from './Pages/BlogGrid';
import BlogSingle from './Pages/BlogSingle';
import Calendar from './Pages/Calendar';
import Client from './Pages/Client';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import HumanRessource from './Pages/HumanRessource';
import Index from './Pages/Index';
import Mail from './Pages/Mail';
import MailSuccess from './Pages/MailSuccess';
import NotFound from './Pages/NotFound';
import Project from './Pages/Project';
import ResetPassword from './Pages/ResetPassword';
import Rgpd from './Pages/Rgpd';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Ticket from './Pages/Ticket';
import Main from './Layouts/Main';

const router = createBrowserRouter(
    [
     { path: '/', element: <Main/>, errorElement: <NotFound/> 
,children: [
{ path: '/about-us', element: <AboutUs /> },
{ path: '/accountancy', element: <Accountancy /> },
{ path: '/blog-grid', element: <BlogGrid /> },
{ path: '/blog-single', element: <BlogSingle /> },
{ path: '/calendar', element: <Calendar /> },
{ path: '/client', element: <Client /> },
{ path: '/contact', element: <Contact /> },
{ path: '/dashboard', element: <Dashboard /> },
{ path: '/human-ressource', element: <HumanRessource /> },
{ path: '/', element: <Index /> },
{ path: '/mail', element: <Mail /> },
{ path: '/mail-success', element: <MailSuccess /> },
{ path: '/not-found', element: <NotFound /> },
{ path: '/project', element: <Project /> },
{ path: '/reset-password', element: <ResetPassword /> },
{ path: '/rgpd', element: <Rgpd /> },
{ path: '/signin', element: <Signin /> },
{ path: '/signup', element: <Signup /> },
{ path: '/ticket', element: <Ticket /> },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
          <RouterProvider router={router} />
            );