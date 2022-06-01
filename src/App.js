import React, { useMemo, useState } from "react";

const App = () => {
  //

  const DEFAULT_BACKGROUND = useMemo(() => "bg-teal-600");
  const CLICKED_BACKGROUND = useMemo(() => "bg-violet-600");

  const [active, setActive] = useState([]);
  const [boxes, setBoxes] = useState(
    new Array(16).fill("Box").map((box, i) => {
      return {
        id: i,
        label: `${box} - ${i}`,
        clicked: false,
      };
    })
  );
  const handleOnClick = (i) => {
    let declick;
    setBoxes((boxes) => {
      const _boxes = boxes.map((b, j) => {
        if (i === j) {
          if (active.length === 2) declick = active.pop();

          setActive((A) => [b.id, ...A]);
          return { ...b, clicked: !b.clicked };
        }
        return b;
      });

      return _boxes.map((_b, i) => {
        if (_b.id === declick) return { ..._b, clicked: !_b.clicked };
        return _b;
      });
    });
  };

  return (
    <div className="bg-slate-50 p-48">
      <div className="p-10 bg-slate-100 shadow-sm">
        <div className="grid grid-cols-4 grid-rows-3 gap-1">
          {boxes.map((box, i) => (
            <div
              key={i}
              onClick={() => handleOnClick(i)}
              className={`${
                box.clicked ? CLICKED_BACKGROUND : DEFAULT_BACKGROUND
              } hover:cursor-pointer text-white font-semibold whitespace-nowrap filter hover:brightness-110 p-2`}
            >
              {box.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
