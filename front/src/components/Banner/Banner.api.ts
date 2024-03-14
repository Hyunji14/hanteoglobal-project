import data from '../../db/bannerData.json';

const BannerAPI = {
  async getBanners(categoryId: string) {
    const banners = data.filter((item) => item.categoryId === categoryId);
    return banners;
  },
};

export default BannerAPI;
