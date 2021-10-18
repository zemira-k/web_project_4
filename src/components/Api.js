const costumFetch = (url, options) =>
  fetch(url, options)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))    

class Api {
  constructor({ baseUrl, options }) {
    this._url = baseUrl;
    this._options = options;
  }

  getInitialCards() {
    return costumFetch(`${this._url}/cards`, {
      headers: this._options,
    });
  }

  getUserInfo() {
    return costumFetch(`${this._url}/users/me`, {
      headers: this._options,
    });
  }

  editProfile(data) {
    return costumFetch(`${this._url}/users/me`, {
      headers: this._options,
      method: "PATCH",
      body: JSON.stringify({
        name: data.formName,
        about: data.formAbout,
      }),
    });
  }

  addCard(data) {
    return costumFetch(`${this._url}/cards`, {
      headers: this._options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return costumFetch(`${this._url}/cards/${id}`, {
      headers: this._options,
      method: "DELETE",
    });
  }

  addLike(id) {
    return costumFetch(`${this._url}/cards/likes/${id}`, {
      headers: this._options,
      method: "PUT",
    });
  }

  deleteLike(id) {
    return costumFetch(`${this._url}/cards/likes/${id}`, {
      headers: this._options,
      method: "DELETE",
    });
  }

  updateProfileImage(data) {
    return costumFetch(`${this._url}/users/me/avatar`, {
      headers: this._options,
      method: "PATCH",
      body: JSON.stringify({avatar: data}),
    });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  options: {
    authorization: "f0ace597-b017-4eaf-8da3-94e369745d83",
    "Content-Type": "application/json",
  },
});