import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";
import Room from "./Component/Room";
import { Toaster } from "react-hot-toast";
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
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
