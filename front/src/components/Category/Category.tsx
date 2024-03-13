import * as S from './Category.styles';
import { useHeader } from './Category.hooks';
import { useNavigate } from 'react-router-dom';

interface CategoryProps {
  categoryId: string;
}

export default function Category({ categoryId }: CategoryProps) {
  const { categories } = useHeader();
  const navigate = useNavigate();

  return (
    <S.Container>
      {categories.map((category) => {
        {
          console.log('??', categoryId);
          console.log(typeof categoryId.length);
        }
        return (
          <S.Category
            key={category._id}
            $isActive={category._id === categoryId}
            onClick={() => {
              navigate(`/${category._id}`);
            }}
          >
            {category.name}
          </S.Category>
        );
      })}
      {/* <S.Header>I'm Header</S.Header> */}
    </S.Container>
  );
}
