// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Play from './Pages/Play';
import Select from './Pages/Select';

function App() {
  return (
    <>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/play" element={<Play />} />
        <Route path="/select" element={<Select />} />
        <Route path="*" element={<Start />} />
      </Routes>
    </>
  );
}

export default App;
