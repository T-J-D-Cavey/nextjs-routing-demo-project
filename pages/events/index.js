import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage(props) {
  const router = useRouter();

  const events = props.events;

  function onSearchHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList events={events} />;
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
