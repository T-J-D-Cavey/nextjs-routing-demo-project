import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";

function EventsSearch(props) {
  const yearInput = useRef();
  const monthInput = useRef();
  function submitHander(e) {
    e.preventDefault();
    const selectedMonth = monthInput.current.value;
    const selectedYear = yearInput.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHander}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select ref={yearInput} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select ref={monthInput} id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
}

export default EventsSearch;
