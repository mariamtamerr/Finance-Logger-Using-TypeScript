export class Render {
    constructor(heading, body) {
        this.heading = heading;
        this.body = body;
    }
    renderIt() {
        // let itemList = document.querySelector('.item-list');
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        h4.innerText = this.heading;
        li.appendChild(h4);
        let p = document.createElement('p');
        p.innerText = this.body.message();
        li.appendChild(p);
        let itemList = document.querySelector('.item-list');
        itemList.appendChild(li);
    }
}
