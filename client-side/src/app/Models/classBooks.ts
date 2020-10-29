import { classBooksCost } from './classBooksCost';
import { classBooksOrderItem } from './classBooksOrderItem';

export class classBooks{
    public BookId: number;
    public NameBook: string;
    public ClassBook: string;
    public BooksCost: classBooksCost[];
    public BooksOrderItem: classBooksOrderItem[];
}