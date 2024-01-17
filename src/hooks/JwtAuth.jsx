export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://food-review-server-zeta.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
    });
};
