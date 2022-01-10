const app = Vue.createApp({
    data() {
        return {
            name: 'Kateryna',
            age: '29',
            imgLink: 'https://ru.vuejs.org/images/logo.png'
        }
    },
    methods: {
        futureAge() {
            return Number(this.age) + 5;
        },
        randomNumber() {
            return Math.random()
        }
        

    }
});

app.mount('#assignment');