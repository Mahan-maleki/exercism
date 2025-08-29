// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
  let appointment = new Date(now);

  appointment.setDate(appointment.getDate() + days);

  return appointment
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let timestampDate = new Date(timestamp);
  
  return {year: timestampDate.getFullYear(), month: timestampDate.getMonth(), date: timestampDate.getDate(), hour: timestampDate.getHours(), minute: timestampDate.getMinutes()}
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(appointment, options = {}) {
  let date = new Date(appointment);

  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  
  if (options.month !== undefined) {
    date.setMonth(options.month);
  }
  
  if (options.date !== undefined) {
    date.setDate(options.date);
  }
  
  if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  
  if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}


/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(t1, t2) {
  const d1 = new Date(t1);
  const d2 = new Date(t2);

  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  const diffSec = diffMs / 1000;

  return Math.round(diffSec);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointment, now) {
  const appTime = new Date(appointment).getTime();
  const nowTime = new Date(now).getTime();

  return appTime > nowTime;
}
