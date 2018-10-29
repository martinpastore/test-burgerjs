(function () {
    document.body.classList.add('body-loader');
    this.quotes = [];
    this.c = 0;
    setTimeout(function () {
        document.getElementById('container').classList.remove('hide');
        document.getElementById('loading').classList.add('hide');
        document.body.classList.remove('body-loader');
    }, 1000);
})();
