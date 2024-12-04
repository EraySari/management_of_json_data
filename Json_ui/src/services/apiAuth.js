// formdan mutate fonkisyonunu cagiriyoruz, mutate ise setUser fonksiyonuna gidiyor parametreyle birlikte
//useMutatoin fonksiyonunun faydalari, mutationFn veriyoruz
//basarili olursa onSucces basarisiz olursa onError dönüyo ve heryerden cagirabiliriz

/* eslint-disable no-unused-vars */
export async function userSignup(data) {
  //bu fonksiyonda database'e ekleme yapilacak
  console.log("Data", data);

  const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Post edilemedi");
  }

  return response.json();
}

export default async function userLogin({ username, password }) {
  console.log({ username, password });

  const res = await fetch("http://localhost:8080/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Login olmadi");
  }

  const data = await res.json();

  return { data, password };
}

// 1 - localden user'i getir
// 2 - istek atarken headers icinde kullan
