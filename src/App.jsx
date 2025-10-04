import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from './routes';

// router to navigate through the app
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;