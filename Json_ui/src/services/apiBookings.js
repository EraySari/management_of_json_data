export async function getBookings(user) {
  const userData = JSON.parse(user);

  const res = await fetch("http://localhost:8080/api/booking", {
    method: "GET",
    headers: { Authorization: `Basic ${userData.authdata}` },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }
  const data = await res.json();

  return data;
}

export async function deleteBooking(user, bookingID) {
  console.log(user, bookingID);
  const userData = JSON.parse(user);

  const res = await fetch(`http://localhost:8080/api/booking/${bookingID}`, {
    method: "DELETE",
    headers: { Authorization: `Basic ${userData.authdata}` },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }

  console.log("succes");
}

export async function getBooking(user, bookingID) {
  const userData = JSON.parse(user);
  console.log(userData);
  const res = await fetch(`http://localhost:8080/api/booking/${bookingID}`, {
    method: "GET",

    headers: { Authorization: `Basic ${userData.authdata}` },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();

  console.log(data);

  return data;
}
