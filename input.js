export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e=> {
            if ((   e.key === 'a' ||
                    e.key === 'd' ||
                    e.key === 'e' ||
                    e.key === 's' ||
                    e.key === ' '
            ) && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            }
        });
        window.addEventListener('keyup', e=> {
            if (e.key === 'a' ||
                e.key === 'd' ||
                e.key === 'e' ||
                e.key === 's' ||
                e.key === ' ') {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}