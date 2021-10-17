export class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {    
    return { name: this._name.textContent, job: this._job.textContent };    
  }

  setUserInfo({formName, formAbout, formLink}) {
    this._name.textContent = formName;
    this._job.textContent = formAbout;    
    this._avatar.style.backgroundImage = `url(${formLink})`;
  }
}