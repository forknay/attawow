class Card {
  constructor(artist, title, year, song) {
    this.artist = artist;
    this.title = title;
    this.year = year;
    this.song = song; //15secs
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
module.exports = Card;