import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import ListOfFlats from "./pages/ListOfFlats/ListOfFlats";
import SelectFlat from "./pages/SelectFlat/SelectFlat";
function App() {
  const [sendMessage, setSendMessage] = useState(false)
  const [selectedFlat, setSelectedFlat] = useState(() => {
    const storedData = localStorage.getItem("selectedItems");
    return storedData ? JSON.parse(storedData) : [];
  });
  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedFlat));
  }, [selectedFlat]);

  const hanldeSelectedFlatId = (id) => {
    setSelectedFlat(id);
  };

  useEffect(() => {
    localStorage.setItem("projectData", JSON.stringify(selectedFlat));
  }, [selectedFlat]);

  const handleOpenModal = () =>{
    setSendMessage(true)
  }
  const handleCloseModal = () =>{
    setSendMessage(false)
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage sendMessage={sendMessage} onClose={handleCloseModal} onOpen={handleOpenModal}  onSelect={hanldeSelectedFlatId} items={selectedFlat} />
          }
        />
        <Route
          path="/allFlats"
          element={
            <ListOfFlats sendMessage={sendMessage} onClose={handleCloseModal} onOpen={handleOpenModal}  onSelect={hanldeSelectedFlatId} items={selectedFlat} />
          }
        />
        <Route
          path="/selectFlats"
          element={<SelectFlat sendMessage={sendMessage} onClose={handleCloseModal} onOpen={handleOpenModal}  items={selectedFlat} />}
        />
      </Routes>
    </div>
  );
}

export default App;
