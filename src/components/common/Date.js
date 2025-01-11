import dayjs from 'dayjs';

export default function unix_timeStamp_data(timestamp) {
  let date = '';
  if (timestamp !== undefined) {
    date = dayjs.unix(Number(timestamp)).format('YYYY-MM-DD');
  } else {
    date = dayjs().format('YYYY-MM-DD'); //이건 현재시간이 출력됨
  }
  console.log(date);
  return date;
}
