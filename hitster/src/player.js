export default class Player {
    constructor(id, num_card) {
        this.id = id;
        this.cards = [];
        this.num_card = num_card;
    }

    getID() {
        return this.id
    }

    getList() {
        return this.list;
      }
    getDeckLists() {
            var cardArray = []
            for (let card of this.cards) {
                cardArray.push(card.getList());
            }
            return cardArray;
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
}