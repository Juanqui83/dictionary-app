import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

const basename=process.env.NODE_URL==="production" ? "/dictionary-app" : "";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {
    basename: basename,
  }
);

export default routes;
