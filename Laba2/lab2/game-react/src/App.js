import { GamePage } from './pages/GamePage';
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<GamePage></GamePage>}></Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
