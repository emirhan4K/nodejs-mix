const categoryRepository = require("../repository/category.repository");

class CategoryService {
    async categoryEkle(name){
        if(!name){
            throw new Error("Kategori adı boş olamaz");
        }
        const existingCategory = await categoryRepository.ismeGöreBul(name)
        if(existingCategory){
            throw new Error("Bu kategori zaten mevcut")
        }
        const addCategory = await categoryRepository.categoryEkle(name)
        return addCategory;
    }

    async categoryleriGetir(){
        const categories = await categoryRepository.categoryleriGetir()
        return categories;
    }
};

module.exports = new CategoryService();