export default class Card {
  constructor(artist, song, year) {
    this.artist = artist;
    this.song = song;
    this.year = year;
  }

  getArtist() {
    return this.artist;
  }

  getSong() {
    return this.song;
  }

  getYear() {
    return this.year;
  }
}