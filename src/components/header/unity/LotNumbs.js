import LottonumBox from "./LottonumBox";

import React, { useState } from "react";

function LottoNumbs() {
  const [N1, setn1] = useState("");
  const [N2, setn2] = useState("");
  const [N3, setn3] = useState("");
  const [N4, setn4] = useState("");
  const [N5, setn5] = useState("");
  const [N6, setn6] = useState("");
  return (
    <div>
      <h1>ค้นหาเลขสวย ถูกใจ !!</h1>
      <div className="w-800px flex flex-row justify-start ">
        <LottonumBox value={N1} setvaluestate={setn1} />
        <LottonumBox value={N2} setvaluestate={setn2} />
        <LottonumBox value={N3} setvaluestate={setn3} />
        <LottonumBox value={N4} setvaluestate={setn4} />
        <LottonumBox value={N5} setvaluestate={setn5} />
        <LottonumBox value={N6} setvaluestate={setn6} />
      </div>
    </div>
  );
}

export default LottoNumbs;
