import { classBooksCustomersCategories } from './classBooksCustomersCategories';
import { classBooksOrders } from './classBooksOrders';
import { classContacts } from './classContacts';

export class classBooksCustomers{
    public CustomerId:number;
    public CustomerName:string;
    public CustomerAddress:string;
    public CustomerCategoryId:number;
    public ContactId:number;
    public Contact:classContacts;
    public CustomerCategory: classBooksCustomersCategories;
    public BooksOrders: classBooksOrders;
}