import React from "react";
import SegmentModal from "./Component/SegmentModal";
import FrontScreen from "./Component/FrontScreen";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <FrontScreen />
      <Footer/>
      {/* <SegmentModal /> */}
    </>
  );
}

export default App;
