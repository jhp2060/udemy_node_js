const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
} 

const addNote = (title, body) => {
    const notes = loadNotes()
    // '.filter()' returns an array of instances
    // '.find()' returns the first instance from the array that satisfies the condition
    const duplicateNote = notes.find((note)=> note.title === title)

    if (duplicateNote === undefined) {
        // conducted like "append", not "write"
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    
    const notes = loadNotes()
    // const toDelete = notes.find(function (note) {
    //     return note.title === title
    // })
    // if (toDelete) {
    //     notes.splice(notes.indexOf(toDelete), 1)
    //     saveNotes(notes)
    //     console.log('Successfully deleted!')
    // } else {
    //     console.log('No notes to delete!')
    // }
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.magenta('Your Notes'))
    notes.forEach ((note) => {
        console.log('- ' + note.title)    
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        // return the empty 'array' to save multiple JSONs
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}