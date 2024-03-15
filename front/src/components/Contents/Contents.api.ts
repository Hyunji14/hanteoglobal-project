import data from '../../db/contentsData.json';
import titleData from '../../db/contentsTitleData.json';

const ContentsAPI = {
  async getContents({
    cursor,
    limit,
    categoryId,
  }: {
    cursor: number;
    limit: number;
    categoryId: string;
  }) {
    // 순위 sort & limit, cursor은 백엔드에서 처리해주는 가정하고 구현
    const tmp = data.filter((item) => item.categoryId === categoryId);
    const contents = tmp[0].list;

    return {
      list: contents?.slice(cursor, cursor + limit),
      nextCursor: cursor + limit,
    };
  },

  async getContentTitle(categoryId: string) {
    const title = titleData.filter((item) => item.categoryId === categoryId);
    return title[0];
  },
};

export default ContentsAPI;
