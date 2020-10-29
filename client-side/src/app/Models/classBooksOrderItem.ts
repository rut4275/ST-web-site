import { classBooks } from './classBooks';
import { classBooksOrders } from './classBooksOrders';

export class classBooksOrderItem{
    public ItemId: number;
    public OrderId: number;
    public BookId: number;
    public Quantity: number;
    public TotalPrice: number;
    public Book: classBooks;
    public Order: classBooksOrders;
}

