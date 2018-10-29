checkEnter = function(e) {
    if (e.key === 'Enter') {
        this.submit(document.getElementById('quote').value);
    }
};

submit = function(text) {
    this.quotes.push(text);
    let count = 0;
    for (let i in this.quotes) {
        if (i >= this.c) {
            this.render(`<div class="large-3 columns container__panels-container-element">
            <div class="callout large primary" data-closable="slide-out-up">
                <p>${this.quotes[i]}</p>
                <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div>`);
        }
        count++;
    }
    this.c = count;
};

render = function(html) {
    document.getElementById(`panels`).innerHTML += html;
};