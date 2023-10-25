import { Fragment } from "react";
import { getFeaturedEvents, getEventById } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        address={event.location}
        imgAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({params: {eventId: event.id}}));

  return {
    paths: paths,
    fallback: true
  };
}
