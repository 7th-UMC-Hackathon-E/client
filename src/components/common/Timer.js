import dayjs from 'dayjs';

export default function unix_timeStamp(timestamp) {
  let date = '';
  if (timestamp !== undefined) {
    date = dayjs.unix(Number(timestamp)).format('HH:mm:ss');
  } else {
    date = dayjs().format('HH:mm:ss'); //이건 현재시간이 출력됨
  }
  return date;
}
