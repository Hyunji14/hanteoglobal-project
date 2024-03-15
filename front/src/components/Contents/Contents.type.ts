export type ContentType = {
  list: {
    _id: string;
    title: string;
    contents: string;
    imgUrl: string;
    digitalIndex: string;
  }[];
};

export type ContentTitleType = {
  _id: string;
  categoryId: string;
  title: string;
};
