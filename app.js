const App = {
    data(){
        return {
            myPlaceholder : 'Введите заметку',
            title : 'Заметки',
            inputValue : '',
            notes : []
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        }

    }
}git

Vue.createApp(App).mount("#app")