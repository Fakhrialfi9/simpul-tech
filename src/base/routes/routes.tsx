import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { TaskProvider } from "../../context/formNewTask.jsx";
import { MenuProvider } from "../../context/closepopup.jsx";
import Layout from "../layout/layout.jsx";
import PagesView from "../../ui/views/pages.jsx";

const AppRoutes: React.FC = () => {
  return (
    <TaskProvider>
      <MenuProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<PagesView />} />
              <Route path='/inbox' element={<Navigate to='https://simpultech-inbox.vercel.app/' replace />} />
              <Route path='/taskmanagement' element={<Navigate to='https://simpultech-taskmanagement.vercel.app/' replace />} />
            </Route>
          </Routes>
        </Router>
      </MenuProvider>
    </TaskProvider>
  );
};

export default AppRoutes;
