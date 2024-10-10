import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft, FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const Paginator = ({totalPage, currentPage, setCurrentPage}) => {

  return (
    <>
      <div className="flex gap-4 mx-auto">
        <div className="flex items-center cursor-pointer text-bg" onClick={() => setCurrentPage(1)}><FaAngleDoubleLeft /></div>
        <div className="flex items-center cursor-pointer text-bg" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}><FaAngleLeft /></div>
        {Array.from({ length: totalPage }, (v, i) => i + 1).map((item, index) => (
          <div className={`border flex rounded-full w-[35px] h-[35px] p-2 text-xl justify-center items-center cursor-pointer ${currentPage === item && "bg-[blue] text-white"}`} key={index} onClick={() => setCurrentPage(item)}>{item}</div>
        ))}
        <div className="flex items-center cursor-pointer text-bg" onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}><FaAngleRight /></div>
        <div className="flex items-center cursor-pointer text-bg" onClick={() => setCurrentPage(totalPage)}><FaAngleDoubleRight /></div>
      </div>
    </>
  )
}

export default Paginator
