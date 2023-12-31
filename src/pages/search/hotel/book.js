import React from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import HotelBooking from "../../../../components/SearhPage/HotelBook/HotelBooking";
import dynamic from "next/dynamic";
const book = () => {
  return (
    <div>
      <Nav />
      <HotelBooking />
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(book), { ssr: false });
