import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { arrowDown } from "../assets/arrowDown";
import { search } from "../assets/search";
import { dropdownData, tableBodyData, tableHeader } from "../data/dummy";

const Container = styled.section`
  padding: 0 2em;

  .search {
    width: 40%;
    margin-left: 3em;
    border-bottom: 0.5px solid #787878;
    padding-bottom: 0.35em;
  }

  .arrowdown {
    color: rgba(24, 117, 240, 1);
  }

  .gridTable {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr)) [line6] 50px;
  }

  .dropdown {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: 0 2px 3px 1px #ced0da;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .tableRow {
    border-bottom: 1px solid #cccfd4;

    &:nth-last-child(1) {
      border-bottom: none;
    }
  }
`;

const Input = styled.input`
  background: transparent;
  outline: none;
  width: 100%;
  margin-left: 0.5em;

  &::placeholder {
    color: rgba(120, 120, 120, 1);
  }
`;

function Payments() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("All");
  const [filteredData, setFilteredData] = useState(tableBodyData);
  const dropDownRef = useRef();

  const filterData = (value) => {
    if (value === "All") {
      setFilteredData(tableBodyData);
    } else {
      let result = tableBodyData.filter((item) => item.status === value);
      setFilteredData(result);
    }
  };

  const closeDropdown = (value) => {
    setOpenDropdown(false);
    setDropDownValue(value);
    filterData(value);
  };

  const toggleDropdown = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target) &&
        !dropDownRef.current.contains(e.currentTarget)
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  // useEffect(() => {
  //   if ()
  // })

  return (
    <Container>
      <div>
        <h1 className="w-max text-[30px]">Payments</h1>
      </div>
      <div className="flex w-full items-center my-6">
        <p className="text-grey2 text-[13px]">
          Showing <span className="arrowdown mx-2">20 {arrowDown}</span> out of
          500 payments
        </p>
        <div className="flex items-center search">
          {search}
          <Input type="text" placeholder="Search payment" />
        </div>
        <div className="flex ml-[4em] items-center text-[13px]">
          <p>Show</p>
          <div className="relative">
            <div
              className="ml-4 rounded-sm border border-borderGrey w-[150px] flex items-center justify-between pl-4 pr-2 py-1 cursor-pointer select-none"
              onClick={toggleDropdown}
              ref={dropDownRef}
            >
              {dropDownValue} {arrowDown}
            </div>

            {openDropdown && (
              <div className="dropdown absolute top-full left-0 text-left border w-[150px] ml-4 z-10 bg-white">
                {dropdownData.map((item, index) => (
                  <div
                    className="h-[33px] cursor-pointer text-tableBody hover:bg-grey4 pl-4 pr-2 py-1"
                    onClick={() => closeDropdown(item)}
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <table className="w-full text-xs">
        <thead className="bg-tableBg text-tableHeader text-sm ">
          <tr className="gridTable py-2 px-4">
            {tableHeader.map((item, index) => (
              <td
                className={`text-left ${item === "Item Type" && `col-span-2`} `}
                key={index}
              >
                {item}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <tr
              className="gridTable h-[60px] px-4 text-tableHeader tableRow cursor-pointer bg-white"
              key={index}
            >
              <td className="text-left flex items-center col-span-2 text-tableBody">
                <span>{item.icon}</span>
                <span className="ml-3">{item.name}</span>
              </td>

              <td className="text-left flex items-center">{item.price}</td>

              <td className="text-left flex items-center">
                {item.transactionNo}
              </td>

              <td className="text-left flex items-center">
                {item.status === "Reconciled" && (
                  <div className="py-2 px-4 border border-borderGrey rounded-[30px] w-[135px]">
                    <span className="bg-green rounded-full w-[9px] h-[9px] inline-block"></span>
                    <span className="text-green ml-2 text-xs">
                      {item.status}
                    </span>
                  </div>
                )}

                {item.status === "Un-Reconciled" && (
                  <div className="py-2 px-4 border border-borderGrey rounded-[30px] w-[135px]">
                    <span className="bg-grey3 rounded-full w-[9px] h-[9px] inline-block"></span>
                    <span className="text-tableHeader ml-2 text-xs">
                      {item.status}
                    </span>
                  </div>
                )}

                {item.status === "Pending" && (
                  <div className="py-2 px-4 border border-borderGrey rounded-[30px] w-[135px]">
                    <span className="bg-yellow rounded-full w-[9px] h-[9px] inline-block"></span>
                    <span className="text-yellow ml-2 text-xs">
                      {item.status}
                    </span>
                  </div>
                )}

                {item.status === "Unsettled" && (
                  <div className="py-2 px-4 border border-borderGrey rounded-[30px] w-[135px]">
                    <span className="bg-red-600 rounded-full w-[9px] h-[9px] inline-block"></span>
                    <span className="text-red-600 ml-2 text-xs">{item.status}</span>
                  </div>
                )}

                {item.status === "Settled" && (
                  <div className="py-2 px-4 border border-borderGrey rounded-[30px] w-[135px]">
                    <span className="bg-blue rounded-full w-[9px] h-[9px] inline-block"></span>
                    <span className="text-blue ml-2 text-xs">
                      {item.status}
                    </span>
                  </div>
                )}
              </td>

              <td className="text-left flex items-center">{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 mb-12 flex text-[13px] justify-between">
        {" "}
        <p className="text-grey2 text-[13px] flex">
          Showing 1 to 10 of 500 entries
        </p>
        <div className="flex rounded-sm  cursor-pointer">
          <div className="border-y border-l border-borderGrey py-1 px-2">
            Previous
          </div>
          <div className="w-[30px] bg-blue text-white py-1 px-2">1</div>
          <div className="w-[30px] text-grey5 py-1 px-2 border-r border-y border-borderGrey">
            2
          </div>
          <div className="border-y border-r border-borderGrey py-1 px-2">
            Next
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Payments;
