import { classContacts } from './classContacts';
import { classFilms } from './classFilms';
import { classMoviePayment } from './classMoviePayment';
import { classMoviePeriod } from './classMoviePeriod';

export class classMovieClose{
    public MovieId:number;
    public OrderId:number;
    public ContactId:number;
    public TotalAmount:number;
    public WithReceipt:boolean;
    public PaymentId:number;
    public MovieAddress:string;
    public MovieDate:Date;
    public InChargeId:number;
    public InChargeAmount:number;
    public GlobalMovie:boolean;
    public PricePerHead?:number
    public TotalParticipants:number
    public Paid:boolean;
    public FilmId:number;
    public PeriodId:number;
    public Contact:classContacts;
    public Film:classFilms;
    public  InCharge:classContacts;
    public Order:classContacts;
    public  Payment:classMoviePayment;
    public  Period:classMoviePeriod ;
}







