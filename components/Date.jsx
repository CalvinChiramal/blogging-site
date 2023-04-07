import dayjs from "dayjs";

const Date = ({ dateTime, format }) =>
  <time dateTime={dateTime}>{dayjs(dateTime).format(format)}</time>;

export default Date;
