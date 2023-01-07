import { apiURL } from "@/services/api";
import { IProduct } from "@/services/marketing";
import Link from "next/link"
import React from "react"

import { ProductCard, Container, Content, ProductCardTitle } from './styles';

interface IProductCardListProps {
  label: string;
  products: IProduct[];
}

export default function ProductCardList({ products, label }: IProductCardListProps) {
  return (
    <Container>
      <h3>{label}</h3>
      <Content>
        {products.map(product => {
          return (
            <Link key={product.id} href={`/marketing/produto/${product.slug}`}>
              <a title={`${product.title}`}>
                <ProductCard>
                  <img src={`${apiURL}${product.banner}`} alt={product.title} />
                  <ProductCardTitle>{product.title}</ProductCardTitle>
                </ProductCard>
              </a>
            </Link>
          )
        })}
      </Content>
    </Container>
  )
}
