const noteRepository = require('../repository/note.repository');

class NoteService {
    async createNote(title, content, sahipId) {
        if(!title || !content) {
            throw new Error("Not başlığı ve içeriği boş bırakılamaz!");
        }
        const newNote = await noteRepository.createNote(title, content, sahipId);
        return { message: "Not başarıyla oluşturuldu.", note: newNote };
    }

    async getNotesBySahipId(sahipId) {
        const notes = await noteRepository.getNotesBySahipId(sahipId);
        return notes;
    }
}
module.exports = new NoteService();