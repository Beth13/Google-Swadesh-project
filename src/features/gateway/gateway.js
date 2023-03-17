const baseUrl = "https://64087b898ee73db92e41fd49.mockapi.io/api/result";

export const createData = (data) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .catch(() => alert("Internal Server Error. Can't display data"));
