export default class Card {
  constructor(artist, title, year, song) {
    this.artist = artist;
    this.title = title;
    this.year = year;
    this.song = song; //15secs
    this.list = {artist: this.artist, title: this.title, year: this.year};
  }

  getList() {
    return this.list;
  }

  getArtist() {
    return this.artist;
  }

  getTitle() {
    return this.title;
  }

  getYear() {
    return this.year;
  }

  playSong() {
    console.log("Song plays")
  }

}