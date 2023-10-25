import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage(props) {

  return (
    <div>
      <EventList events={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800,
  };
}
