import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'app/i18n/en';
import si from 'app/i18n/si';

const getDeviceLocale = (callback: (lang: string) => void): void => {
    // TODO
    callback('en');
};

const languageDetector: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    detect: getDeviceLocale,
    init: () => { },
    cacheUserLanguage: () => { },
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en,
            si
        },
        react: {
            // bindI18n: "languageChanged",
            transEmptyNodeValue: '',
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;