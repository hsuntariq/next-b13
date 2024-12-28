"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    if (e.target.value == "") {
      params.delete("q");
    } else {
      params.set("q", e.target.value);
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="p-1 px-3 text-gray-300 outline-none rounded-md bg-[#2E374A] "
      />
    </>
  );
};

export default Search;
