import { Loading } from '../Loading/Loading';
import { Empty } from '../Empty/Empty';
import { useContents, useContentTitle } from './Contents.hooks';
import * as S from './Contents.styles';
import ApiBoundary from '../ApiBoundary/ApiBoundary';

interface ContentsProps {
  categoryId: string;
}

export default function Contents(props: ContentsProps) {
  return (
    <ApiBoundary>
      <ApiComponent {...props} />
    </ApiBoundary>
  );
}

export function ApiComponent({ categoryId }: ContentsProps) {
  const { data, setTarget, hasNextPage } = useContents(categoryId);
  const { contentTitle } = useContentTitle(categoryId);
  const page = data.pages;

  return (
    <S.Container>
      <>
        {page[0].list.length === 0 && <Empty />}
        <S.ContentViewTitle>{contentTitle.title}</S.ContentViewTitle>
        {page.map(({ list: contents }) =>
          contents!.map((content) => {
            return (
              <S.ContentBox key={`${categoryId}_${content._id}`}>
                <S.ContentImg src={content.imgUrl} />
                <S.ContentInfoBox>
                  <S.ContentTitle>{content.title}</S.ContentTitle>
                  <S.Content>{content.contents}</S.Content>
                  <S.DigitalIndex>
                    {content?.digitalIndex !== '' &&
                      content.digitalIndex.replace(
                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                        ','
                      )}
                  </S.DigitalIndex>
                </S.ContentInfoBox>
              </S.ContentBox>
            );
          })
        )}
        {hasNextPage && (
          <div ref={setTarget}>
            <Loading />
          </div>
        )}
      </>
    </S.Container>
  );
}
