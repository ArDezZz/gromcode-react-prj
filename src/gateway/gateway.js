const baseUrl = 'https://62ea3d55ad2954632587ae6f.mockapi.io/calendar';

export const fetchEventsList = () =>
  fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => alert("Internal Server Error. Can't display events"));

export const createEvent = event =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(event),
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });
