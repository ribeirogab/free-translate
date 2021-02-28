import { Translate } from './lib';

declare module 'free-translate' {
  export function translate(data: Translate): Promise<string>;
}
