const Note = require("../models/Note.model");

class NoteRepository {
    async createNote(title, content, sahipId) {
        const newNote = new Note({
            title,
            content,
            sahipId
        });
        return await newNote.save();
    }

    async getNotesBySahipId(sahipId) {
        const notes = await Note.find({ sahipId });
        return notes;
    }
}

module.exports = new NoteRepository();