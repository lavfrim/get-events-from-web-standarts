import { Time } from '../types/types';

export const getTime = (): Time => {
  const now = new Date();
  return {
    day: now.getUTCDate(),
    month: now.getUTCMonth(),
    year: now.getUTCFullYear(),
  };
};

export const getIsItFutureTime = (fileName: string, time: Time): boolean => {
  const [year, month, day] = fileName.split('-');

  return +year >= time.year ? (+month >= time.month ? +day >= time.day : false) : false;
};
