import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import MenDivision from './components/MenDivision.jsx';
import WomenDivision from './components/WomenDivision.jsx';

const Routes = [
  {
    path: "/",
    element: <App />, // The main App component that will hold the routes
    errorElement: <h1>Page not found</h1>, // This is optional
    children: [
      {
        path: "/",
        element: <HomePage />, // The Home page
      },
      {
        path: "/Men", // Path for MenDivision
        element: <MenDivision />,
      },
      {
        path: "/Women", // Path for WomenDivision
        element: <WomenDivision />,
      },
    ],
  },
];

export default Routes;
