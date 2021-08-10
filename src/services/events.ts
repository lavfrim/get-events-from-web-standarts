import { Octokit } from '@octokit/core';
import { decode } from 'js-base64';
import { urlRepoCalendar } from '../constants/github';
import { getIsItFutureTime, getTime } from '../utils/time';
import { parserRawEventData } from '../utils/parsers';

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });
const time = getTime();

export const getEventsList = async () => {
  const res = await octokit.request(urlRepoCalendar);
  const eventsFolder = res.data.find((repo) => repo.name === 'events');

  const response = await octokit.request(eventsFolder.git_url);
  const newEvents = response.data.tree.filter((event) => getIsItFutureTime(event.path, time));

  const newEventsRawData = (await Promise.all(
    newEvents.map(async (event) => {
      const response = await octokit.request(event.url);
      return decode(response.data.content);
    }),
  )) as string[];

  return newEventsRawData.map((rawData) => parserRawEventData(rawData));
};
