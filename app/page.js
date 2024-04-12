"use client";

//import Nav from "./Components/nav";
import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Components/shop";
import ShopNav from "./Components/shopnav";
import App from "./app";
import ShopContextProvider from "./Components/shop-context";
import Cart from "./Components/cart";

export default function Home() {
  // let [season, setSeason] = useState("Spring");
  // let [photoSol, setPhotoSol] = useState(0);

  // let [seconds, setSeconds] = useState(new Date().getSeconds());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(new Date().getSeconds());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (seconds >= 0 && seconds < 15) {
  //     setSeason("Spring");
  //   } else if (seconds >= 15 && seconds < 30) {
  //     setSeason("Summer");
  //   } else if (seconds >= 30 && seconds < 45) {
  //     setSeason("Fall");
  //   } else {
  //     setSeason("Winter");
  //   }
  //   setPhotoSol((prevPhotoSol) => prevPhotoSol + 1);
  // }, [seconds]);

  function openShop() {
    alert("Shop is currently closed.");
  }
  
  return (
    <main>
      <div id="root">
        <ShopContextProvider>
        <Router>
          {/* <Nav season={season} photoSol={photoSol} openShop={openShop}/> */}
          <ShopNav />
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </ShopContextProvider>
      </div>
    </main>
  );
}
