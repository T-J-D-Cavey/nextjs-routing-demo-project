export async function getAllEvents() {
  const jsonData = await fetch(
    "https://practice-database-4-events-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await jsonData.json();
  const allEvents = [];
  for (const key in data) {
    allEvents.push({
      id: key,
      ...data[key]
    });
  }
  return allEvents;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }

  export async function getFilteredEvents(year, month) {
    const allEvents = await getAllEvents();
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
