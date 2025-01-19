export default class Player {
    constructor(id, num_card) {
        this.id = id;
        this.cards = [];
        this.num_card = num_card;
    }

    getID() {
        return this.id
    }

    addCard(pos, card) {
        this.cards.splice(pos, 0, card);
        this.num_card += 1;
    }

    getCount() {
        return this.num_card;
    }

    getDeck() {
        return this.cards;
    }

    getDeckLists() {
        var cardArray = []
        for (let card of this.cards) {
            if (card != null) {
                cardArray.push(card.getList());
            }
        }
        return cardArray;
    }
}