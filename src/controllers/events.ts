import { Response, Request } from 'express';
import { getEventsList } from '../services/events';
import { getTable } from '../utils/html';
import { getTableConfig } from '../utils/parsers';
import { tableStyles } from '../constants/styles';

export const getNewEvents = async (req: Request, res: Response) => {
  try {
    const newEventsInfo = await getEventsList();
    res.json(newEventsInfo);
  } catch (err) {
    res.json(err);
  }
};

export const getNewEventsTable = async (req: Request, res: Response) => {
  try {
    const newEventsInfo = await getEventsList();
    const tableConfig = getTableConfig(newEventsInfo);
    const eventTable = getTable(tableConfig, tableStyles);
    res.header('html');
    res.send(eventTable);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
