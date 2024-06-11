import React, { useState,useEffect } from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Bookself from './components/Bookself';




function App() {
  const [selectedBooks, setSelectedBooks] = useState(() => {
    const savedBooks = localStorage.getItem('selectedBooks');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
  }, [selectedBooks]);

const addBook = (book) => {
  setSelectedBooks([...selectedBooks, book]);
};

const removeBook=(removebook)=>{
  setSelectedBooks(selectedBooks.filter(book => book !== removebook));
}
  return (
   <>
   <BrowserRouter>
<Routes>
  <Route index element={<Home addBook={addBook}/>}/>
  <Route path= '/myself' element={<Bookself  selectedBooks={selectedBooks} removeBook={removeBook}/>}/>
</Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
