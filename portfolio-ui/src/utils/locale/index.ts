import { ErrorDictionary, ErrorMessageCode, ErrorMessage } from '@/lib/types';
import { jaErrorMessages } from './ja';

const findMessageByLocale = (locale: string): ErrorDictionary => {
  switch (locale) {
    case 'ja':
      return jaErrorMessages;
    // case 'en':
    //   return enErrorMessage;
    default:
      return jaErrorMessages;
  }
};

/**
 * @desc ErrorMessage 生成のハンドラー
 */
export const generateErrorMessage = (
  nuxtStatusCode?: number,
  errorCode?: ErrorMessageCode,
  locale: string = 'ja'
): ErrorMessage => {
  const localeMessage = findMessageByLocale(locale);
  const messages = errorCode ? localeMessage.get(errorCode) : undefined;
  if (messages) return messages;

  return (
    localeMessage.get(`${nuxtStatusCode}` as ErrorMessageCode) ??
    localeMessage.get('default')!
  );
};
