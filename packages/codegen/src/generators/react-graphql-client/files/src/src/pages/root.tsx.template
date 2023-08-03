import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Module from './module';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<Track />} path="/track/:trackId" />
        <Route element={<Module />} path="/track/:trackId/module/:moduleId" />
      </Routes>
    </BrowserRouter>
  );
}
