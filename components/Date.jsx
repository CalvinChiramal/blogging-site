import dayjs from "dayjs";

const Date = ({ dateTime, format }) => (
  <time className="text-gray-600 dark:text-purple-300" dateTime={dateTime}>
    {dayjs(dateTime).format(format)}
  </time>
);

export default Date;
