import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Ad from "../components/Ad";
import Table from "../components/Table";
import Chart from "../components/Charts";

const page = () => {
  return (
    <>
      <div className="flex w-[90%] mx-auto gap-3">
        <div className="w-full">
          <Cards />
          <Table />
          <Chart />
        </div>
        <Ad />
      </div>
    </>
  );
};

export default page;
