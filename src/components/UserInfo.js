export default class UserInfo {
  constructor({profileNameSelector, profileAboutSelector, profileAvatarSelector}, patchEditPorfile, updateAvatar) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileAboutElement = document.querySelector(profileAboutSelector);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
    this._patchEditPorfile = patchEditPorfile;
    this._serverUpdateAvatar = updateAvatar;
  }

  getUserInfo() {
    const obj = {
      name: this._name,
      about: this._about
    }
    return(obj);
  }

  _updateAvatar() {
    this._profileAvatarElement.src = this._avatar;
  }

  _updateName() {
    this._profileNameElement.textContent = this._name;
  }

  _updateAbout() {
    this._profileAboutElement.textContent = this._about;
  }

  updateUserInfo(obj) {
    this._name = obj.name;
    this._id = obj._id;
    this._about = obj.about;
    this._avatar = obj.avatar;
    this._cohort = obj.cohort;

    this._updateAvatar();
    this._updateName();
    this._updateAbout();
  }

  setAvatar(obj) {
    return this._serverUpdateAvatar(obj)
    .then(obj => {
      this._avatar = obj.avatar;
      this._updateAvatar();
    })
  }

  setUserInfo(obj) {
    return this._patchEditPorfile(obj)
    .then(obj => {
      this._name = obj.name;
      this._about = obj.about;
      this._updateName();
      this._updateAbout();
    })
  }

  getId() {
    return this._id;
  }
}
