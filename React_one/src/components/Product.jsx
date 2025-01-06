import React from 'react';
import Button from './Button';

function Product({ val, mover, count, isHovered, onMouseLeave }) {
  return (
    <div
      onMouseEnter={() => mover(count)}
      onMouseLeave={onMouseLeave}
      className="w-full py-20 h-[23rem] text-white transition-all duration-300"
      style={{
        backgroundColor: isHovered ? val.bgcolor : "transparent",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-base">{val.description}</p>
          <div className="flex items-center justify-between gap-5">
            {val.live && <Button title="Case Study" />}
            {val.case && <Button title="TOKENOMICS" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
