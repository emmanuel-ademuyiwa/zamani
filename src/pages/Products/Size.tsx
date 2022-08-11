import React, { useState } from 'react'
import SizeDetail from './SizeDetail';

const Size = () => {
    const [xs, setXS] = useState(false);
    const [s, setS] = useState(false);
    const [m, setM] = useState(false);
    const [l, setL] = useState(false);
    const [xl, setXL] = useState(false);

    function handleXS() {
      setXS(!xs);
      setS(false);
      setM(false);
      setL(false);
      setXL(false);
    }
    function handleS() {
      setS(!s);
      setXS(false);
      setM(false);
      setL(false);
      setXL(false);
    }
    function handleM() {
      setM(!m);
      setS(false);
      setXS(false);
      setL(false);
      setXL(false);
    }
    function handleL() {
      setL(!l);
      setS(false);
      setXS(false);
      setM(false);
      setXL(false);
    }
    function handleXL() {
      setXL(!xl);
      setS(false);
      setXS(false);
      setM(false);
      setL(false);
    }
  return (
    <div className="size">
      <h5>Size</h5>
      <div className="size-container">
        <h6
          className={xs ? "each-size active" : "each-size"}
          onClick={handleXS}
        >
          xs
        </h6>
        <h6 className={s ? "each-size active" : "each-size"} onClick={handleS}>
          s
        </h6>
        <h6 className={m ? "each-size active" : "each-size"} onClick={handleM}>
          m
        </h6>
        <h6 className={l ? "each-size active" : "each-size"} onClick={handleL}>
          l
        </h6>
        <h6
          className={xl ? "each-size active" : "each-size"}
          onClick={handleXL}
        >
          xl
        </h6>
        {/* <h6 className="each-size">1-4xl</h6> */}
      </div>
      {xs && <SizeDetail text="25.6inch / 65cm" />}
      {s && <SizeDetail text="27.2inch / 69cm" />}
      {m && <SizeDetail text="28.7inch / 73cm" />}
      {l && <SizeDetail text="30.7inch / 78cm" />}
      {xl && <SizeDetail text="32.7inch / 83cm" />}
      {/* <SizeDetail text="25.6inch / 65cm" /> */}
    </div>
  );
}

export default Size