declare global {
  interface Window {
    MAIN_API_URL: string,
    APINEWS_API_URL: string,
    MAINT_MODE: boolean,
  }
}
export const EN_LANGUAGE = 'EN';
export const constants = {
  // The default language to use when none is specified
  DEFAULT_LANGUAGE: EN_LANGUAGE,
  // The default backend url to use when none is specified
  DEFAULT_BACKEND_URL: `${window.MAIN_API_URL}/api`,
  // The default API CMS url to use when none is specified
  DEFAULT_APINEWS_BACKEND_URL: window.APINEWS_API_URL,
  MAINT_MODE: window.MAINT_MODE,
};