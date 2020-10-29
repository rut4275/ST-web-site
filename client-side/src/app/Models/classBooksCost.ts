import { classBooks } from './classBooks';
import { classBooksCustomersCategories } from './classBooksCustomersCategories';

export class classBooksCost{
    public CostId: number;
    public BookId: number;
    public CustomerCategoryId: number;
    public Year: number;
    public Cost: number;
    public Book: classBooks;
    public CustomerCategory: classBooksCustomersCategories;
}
