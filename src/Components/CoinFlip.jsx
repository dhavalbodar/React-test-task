import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const CoinFlip = () => {
  const { flipsList } = useSelector((state) => state.headAndTail);
  const columnsList = useMemo(() => {
    const columns = [];
    flipsList.forEach((flip, index) => {
      if (index === 0 || flip !== flipsList[index - 1]) {
        columns.push([flip]);
      } else {
        columns[columns.length - 1].push(flip);
      }
    });
    return columns;
  }, [flipsList]);

  return (
    <div style={{ display: "flex" }}>
      {columnsList.map((column, index) => (
        <div key={index} style={{ marginLeft: "20px" }}>
          {column.map((flip, flipIndex) => (
            <div key={flipIndex}>{flip}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CoinFlip;
