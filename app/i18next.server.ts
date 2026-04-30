import { RemixI18Next } from 'remix-i18next';
import i18n from '~/i18n';
import HttpBackend from 'i18next-http-backend';
import { IS_CF_PAGES } from '~/utils/platform-adapter';
import { RemixI18NextOption } from 'remix-i18next/build/server';
import resourcesToBackend from 'i18next-resources-to-backend';
import { findLanguageJSON } from '~/languages.server';

// Used in entry.server.tsx .use() - must return the plugin constructor, not instance
export async function getPlatformBackend() {
  if (IS_CF_PAGES) {
    return HttpBackend;
  }
  return resourcesToBackend(findLanguageJSON);
}

export async function getI18NextServer() {
  const config: RemixI18NextOption = {
    detection: {
      supportedLanguages: i18n.supportedLngs,
      fallbackLanguage: i18n.fallbackLng,
    },
    i18next: {
      ...i18n,
      resources: {},
    },
    plugins: [resourcesToBackend(findLanguageJSON)],
  };
  return new RemixI18Next(config);
}

export async function getFixedT(request: Request) {
  return getI18NextServer().then((i18next) => i18next.getFixedT(request));
}
