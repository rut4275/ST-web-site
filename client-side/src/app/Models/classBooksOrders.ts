import{classBooksCustomers} from './classBooksCustomers'
import { classBooksOrderItem} from './classBooksOrderItem'
export class classBooksOrders{
    public BooksOrdersId: number;
    public CustomerId: number;
    public OrderDate: Date;
    public AcceptLiscence:boolean;
    public WithReceipt:boolean;
    public Note:string;
    public TotalPrice:number;
    public Paid:boolean;
    public Supplied:boolean;
    public Customer: classBooksCustomers;   
    public BooksOrderItem: classBooksOrderItem[];

}
