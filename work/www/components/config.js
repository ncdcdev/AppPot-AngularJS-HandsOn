angular.module("app")
.value("AppPot", AppPotSDK.getService({
  url: "",
  appId: "",
  appKey: "",
  appVersion: "",
  companyId: 0
}));