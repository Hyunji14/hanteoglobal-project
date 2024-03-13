import data from '../../db/headerData.json';

const CategoryAPI = {
  //TODO : async로 back-end 에서 데이터 가져오기

  async getCategories() {
    return data;
  },
};

export default CategoryAPI;
