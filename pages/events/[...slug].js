import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {
  if (props.hasError) {
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

  console.log(props);
  const date = new Date(props.year, props.month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={props.events} />;
    </Fragment>
  );
}

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = Number.parseInt(filterData[0]);
  const filteredMonth = Number.parseInt(filterData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  )
    return {
      props: {
        hasError: true,
      },
    };

  const filteredEvents = await getFilteredEvents(filteredYear, filteredMonth);

  return {
    props: {
      events: filteredEvents,
      year: filteredYear,
      month: filteredMonth,
    },
  };
}
