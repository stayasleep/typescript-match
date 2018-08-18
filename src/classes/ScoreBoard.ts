interface ScoreInterface {
    output: Element;
    score: number; //public; you pass this in to me
    getScore(): number;//public, you get to use this
    setScore(points: number): number;
}
class ScoreBoard implements ScoreInterface {
    output: Element;
    score: number;
    constructor(s: number){
        this.score = s;
        this.output = document.createElement('span');
    }
    init(): void{
        //get where score output should be inserted
        const scoreLabel = document.getElementsByClassName("score-label")[0];
        //prepare output element
        this.initOutput(this.output);
        //append our output element onto the container element
        scoreLabel.appendChild(this.output);
        this.adder();

        return;
    }
    initOutput(el: Element): Element {
        el.setAttribute("class", "score-field");
        el.setAttribute("style", "font-weight: 700");
        el.textContent = this.getScore().toString();
        return el;
    }
    getScore(): number {
        return this.score;
    }
    setScore(points: number) : number {
        this.score += points;
        console.log('my score ', this.score);
        this.updateOutput();
        return this.getScore();
    }
    updateOutput(){
        this.output.textContent = this.getScore().toString();
        return;
    }

    adder(){
        const d = document.getElementsByClassName("score-adder")[0];
        d.addEventListener("click", (e: Event) => this.setScore(5));
    }
}

const x = new ScoreBoard(0);
x.init();