import NameInput from "./components/NameInput/NameInput"
import Topic from "./components/Topic/Topic";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Chat from "./pages/Chat";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NameInput />} />
        <Route path="topic" element={<Topic />} />
        <Route path="chat" element={<Chat />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
