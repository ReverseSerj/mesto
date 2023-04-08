export default class UserInfo {
  constructor({profileNameSelector, profileAboutSelector}) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileAboutElement = document.querySelector(profileAboutSelector);
    this._userName = '';
    this._aboutInfo = '';
  }

  getUserInfo() {
    const obj = {
      name: this._userName,
      about: this._aboutInfo
    }
    return(obj);
  }

  setUserInfo(obj) {
    this._userName = obj.name;
    this._aboutInfo = obj.about;
    this._profileNameElement.textContent = this._userName;
    this._profileAboutElement.textContent = this._aboutInfo;
  }
}
