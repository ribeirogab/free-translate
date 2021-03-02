import * as Nightmare from 'nightmare';

import { Language } from './types/Language';

export interface Translate {
  from: Language;
  to: Language;
}

export async function translate(
  text: string,
  languages: Translate,
): Promise<string> {
  const nightmare = new Nightmare({ ignoreDownloads: true });
  const { from, to } = languages;
  const url = `https://translate.google.com/?sl=${from}&text=${text}&tl=${to}`;

  try {
    const translatedText = await nightmare
      .goto(url)
      .wait('span[jsname=W297wb]')
      .evaluate(() => document.querySelector('span[jsname=W297wb]').textContent)
      .end();

    if (!translatedText) throw new Error('Unable to translate.');

    return translatedText.toString();
  } catch (error) {
    throw new Error(error);
  }
}
