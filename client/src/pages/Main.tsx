import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { List } from "../components/List";
import { Add } from "../components/Add";
import { Edit } from "../components/Edit";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="*" element={<Navigate to="/files" />} />
                <Route path="/files" element={<List />} />
                <Route path="/files/add" element={<Add />} />
                <Route path="/files/edit/:id" element={<Edit />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);



