import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Quotes.module.css"

function Quotes() {
  const [state, setState] = useState({
    kanyeQuote1: "",
    kanyeQuote2: "",
    kanyeQuote3: "",
    kanyeQuote4: "",
    kanyeQuote5: "",
    kanyeQuote6: "",
  });

  useEffect(() => {
    Promise.all([
      axios.get(`https://api.kanye.rest/`),
      axios.get(`https://api.kanye.rest/`),
      axios.get(`https://api.kanye.rest/`),
      axios.get(`https://api.kanye.rest/`),
      axios.get(`https://api.kanye.rest/`),
      axios.get(`https://api.kanye.rest/`),
    ]).then((all) => {
      console.log(all);
      setState((prev) => ({
        ...prev,
        kanyeQuote1: all[0].data.quote,
        kanyeQuote2: all[1].data.quote,
        kanyeQuote3: all[2].data.quote,
        kanyeQuote4: all[3].data.quote,
        kanyeQuote5: all[4].data.quote,
        kanyeQuote6: all[5].data.quote,
      }));
    });
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.quotes}>
          <div>{state.kanyeQuote1}</div>
        </div>
        <div className={classes.quotes}>
          <div>{state.kanyeQuote2}</div>
        </div>
        <div className={classes.quotes}>
          <div>{state.kanyeQuote3}</div>
        </div>
        <div className={classes.quotes}>
          <div>{state.kanyeQuote4}</div>
        </div>
        <div className={classes.quotes}>
          <div>{state.kanyeQuote5}</div>
        </div>
        <div className={classes.quotes}>
          <div>{state.kanyeQuote6}</div>
        </div>
      </div>
    </>
  );
}

export default Quotes;
