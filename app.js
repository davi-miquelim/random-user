const app = Vue.createApp({

    data() {
        return{
            firstName: 'Davi',
            lastName: 'Miquelim',
            email: 'davichelimiquelim@gmail.com',
            gender: 'male',
            picture: "https://media-exp1.licdn.com/dms/image/C4E03AQFFQCRj0o-K_w/profile-displayphoto-shrink_200_200/0/1611692785851?e=1620259200&v=beta&t=z-x09HFIyIaKuzotSrDQHiTbNS6UNnnGWvMNdWPI4Ds",        }
    },
    methods: {
        async getUser(){
            const res = await fetch("https://randomuser.me/api")
            const {results} = await res.json()

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')