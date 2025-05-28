import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "../views/Home";
import SearchResults from "@/views/SearchResults";
import RoomDetail from "@/views/RoomDetail";
import NotFound from "@/views/NotFound";

export default function AppRouter() {
  return (
    <Routes>

      {/* Ruta a Home */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* Ruta a SearchResults */}
      <Route
        path="/search"
        element={
          <MainLayout>
            <SearchResults />
          </MainLayout>
        }
      />

      {/*Ruta a RoomDetail*/}
      <Route
      path="/roomdetail"
      element={
        <MainLayout>
          <RoomDetail/>
        </MainLayout>
      }
      />

     {/* Ruta a NotFound 404 */}
      <Route
        path="*"
        element= {
            <MainLayout>
                <NotFound/>
            </MainLayout>
        }
      />


    </Routes>
  );
}
