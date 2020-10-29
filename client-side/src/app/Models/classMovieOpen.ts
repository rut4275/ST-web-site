import { classCities } from './classCities';
import { classContacts } from './classContacts';
import { classFilms } from './classFilms';
import { classMoviePeriod } from './classMoviePeriod';

export class classMovieOpen{
    public MovieId:number;
    public CityId:number;
    public CityAddress:string;
    public PeriodId:number;
    public MovieDate:Date;
    public ContactCultureId:number;
    public NumberOfSeatsAuditorium:number;
    public WithEquipment:boolean;
    public EquipmentCost:number;
    public AuditoriumCost:number;
    public FilmId:number;
    public CountParticipantsAfternoon:number;
    public CountParticipantsEvening:number;
    public TicketCostAfternoon:number;
    public TicketCostEvening:number;
    public InChargeId:number;
    public InChargeAmount:number;
    public InChargePaid:boolean;
    public NetProfitForDay:number;
    public City:classCities;
    public ContactCulture:classContacts;
    public Film:classFilms;
    public InCharge:classContacts;
    public Period:classMoviePeriod;
}



