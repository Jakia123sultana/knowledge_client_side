import {createBrowserRouter} from "react-router";
import RootLayout from "../Components/layouts/RootLayout";
import Banner from "../Components/shared/Banner";
import Home from "../Components/Home";
import Register from "../Components/Pages/Register";
import SignIn from "../Components/Pages/SignIn";
import CategoriesNews from "../Components/Pages/CategoriesData/CategoriesNews";
import AllPages from "../Components/Pages/AllPages";
import Posts from "../Components/shared/Posts";
import AddRoommate from "../Components/Pages/AddPost";
import MyPost from "../Components/Pages/MyPost";
import UpdatedData from "../Components/Pages/UpdatedData";
import CardDetails from "../Components/Pages/CardDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/Pages/ErrorPage";
import { knowledgeLoader } from "../knowledgeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://knowledge-server-side-chi.vercel.app/knowledges"),
      },
      {
        path: "knowledges/:category",
        Component: CategoriesNews,
        // loader: ({params}) => {
        //    return fetch(`https://knowledge-server-side-chi.vercel.app/knowledges?category=${params.category}`)

        // }
        loader: async ({params}) => {
          console.log(params);
          const res = await fetch(
            `https://knowledge-server-side-chi.vercel.app/knowledges?category=${params.category}`
          );

          return await res.json();
        },
      },
      {
        path: "/knowledges",
        Component: AllPages,
        loader:knowledgeLoader
        // loader: () =>
          // fetch(`https://knowledge-server-side-chi.vercel.app/knowledges`),
      },
        {
        path: "/knowledges/:category",
        Component: AllPages,
        loader:knowledgeLoader
        // loader: () =>
          // fetch(`https://knowledge-server-side-chi.vercel.app/knowledges`),
      },
      {
        path: "knowledges/six",
        element: <Posts />,
        loader: () =>
          fetch("https://knowledge-server-side-chi.vercel.app/knowledges/six"),
      },

      {
        path: "addPost",

        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "mypost",

        element: (
          <PrivateRoute>
            <MyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "updatedata/:id",

        loader: async ({params}) => {
          const res = await fetch(
            `https://knowledge-server-side-chi.vercel.app/knowledges/${params.id}`
          );

          return await res.json();
        },

        element: (
          <PrivateRoute>
            <UpdatedData />
          </PrivateRoute>
        ),
      },
      {
        path: "/card-details/:id",

        // element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: async ({params}) => {
          console.log(params);
          const res = await fetch(
            `https://knowledge-server-side-chi.vercel.app/knowledges/${params.id}`
          );

          return await res.json();
        },

        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
