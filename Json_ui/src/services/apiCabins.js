export async function getCabins(user) {
  console.log(user);
  const basicAuth = JSON.parse(user);
  console.log(basicAuth);
  console.log(`Basic ${basicAuth.authdata}`);
  const res = await fetch("http://localhost:8080/api/cabins", {
    headers: { Authorization: `Basic ${basicAuth.authdata}` },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();
  console.log(data);

  return data;
}

//useEffect dependency arraye bak sonra(sonra)
// locale veriyi base64 ile kaydettik daha sonra contexten getUser ile useri cektik ve cabins istegi atarken kullandik. Simdi listeleniyorlar

export async function deleteCabin({ cabinName }) {
  const res = fetch(`http://localhost:8080/api/cabins/${cabinName}`);
  console.log(res);
  if (!res.ok) throw new Error("Cabin could not be deleted!");
  if (res.ok) console.log("Cabin is successfully deleted");
}

//adminle girisi hallet sonra bunu dene
