import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
