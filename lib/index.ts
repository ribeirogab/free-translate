import * as puppeteer from 'puppeteer';

import { Language } from './types/Language';

export interface Translate {
  from: Language;
  to: Language;
}

export default async function translate(
  text: string,
  languages: Translate,
): Promise<string> {
  const browser = await puppeteer.launch();
  const { from, to } = languages;

  try {
    const page = await browser.newPage();

    let translatedText = null;
    let waitingTime = 1000;

    while (!translatedText) {
      await page.goto(
        `https://translate.google.com/?sl=${from}&text=${text}&tl=${to}`,
      );

      await page.waitForTimeout(waitingTime);

      translatedText = await page.evaluate(
        () => document?.querySelector('span[jsname=W297wb]')?.innerHTML,
      );

      waitingTime += 1000;

      if (waitingTime >= 15000) throw new Error('Timeout!');
    }

    await browser.close();

    return translatedText;
  } catch (error) {
    await browser.close();
    throw new Error(error);
  }
}
