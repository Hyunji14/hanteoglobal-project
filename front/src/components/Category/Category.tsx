import * as S from './Category.styles';
import { useCategory } from './Category.hooks';
import { useNavigate } from 'react-router-dom';

interface CategoryProps {
  categoryId: string;
}

export default function Category({ categoryId }: CategoryProps) {
  const { categories } = useCategory();
  const navigate = useNavigate();

  return (
    <S.Container>
      {categories.map((category) => {
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
    </S.Container>
  );
}
