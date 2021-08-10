import { Router } from 'express';
import { getNewEvents, getNewEventsTable } from '../controllers/events';

export const events = Router();

events.route('/').get(getNewEvents);

events.route('/table').get(getNewEventsTable);
