import * as VueI18n from "vue-i18n";
import vnMessages from "./vn";
import enMessages from "./en";

const messages = {
  vn: vnMessages,
  en: enMessages,
};

const i18n = VueI18n.createI18n({
  locale: "vn",
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

export default i18n;
