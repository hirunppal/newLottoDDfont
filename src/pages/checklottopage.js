import ProductHero from "../components/ProductBody/productHero";
// import Lotto2DayClient from "lotto2day-client";
import { useEffect } from "react";
import axios from "axios";
function Checklottopage() {
  // console.log("Hilotto");
  // useEffect(() => {
  // const lottocall = async () => {
  //   const TOKEN =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhZmVkMjQ3Ni0xNzM2LTQ3ZGYtYWE1NS1hZTBkYjM0OTM4ZGMiLCJ1c2VybmFtZSI6InB1YmxpYyIsImVtYWlsIjoicHVibGljQHBlbmdicm9zLmNvbSIsInBlcm1pc3Npb24iOlsicmVhZCJdLCJpYXQiOjE1MjIwNTIwNDB9.KOtK1swODnDfWWJpUZmrtCmZH8rSdL3J1tibUHzFcPs";
  //   await Lotto2DayClient.setToken(TOKEN);
  //   await Lotto2DayClient.prize("2019-07-01").then((prizes) => {
  //     console.log(JSON.stringify(prizes));
  //   });
  //   console.log(Lotto2DayClient.prize);
  // };
  // lottocall();
  //   const lottocoTh = async () => {
  //     const config = {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       },
  //     };

  //     const res = await axios.get(
  //       "https://www.lottery.co.th/lotto/feed",
  //       config
  //     );
  //     console.log(res);
  //     console.log("res");
  //   };
  //   lottocoTh();
  // }, []);
  return (
    <>
      {/* <iframe
        src="https://www.lottery.co.th/small"
        width="210"
        height="290"
        frameborder="0"
      ></iframe> */}
      <div className="bg-white mx-32 mb-20">
        <iframe
          src="https://www.lottery.co.th/share"
          width="100%"
          height="650"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}
export default Checklottopage;
// skio it illtry scrape way
