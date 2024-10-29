// formdan mutate fonkisyonunu cagiriyoruz, mutate ise setUser fonksiyonuna gidiyor parametreyle birlikte
//useMutatoin fonksiyonunun faydalari, mutationFn veriyoruz
//basarili olursa onSucces basarisiz olursa onError dönüyo ve heryerden cagirabiliriz

/* eslint-disable no-unused-vars */
export async function userSignup(name, username, password, email) {
  //bu fonksiyonda database'e ekleme yapilacak
  console.log(name, username, password, email);

  const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, username, password, email),
  });

  if (!response.ok) {
    throw new Error("Post edilemedi");
  }

  return response.json();
}

export default async function userLogin(username, password) {
  console.log(username, password);
  const res = await fetch("http://localhost:8080/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(username, password),
  });

  if (!res.ok) {
    throw new Error("Login olmadi");
  }
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
}
