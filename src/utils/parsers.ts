import { TableConfig } from '../types/types';

export const parserRawEventData = (rawData: string): string[][] =>
  rawData
    .split('\n')
    .map((data) => data.split(': '))
    .slice(0, -1);

export const getTableConfig = (rawEventData: string[][][]): TableConfig => {
  let fullEventIndex = 0;
  rawEventData.forEach((event) => event.length > rawEventData[fullEventIndex].length);
  const header = rawEventData[fullEventIndex].map((cell) => cell[0]);
  return {
    header: header.map((title) => title[0].toUpperCase() + title.slice(1)),
    body: rawEventData.map((event) => {
      return header.map((title) => {
        const cellArray = event.find((cell) => title === cell[0]);
        return cellArray ? cellArray[1] : '';
      });
    }),
  };
};
