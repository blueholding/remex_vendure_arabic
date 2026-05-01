import { RemixI18Next } from 'remix-i18next';
import i18n from '~/i18n';
import resourcesToBackend from 'i18next-resources-to-backend';
import { findLanguageJSON } from '~/languages.server';

export async function getI18NextServer() {
  return new RemixI18Next({
    detection: {
      supportedLanguages: i18n.supportedLngs,
      fallbackLanguage: i18n.fallbackLng,
    },
    i18next: {
      ...i18n,
    },
    plugins: [resourcesToBackend(findLanguageJSON)],
  });
}

export async function getFixedT(request: Request) {
  return getI18NextServer().then((i18next) => i18next.getFixedT(request));
}
