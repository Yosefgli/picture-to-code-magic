import { HebrewCalendar, HDate, Event } from '@hebcal/core';

export const getHebrewDate = () => {
  const today = new HDate();
  return today.renderGematriya();
};

export const getParasha = () => {
  const today = new Date();
  const events = HebrewCalendar.calendar({
    year: today.getFullYear(),
    isHebrewYear: false,
    sedrot: true,
  });

  const thisWeeksParasha = events.find((ev: Event) => {
    const eventDate = ev.getDate();
    const currentDate = new HDate();
    return ev.getDesc().includes('Parashat') && 
           eventDate.abs() > currentDate.abs() && 
           ev.getDesc() !== 'Parashat';
  });

  return thisWeeksParasha ? thisWeeksParasha.render('he') : '';
};

export const getUpcomingHoliday = () => {
  const today = new Date();
  const events = HebrewCalendar.calendar({
    year: today.getFullYear(),
    isHebrewYear: false,
    noHolidays: false,
  });

  const nextHoliday = events.find((ev: Event) => {
    const eventDate = ev.getDate();
    const currentDate = new HDate();
    return eventDate.abs() > currentDate.abs() && 
           (ev.getFlags() & Event.MAJOR_HOLIDAY) !== 0;
  });

  return nextHoliday ? {
    name: nextHoliday.render('he'),
    date: nextHoliday.getDate().renderGematriya()
  } : null;
};