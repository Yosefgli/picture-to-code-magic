import { HebrewCalendar, HDate, Location, Event } from '@hebcal/core';

export const getHebrewDate = () => {
  const today = new HDate();
  return today.toString('h');
};

export const getParasha = () => {
  const today = new Date();
  const events = HebrewCalendar.calendar({
    year: today.getFullYear(),
    isHebrewYear: false,
    sedrot: true,
  });

  const thisWeeksParasha = events.find((ev: Event) => {
    return ev.getDesc().includes('Parashat') && 
           ev.getDate().gt(new HDate()) && 
           ev.getDesc() !== 'Parashat';
  });

  return thisWeeksParasha ? thisWeeksParasha.render('he') : '';
};

export const getUpcomingHoliday = () => {
  const today = new Date();
  const events = HebrewCalendar.calendar({
    year: today.getFullYear(),
    isHebrewYear: false,
    holidays: true,
  });

  const nextHoliday = events.find((ev: Event) => 
    ev.getDate().gt(new HDate()) && ev.getFlags().includes('MAJOR_HOLIDAY')
  );

  return nextHoliday ? {
    name: nextHoliday.render('he'),
    date: nextHoliday.getDate().toString('h')
  } : null;
};