import dayjs from 'dayjs';

// Returns local time hours Hh:Mm from UTC ISOString format
export function ISOtoLocalHours(isoStr) {
  const isoDate = dayjs(isoStr).second(0).millisecond(0);
  const offset = isoDate.utcOffset();
  const localDate = isoDate.add(offset, 'm');
  return localDate.toISOString().slice(11, 16);
}
