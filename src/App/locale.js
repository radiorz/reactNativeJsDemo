import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import zhCN from '../locales/zh-CN.json';
import enUS from '../locales/en-US.json';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // 不报错误,使用旧版本即可
    compatibilityJSON: 'v3',
    resources,
    lng: 'zh-CN', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'zh-CN', // default language to use, if the language is not available,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

$i18n = i18n;
console.log(JSON.stringify(i18n));
export default i18n;

export const languages = [
  {
    key: 'zh-CN',
    title: '简体中文',
  },
  {
    key: 'en-US',
    title: 'English(US)',
  },
];
