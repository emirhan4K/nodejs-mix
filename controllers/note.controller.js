const noteService = require('../services/note.service');

class NoteController {
    async createNote(req, res) {
        const { title, content } = req.body;
        const sahipId = req.user.userId;
        try {
            const response = await noteService.createNote(title, content, sahipId);
            res.status(201).json(response);
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }   

    async getNotes(req, res) {
        const sahipId = req.userId;
        try {
            const notes = await noteService.getNotesBySahipId(sahipId);
            res.status(200).json(notes);
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new NoteController();