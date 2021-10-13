export class Api {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;        
    }
  
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers        
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }            
            return Promise.reject(`Error: ${res.status}`);
          });
      } 
  
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers 
          })
          .then(res => {
              if (res.ok) {
                return res.json();
              }            
              return Promise.reject(`Error: ${res.status}`);
            });
    } 
    
    editProfile() {
        fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
            body: JSON.stringify({
              name: "Zemira Kehati",
              about: "Web Develope Student"
            })
        }); 
    }

    addCard() {
        fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers ,
            body: JSON.stringify({
              name: "Yosemite Valley",
              link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
            })
        }); 
    }

    deleteCard() {
        fetch(`${this._url}/cards/6165e119b9c1250012049893`, {
        method: "DELETE",
        headers: this._headers,
            body: JSON.stringify({
              name: "Yosemite Valley",
              link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
            })
        }); 
    }

    addLike() {
        fetch(`${this._url}/cards/likes/6165e119b9c1250012049893`, {
        method: "PUT",
        headers: this._headers ,
            body: JSON.stringify({
              name: "Yosemite Valley",
              link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
            })
        }); 
    }

    deleteLike() {
        fetch(`${this._url}/cards/likes/6165e119b9c1250012049893`, {
        method: "DELETE",
        headers: this._headers ,
            body: JSON.stringify({
              name: "Yosemite Valley",
              link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
            })
        }); 
    }

    updateProfileImage() {
        fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers ,
            body: JSON.stringify({              
              avatar: "https://images.unsplash.com/photo-1627224282471-6c3999616a94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"
            })
        }); 
    }    
  }
  
//   const api = new Api({
//     baseUrl: "https://around.nomoreparties.co/v1/group-12",
//     headers: {
//       authorization: "f0ace597-b017-4eaf-8da3-94e369745d83",
//       "Content-Type": "application/json"
//     }
//   });
  
//    api.getInitialCards()
//    .then((result) => {
//      // process the result
//    })
//    .catch((err) => {
//      console.log(err);
//    });

//    api.getUserInfo()
//    .then((result) => {
//      // process the result
//    })
//    .catch((err) => {
//      console.log(err);
//    });

//    api.editProfile()

//    api.addCard()  

//    api.deleteCard() 

//    api.addLike() 

//    api.deleteLike()

//    api.updateProfileImage() 