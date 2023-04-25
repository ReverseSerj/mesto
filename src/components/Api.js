export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cohort = options.cohort;
    this._token = options.token;
    this._adress = `${options.baseUrl}${options.cohort}`;
    this._header =  {authorization: this._token};
    this._headerJSON = {
      authorization: this._token,
      'Content-Type': 'application/json'
    }
  }

  queryHandler(url, method = 'GET', obj) {
    let fetchConfig = {
      method: method,
      headers: this._header
    }

    if(obj) {
      fetchConfig = {
        method: method,
        headers: this._headerJSON,
        body: JSON.stringify(obj)
      }
    }

    return (fetch(`${this._adress}/${url}`, fetchConfig)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return Promise.reject(res.status);
      })
    );
  }

  getInitialCards() {
    return this.queryHandler('cards');
  }

  getProfileInfo() {
    return this.queryHandler('users/me');
  }

  patchEditPorfile(obj) {
    return this.queryHandler('users/me', 'PATCH', obj);
  }

  addNewCard(obj) {
    return this.queryHandler('cards', 'POST', obj);
  }

  delCard(id) {
    return this.queryHandler(`cards/${id}`, 'DELETE');
  }

  putLike(id) {
    return this.queryHandler(`cards/${id}/likes`, 'PUT');
  }

  takeOffLike(id) {
    return this.queryHandler(`cards/${id}/likes`, 'DELETE');
  }

  updateAvatar(obj) {
    return this.queryHandler('users/me/avatar', 'PATCH', obj);
  }
}



