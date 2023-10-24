import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {

    return (
      <Fragment>
        <ErrorAlert>
          <p>
            No events matching that year and date. Make sure search is valid
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredYear = Number.parseInt(filterData[0]);
  const filteredMonth = Number.parseInt(filterData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>
            No events matching that year and date. Make sure search is valid
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filterObject = {
    year: filteredYear,
    month: filteredMonth,
  };

  const events = getFilteredEvents(filterObject);
  console.log(events);
  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>
            No events matching that year and date. Make sure search is valid
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />;
    </Fragment>
  );
}

export default FilteredEventsPage;
