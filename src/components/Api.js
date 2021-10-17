const costumFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);

class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return costumFetch(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return costumFetch(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  editProfile(data) {
    return costumFetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: data.formName,
        about: data.formAbout,
      }),
    });
  }

  addCard(data) {
    return costumFetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return costumFetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  addLike(id) {
    return costumFetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  deleteLike(id) {
    return costumFetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  updateProfileImage(data) {
    return costumFetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: data.formLink }),
    });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "f0ace597-b017-4eaf-8da3-94e369745d83",
    "Content-Type": "application/json",
  },
});