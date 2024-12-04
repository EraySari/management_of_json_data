export async function getCabins(user) {
  const basicAuth = JSON.parse(user);
  const res = await fetch("http://localhost:8080/api/cabins", {
    method: "GET",
    headers: { Authorization: `Basic ${basicAuth.authdata}` },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}

//useEffect dependency arraye bak sonra(sonra)
// locale veriyi base64 ile kaydettik daha sonra contexten getUser ile useri cektik ve cabins istegi atarken kullandik. Simdi listeleniyorlar

export async function deleteCabin(data) {
  console.log(data.user);
  const basicAuth = JSON.parse(data.user);

  const res = await fetch(`http://localhost:8080/api/cabins/${data.cabinID}`, {
    method: "DELETE",
    headers: { Authorization: `Basic ${basicAuth.authdata}` },
  });

  if (!res.ok) throw new Error("Cabin could not be deleted!");
  if (res.ok) console.log("Cabin is successfully deleted");
}

export async function createEditCabin(cabinData, cabinID, user) {
  console.log(cabinData, cabinID, user);
  const basicAuth = JSON.parse(user);
  console.log(basicAuth);
  let res;

  // Create
  if (!cabinID) {
    res = "http://localhost:8080/api/cabins";
  }

  // Edit
  if (cabinID) {
    res = `http://localhost:8080/api/cabins/${cabinID}`;
  }

  const response = await fetch(res, {
    method: `${cabinID ? "PUT" : "POST"}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth.authdata}`,
    },
    body: JSON.stringify(cabinData),
  });

  const data = await response.json();

  return data;
}
