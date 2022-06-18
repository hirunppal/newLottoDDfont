import React, { useEffect, useState } from "react";
import { useAdmin } from "../../../context/AdminContext";
import Productbar from "./Productbar";
import { VscDebugDisconnect } from "react-icons/vsc";
import AdminAuth from "../adminAuth";

function Productlist() {
  const { ModFetchProduct } = useAdmin();
  const [allpd, setallpd] = useState([]);
  const [selected, setselected] = useState([]);

  const [blip, setblip] = useState(false);
  const { mod } = useAdmin();
  // console.log(mod);
  useEffect(() => {
    const pdallget = async () => {
      console.log("USEEFF");
      const res = await ModFetchProduct();
      setallpd(res);
      console.log(res);
    };
    pdallget();
  }, []);
  return (
    <>
      {mod ? (
        <div className="self-center w-5/6 bg-backdrop-sepia-0 bg-slate-700/90 rounded-md p-3">
          <table className="table-fixed w-full text-black text-left p-1">
            <thead>
              <tr>
                <th>Ls.</th>
                <th>LottoNum</th>
                <th>Set</th>
                <th>registerStat</th>
                <th>Seller n.</th>
                <th>prizeDate</th>
                <th className="w-20"></th>
              </tr>
            </thead>
            {allpd.map((el, id, k) => {
              return el.Products.map((elpd, idx) => {
                console.log(elpd);
                return (
                  <Productbar
                    elpd={elpd}
                    idx={idx}
                    key={idx}
                    setselected={setselected}
                    selected={selected}
                  />
                );
              });
            })}
          </table>
        </div>
      ) : (
        <>
          <div
            className="w-[2000px] absolute -ml-60 -mt-2 p-20 h-full flex justify-center z-50  bg-white/30"
            onClick={() => {
              setblip(true);
            }}
          >
            <VscDebugDisconnect
              className="cursor-pointer"
              color="#66666"
              size={400}
            />
            {blip ? (
              <>
                <AdminAuth></AdminAuth>
              </>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}

export default Productlist;
