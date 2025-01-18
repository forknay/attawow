export default class Player {
    constructor(id, num_card) {
        this.id = id;
        this.cards = [];
        this.num_card = num_card;

    }

    addCard(card) {
        this.cards.push(card);
        this.num_card += 1;
    }

    getCount() {
        return this.num_card;
    }
}