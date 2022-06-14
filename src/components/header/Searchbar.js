import React, { useState } from "react";

import SearchBarsm from "./SearchBarsm";
import SearchBarMd from "./SearchbarMd";
import { useProduct } from "../../context/productsContext";
import { useNavigate } from "react-router-dom";
function Searchbar() {
  const [Narr, setNarr] = useState([]);

  const [searchbarState, setSearchbarstate] = useState(false);
  const { Setpdfilter } = useProduct();
  const navigate = useNavigate();
  const handleSearchhit = async () => {
    if (Narr.length < 6) {
      // console.log(Narr);
      for (let i = 0; i < 6 - Narr.length; i++) {
        setNarr((prev) => ["", ...prev]);
      }
      Setpdfilter(Narr.join(""));
      setSearchbarstate(true);
      navigate("");
    }
  };
  return (
    <div className="max-h-300">
      {searchbarState ? (
        <>
          <SearchBarMd Narr={Narr} setNarr={setNarr} />
        </>
      ) : (
        <>
          <SearchBarsm
            handleSearchhit={handleSearchhit}
            Narr={Narr}
            setNarr={setNarr}
          />
        </>
      )}
    </div>
  );
}

export default Searchbar;
