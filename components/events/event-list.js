import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
  const { events } = props;


  if(!events) {
    return <h1>Getting Data. Refresh if still showing after a few seconds.</h1>
  }
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          img={event.image}
          date={event.date}
        />
      ))}
    </ul>
  );
}

export default EventList;
