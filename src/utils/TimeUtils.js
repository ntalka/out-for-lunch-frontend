import React from 'react';
import dayjs from "dayjs";

// Returns local time hours Hh:Mm from UTC ISOString format
export function ISOtoLocalHours (isoStr){
    const isoDate = dayjs(isoStr);
    const offset = isoDate.utcOffset()
    const localDate = isoDate.add(offset, 'm');
    return localDate.toISOString().slice(11,16);
}