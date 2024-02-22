import * as dateFns from 'date-fns';

// create a date object for today
export const today = new Date();

// create a date object for the week from today
export const thisWeek = dateFns.addDays(today, 7);

// create a date object for the month from today
export const thisMonth = dateFns.addMonths(today, 1);

// create a date object for the year from today
export const thisYear = dateFns.addYears(today, 1);


// find the 3 closest tasks to today
