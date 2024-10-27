import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";
import Room from "./Component/Room";
import { Toaster } from "react-hot-toast";
import Game from "./Component/Game";
function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
