import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  function onSearchHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={onSearchHandler}/>
      <EventList events={events} />;
    </Fragment>
  );
}

export default AllEventsPage;
