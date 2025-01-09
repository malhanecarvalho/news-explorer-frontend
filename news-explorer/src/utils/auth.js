const AUTH_BASE_URL = "http://localhost:3000";

export const register = async ({ email, password, username }) => {
  return fetch(`${AUTH_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "Application/json",
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });
};

export const login = async ({ email, password }) => {
  return fetch(`${AUTH_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "Application/json",
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = async (token, _id) => {
  return fetch(`${AUTH_BASE_URL}/users/me/${_id}`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
