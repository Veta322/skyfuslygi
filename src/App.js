import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Notifications from "./components/Notifications/Notifications";
import Categories from "./components/Categories/Categories";
import Heal from "./components/Heal/Heal"
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
          path="/heal"
          element={
            <>
            <Header />
             <Categories />
             <Heal/>
            </>
          }
        />
      </Routes>
    </body>
  );
}

export default App;
