import {format, fromUnixTime} from 'date-fns';
import {ru} from 'date-fns/locale';

export const formatedTime = (time: any) => {
  return format(fromUnixTime(time), 'HH:mm', {locale: ru});
};