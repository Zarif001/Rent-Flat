import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import ListOfFlats from "./pages/ListOfFlats/ListOfFlats";
import SelectFlat from "./pages/SelectFlat/SelectFlat";
import AppContextProvider from "./store/AppContex";

function App() {
  return (
    <AppContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/allFlats" element={<ListOfFlats />} /> */}
          {/* <Route path="/selectFlats" element={<SelectFlat />} /> */}
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
