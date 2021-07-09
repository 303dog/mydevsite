import React, { useEffect } from "react";

function Hires() {

  useEffect(() => {
    window.location.href = "https://1000hires.com/candidates/paulbeckwith";
  }, []);

  return (
    <div className='redirect__pay'>
      <h2>You are being redirected to my "1000Hires" page</h2>
    </div>
  );
}

export default Hires;