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
        },
        removeNote(index, event){
            this.notes.splice(index, 1)
        }

    }
}

Vue.createApp(App).mount("#app")
