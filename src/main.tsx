import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import ReviewsFeed from "./pages/ReviewsFeed.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/reviews-feed",
        element: <ReviewsFeed />,
      },
      { path: "/settings", element: <SettingsPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
