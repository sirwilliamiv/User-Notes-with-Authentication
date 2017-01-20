app.factory('noteFactory', () => {
  let savedNote = []

   return {
//getter
     gettheNote: () => {
      return savedNote
      },
//setter
     addToTheList: (note) => {
        savedNote.push(note)
      },
//delete notes
      bigDelete: (value) => {
        console.log(value)
           if(savedNote.includes(value)) {
            let index = savedNote.indexOf(value)
            savedNote.splice(index, 1)
        }
      }



  }
})
