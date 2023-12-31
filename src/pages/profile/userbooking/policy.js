import React from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from '../userbooking/flightbooking.module.css';
import Link from "next/link";
import { ReportProblem } from "@mui/icons-material";
import FlightBookingLeftSide from "../../../../components/Booking/FlightBooking/FlightBookingLeftSide";
import { ArrowForwardIos, Home } from "@mui/icons-material";
import Details from "../../../../components/Booking/FlightDetails/Details/Details";
const policy = () => {
  return (
    <section>
      <Nav />
      <div className={style.flightBookingTo}>
        <div className={style.fTopBar}>
        <Link href='/'>
          <span>
            <Home className={style.topIcon} />
          </span>
          <span>Home</span>
          </Link>
          <Link href='/profile'>
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Profile</span>
          </Link>
          <Link href='/profile/booking'>
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Booking</span>
          </Link>
         <Link href='/profile/userbooking/flightbooking'>
         <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Flight</span>
         </Link>
          
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>
            <span>STFL16900068481176</span>
          </span>
        </div>
      </div>

      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <FlightBookingLeftSide />
          </div>
          <div className={style.userProfileRightSide}>
        
          <div className="w-full border p-8 mb-10 mt-5">
               <h2 className="text-3xl font-bold mb-5">Cancellation Policy</h2>
              <div className="mb-3">
              <h4 className="text-xl font-bold">PENALTIES/GENERAL</h4>
               <p>1. CONDITIONS APPLY 2. CONDITIONS APPLY </p>
              </div>
              <div>
              <h4 className="text-xl font-bold">PENALTIES/GENERAL</h4>
               <p>1. CONDITIONS APPLY 2. CONDITIONS APPLY </p>
              </div>
          </div>

          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default policy;
