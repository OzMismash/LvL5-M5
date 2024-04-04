import { useState, useEffect } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import CompareMode from "./components/CompareMode";
import axios from "axios";

function App() {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/notes").then((res) => {
      console.log(res?.data);
      setListings(res?.data?.data);
    });
  }, []);

  
 
 

  return (
    <>
      <HeroBanner/>
      {listings && <CompareMode dummyData={listings}/>}
      <Footer/>
    </>
  );
}

export default App;
