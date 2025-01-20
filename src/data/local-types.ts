export type ISortOption = 'all' | 'categoryName';

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    stock: number;
  }