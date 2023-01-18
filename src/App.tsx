import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage, LocationsPage, MyWatchListPage, NotFoundPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<CharactersPage/>}/>
                <Route path={'characters'} element={<CharactersPage/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'locations'} element={<LocationsPage/>}/>
                <Route path={'my-watch-list'} element={<MyWatchListPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
