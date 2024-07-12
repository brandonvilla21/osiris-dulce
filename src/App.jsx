import { lazy } from "react";
import "./App.css";
import Welcome from "./sections/Welcome";
import Invitation from "./sections/Invitation";
import Itinerary from "./sections/Itinerary";
import Confirmation from "./sections/Confirmation";

const PhotoCollage = lazy(() => import("./sections/PhotoCollage"));

function App() {
  return (
    <>
      <Welcome />
      <Invitation />
      <Itinerary />
      <PhotoCollage />
      <Confirmation />
    </>
  );
}

export default App;
