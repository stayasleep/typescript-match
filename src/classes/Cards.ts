export interface CardsInterface {
    cards: number;
    parent: HTMLDivElement;
    init(): void;
    //interface only works with public side, not static or private
}

export class Cards implements CardsInterface{
    cards:number;
    parent: HTMLDivElement;
    static cardsClicked: number;
    static firstClicked: EventTarget; //cast below to tell TS it isnt null
    static secondClicked: EventTarget;//cast below to tell TS it isnt null

    constructor(parent: HTMLDivElement){
        //strictNullChecks, initialize static vars
        Cards.cardsClicked = 0;
        this.cards = 16;
        this.parent = parent;
    }

    public init(): void {
        this.createCards();
        this.setClickHandler();
    }

    private createCards(){
        const frag: DocumentFragment = document.createDocumentFragment();
        for(let j=0; j<this.cards; j++){
            const cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', `card-container card-${j+1}`);
            cardContainer.style.height = "50px";
            cardContainer.style.width = "30px";
            cardContainer.style.border = "2px solid blue";
            frag.appendChild(cardContainer);
        }
        this.parent.appendChild(frag);
    }

    private setClickHandler(): void{
        // const cards: HTMLDivElement[] = [];
        Array.from(document.getElementsByClassName("card-container")).forEach((card, index)=>{
            card.addEventListener("click", this.onClick);
        })
    }



    private onClick(e: Event): void{
        Cards.cardsClicked += 1;
        console.log('cards clicked : ', Cards.cardsClicked);

        if (Cards.cardsClicked === 1){
            e.preventDefault();
            Cards.firstClicked = e.target as EventTarget;
            console.log('and first clicked is now', Cards.firstClicked);
            return;
        }
        Cards.secondClicked = e.target as EventTarget;
        console.log('and first clicked is now', Cards.firstClicked);
        console.log(' and the second clicked is now ', Cards.secondClicked);
    }


}

// const x = new Cards();
// export = Cards; // means module.exports = Cards and to use import/export need node.js or webpack on the client


