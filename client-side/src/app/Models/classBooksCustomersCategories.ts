import { classBooksCost } from './classBooksCost';
import { classBooksCustomers } from './classBooksCustomers';

export class classBooksCustomersCategories{
    public CategoryId: number;
    public CategoryName: string;
    public BooksCost: classBooksCost[];
    public BooksCustomers: classBooksCustomers[];
}

