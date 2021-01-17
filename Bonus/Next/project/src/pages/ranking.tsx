import { GetStaticProps } from "next"

import { IProduct } from '.';

interface RankingProps {
  products: IProduct[];
}

export default function Ranking({ products }: RankingProps) {
  return (
    <div>
      <h1>Ranking</h1>

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

export const getStaticProps: GetStaticProps<RankingProps> = async (context) => {
  const response = await fetch('http://localhost:3333/products');
  
  const products = await response.json();
  
  return {
    props: {
      products,
    },
    revalidate: 5,
  }
}