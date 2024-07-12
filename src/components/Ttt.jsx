import React, { useState } from "react";
import Use_ttt from "../hooks/Use_ttt";


function Ttt() {
    const {board, resetBoard, HandleClick, getStatusMessage} = Use_ttt();

  return (
    <div className="game w-full h-screen relative bg-cover bg-[url('https://images.unsplash.com/photo-1533654238074-8841f6e8e610?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxnYW1pbmclMjB3YWxsbHBhcGVycyUyMDRLfGVufDB8MHwwfHx8MA%3D%3D')]">
      <div className="absolute w-[20vw] h-[50vh] bg-[#01063F] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-xl">
        <div className="turn  flex gap-[2rem] w-full mt-[5vh] justify-center items-center">
          <h3 className="border-[2px] border-zinc-800 rounded p-[0.5vh] bg-slate-200">
            {getStatusMessage()}
          </h3>
          <button
            className="reset-game border-[2px] border-zinc-800 rounded-xl p-[0.5vh] bg-[#E7E6EB]"
            onClick={resetBoard}
          >
            Reset
          </button>
        </div>
        <div className="board bottom-0 grid grid-cols-3 mt-[5vw] mx-[2vw]">
          {board.map((_, index) => {
            return (
              <button
                className="cell border-[1px] border-zinc-800 p-[0.5vh] bg-[#E7E6EB] h-[4rem] font-semibold text-xl"
                key={index}
                onClick={()=>{HandleClick(index)}}
              >
                {board[index]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ttt;
