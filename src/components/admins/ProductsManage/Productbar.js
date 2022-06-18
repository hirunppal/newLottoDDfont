import React from "react";

function Productbar({ elpd, idx, setselected, selected }) {
  return (
    <tbody>
      <tr className=" cursor-default border-t border-slate-200/20 text-gray-200 font-light ">
        <td>{idx + 1}</td>
        <td className="  tracking-wide font-mono text-lg">{elpd.lottoNum}</td>
        <td>{elpd.lottoSet}</td>
        <td>{elpd.registerStat}</td>
        <td>{elpd.sellerId.slice(0, 5)}</td>
        <td>{elpd.prizeDate}</td>
        <td>
          <div className="flex-shrink-0 w-full h-6  transition duration-75 group-hover:text-gray-900 ">
            <input
              id={`pd-checkbox id:${elpd.id}`}
              type="checkbox"
              value=""
              className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => {
                if (e.target.checked === true) {
                  setselected((prev) => [...prev, elpd.id]);
                } else if (e.target.checked === false) {
                  setselected((prev) => {
                    const newsetlected = prev.filter((el) => el !== elpd.id);
                    console.log(newsetlected);
                    return newsetlected;
                  });
                }
              }}
            />
            <label
              htmlFor={`teal-checkbox${idx}`}
              className="ml-2 text-sm font-medium "
            >
              selects
            </label>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Productbar;
