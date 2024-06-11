import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Notifications from "./components/Notifications/Notifications";
import Categories from "./components/Categories/Categories";
import Heal from "./components/Heal/Heal"
import Pension from "./components/Pension/Pension";
import Auto from "./components/Auto/Auto";
import House from "./components/House/House";
function App() {
  return (
    <body className="main_page">
      <Routes>
        
        <Route
          path="/*"
          element={
            <>
            <Header />
              <Categories />
              <Main />
              <Notifications />
            </>
          }
        />

<Route
          path="/health"
          element={
            <>
            <Header />
             <Categories />
             <Heal/>
            </>
          }
        />
        <Route
          path="/pension"
          element={
            <>
            <Header />
             <Categories />
             <Pension/>
            </>
          }
        />
         <Route
          path="/auto"
          element={
            <>
            <Header />
             <Categories />
             <Auto/>
            </>
          }
        />
  <Route
          path="/house"
          element={
            <>
            <Header />
             <Categories />
             <House/>
            </>
          }
        />
      </Routes>
    </body>
  );
}

export default App;
