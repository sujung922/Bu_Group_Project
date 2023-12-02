import { Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
    </Routes>
  );
};

export default Router;
