import { data } from "autoprefixer";
import { useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

function App() {
  const [showcountrymenu, setshowcountrymenu] = useState(false);
  const [showcitiesmenu, setshowcitiesmenu] = useState(false);
  const [selectedcountry, setselectedcountry] = useState("Select Country");
  const [selectedcities, setselectedcities] = useState("Select City");

  const list = [
    {
      country: "India",
      cities: ["Delhi", "Mumbai", "chennai"],
    },
    {
      country: "Nepal",
      cities: ["Kathmandu", "Pokhara", "Lumbini"],
    },
    {
      country: "Bangladesh",
      cities: ["Dhaka", "Chittagong", "Khulna"],
    },
  ];

  const countryContainerRef = useRef();
  document.addEventListener(
    "click",
    (e) => {
      if (!countryContainerRef?.current?.contains(e.target))
        setshowcountrymenu(false);
    },
    true
  );
  const cityContainerRef = useRef();
  document.addEventListener(
    "click",
    (e) => {
      if (!cityContainerRef?.current?.contains(e.target))
        setshowcitiesmenu(false);
    },
    true
  );

  const cities = list.find((i) => i.country === selectedcountry);
  console.log(cities);
  // const getcitiesrow = getcities.cities;
  const arrayofcities = cities?.cities || [];
  console.log(arrayofcities);
  return (
    <main className=" m-16 border border-2 border-b-indigo-300 rounded p-10  w-80 bg-slate-300 flex  flex-col gap-3 ">
      <h1 className=" font-medium text-2xl"> State & City Selector</h1>
      <div className=" relative">
        <div
          ref={countryContainerRef}
          onClick={() =>
            setshowcountrymenu((showcountrymenu) => !showcountrymenu)
          }
          className="  flex w-40 h-10  border items-center p-2 px-2  cursor-pointer hover:bg-slate-400 border-slate-500 rounded-xl justify-between  "
        >
          <span> {selectedcountry}</span>
          <ion-icon
            name={
              showcountrymenu ? "chevron-up-outline" : "chevron-down-outline"
            }
          ></ion-icon>
        </div>

        <ul
          className={` w-40 h-30 p-2  bg-gray-400  rounded-xl  ${
            showcountrymenu ? "block" : "hidden"
          } `}
        >
          {list.map((l) => (
            <li
              className=" hover:bg-gray-300  cursor-pointer "
              key={l.country}
              onClick={() => {
                setselectedcountry(l.country);
                setselectedcities("Select City");
                console.log(l.country);
              }}
            >
              {l.country}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div
          ref={cityContainerRef}
          onClick={() => setshowcitiesmenu((showcitiesmenu) => !showcitiesmenu)}
          className=" flex w-40 h-10  border items-center p-2 px-2 cursor-pointer  hover:bg-slate-400 border-slate-500 rounded-xl justify-between "
        >
          <span> {selectedcities}</span>
          <ion-icon
            name={
              showcitiesmenu ? "chevron-up-outline" : "chevron-down-outline"
            }
          ></ion-icon>
        </div>

        <ul
          className={` w-40 h-30   bg-gray-400 rounded-xl ${
            arrayofcities.length ? "p-2" : "p-0"
          } ${showcitiesmenu ? "block" : "hidden"}`}
        >
          {arrayofcities.map((city) => (
            <li
              className=" hover:bg-gray-300  cursor-pointer "
              key={city}
              onClick={() => {
                setselectedcities(city);

                setshowcitiesmenu(false);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
