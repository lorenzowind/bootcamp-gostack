import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { IProduct } from '../..';

export interface ICategory {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
}

export default function Category({ products }: CategoryProps) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{router.query.id}</h1>
      
      <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.title}
        </li>
      ))}
      </ul>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/categories');
  
  const categories = await response.json();

  const paths = categories.map((category: ICategory) => {
    return {
      params: { id: category.id },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async (context) => {
  const { id } = context.params;

  const response = await fetch(`http://localhost:3333/products?category_id=${id}`);
  
  const products = await response.json();
  
  return {
    props: {
      products,
    },
    revalidate: 5,
  }
}