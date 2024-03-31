import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
    messages: '',
    flats: '',
    onSelectId: () => {},
    onClose: () => {},
    onOpen: () => {}
})

export default function AppContextProvider({children}) {
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
  const messageValues = {
    messages: sendMessage,
    flats: selectedFlat,
    onSelectId: hanldeSelectedFlatId,
    onClose: handleCloseModal,
    onOpen: handleOpenModal
  }
  return <AppContext.Provider value={messageValues}>
    {children}
  </AppContext.Provider>
}