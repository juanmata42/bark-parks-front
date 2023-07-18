export type errorLang = {
    title500: string,
    description500: string,
    title404: string,
    title401: string,
    title400: string,
    description404: string,
    description401: string,
    description400: string
    reason1400: string,
    reason2400: string,
    reason1401: string,
    reason2401: string,
    reason1404: string,
    reason2404: string,
    unknownStatus: string,
    back: string,
}
export type maintenanceLang = {
    welcome: string,
    welcomeBack: string,
    underMaintenance: string,
    supportedBy: string,
    copyright: string,
    doingBestBringStable: string,
    send: string,
  }
export type MainpageLang = {
    welcome: string,
    logout: string,
}
export type headerLang = {
    home: string,
    about: string,
    kennel: string,
    pawPost: string,
    profile: string,
    shelters: string,
    login: string,
    logout: string,
    barkParks: string,
    friends: string,
    groups: string,
    settings: string,
}
export type authLang = {
    login: string,
    email: string,
    password: string,
    forgotPassword: string,
    dontHaveAccount: string,
}
export type lang = {
    maintenance: maintenanceLang;
    mainpage: mainpageLang;
    header: headerLang;
    auth: authLang;
    error: errorLang;
}
