export default {
  supportedLngs: ['ar', 'en', 'es', 'pt', 'pt-BR'],
  fallbackLng: 'ar',
  // Disabling suspense is recommended
  react: { useSuspense: false },
  backend: {
    loadPath: '../public/locales/{{lng}}/{{ns}}.json',
  },
};
