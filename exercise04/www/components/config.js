angular.module("app")
.value("AppPot", AppPotSDK.getService({
  url: "http://trial.apppot.net/apppot",
  appId: "jp.co.ncdc.apppot.handson",
  appKey: "52d64360acb54ffb987179f19a12e946",
  appVersion: "1.0.0",
  companyId: 9
}));