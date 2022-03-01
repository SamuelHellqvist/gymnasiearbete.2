
export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            controll: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset")

        };

        console.log(this.el);
    }

    static getHTML(){
        return `
            <span class="timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part--seconds">00</span>
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">start</button>
            <button type="button" class="timer__btn timer__btn--reset">set</button>
        `;
    }
}
