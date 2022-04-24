import { ErrorDictionary, ErrorMessageCode, ErrorMessage } from '@/lib/types';
import { jaErrorMessages } from './ja';
// import {} from './en';

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

export const generateErrorMessage = (
  nuxtStatusCode?: number,
  errorCode?: ErrorMessageCode,
  locale: string = 'ja'
): ErrorMessage => {
  console.log(`nuxtStatusCode${nuxtStatusCode}`);
  console.log(`errorCode${errorCode}`);
  const localeMessage = findMessageByLocale(locale);
  const messages = errorCode ? localeMessage.get(errorCode) : undefined;
  if (messages) return messages;

  return (
    localeMessage.get(`${nuxtStatusCode}` as ErrorMessageCode) ??
    localeMessage.get('default')!
  );
};
