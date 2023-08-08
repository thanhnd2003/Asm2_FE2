import { RouterProvider } from "react-router-dom";
import FooterComponent from "./pages/admin/Footer";
import HeaderComponent from "./pages/admin/Header";
import { router } from "./routes";

function App() {
  return (
    <>
    <HeaderComponent />
      <RouterProvider router={router}></RouterProvider>
    <FooterComponent/>
    </>
  );
}

export default App;
