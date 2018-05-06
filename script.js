new Vue({
    el: '.js-component01',
    data: {
        text: 'テクストテクスト'
    }
});

new Vue({
    el: '.js-component02',
    data: {
        text: ''
    }
});

new Vue({
    el: '.js-component03',
    data: {
        input: '',
        text: ''
    },
    methods: {
        output: function(){
            this.text = this.input;
        }
    }
});

var vm = new Vue({
    el: '.js-component20',

    data: {
        name: 'みかん',
        price: 100
    },

    computed: {
        priceWithTax: function () {
            return this.price * 1.08;
        }
    }
});