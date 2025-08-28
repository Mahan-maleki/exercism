// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  let set = new Set(playlist);
  return Array.from(set)
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  // return playlist.includes(track);   => this way, don't uses the sets features
  const set = new Set(playlist);
  return set.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let set = new Set(playlist);
  let exists = set.has(track);

  if (exists) {
    return Array.from(set);
  } else {
    set.add(track)
    return Array.from(set)
  }
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let set = new Set(playlist);
  let exists = set.has(track);

  if (exists) {
    set.delete(track);
    return Array.from(set)
  } else {
    return Array.from(set)
  }
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artistsSet = new Set();

  for (const track of playlist) {
    const artist = track.split(" - ")[1];
    artistsSet.add(artist);
  }

  return Array.from(artistsSet);
}
