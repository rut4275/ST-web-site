import { classCities } from './classCities';
import { classContacts } from './classContacts';
import { classMovieAdvertisingStage } from './classMovieAdvertisingStage';
import { classMovieAdvertisingType } from './classMovieAdvertisingType';
import { classMoviePeriod } from './classMoviePeriod';

export class classMovieAdvertising{
    public AdvertisingId:number;
    public AdvertisingStageId:number;
    public CityId:number;
    public AdvertisingDates:Date;
    public PeriodId:number;
    public AdvertisingTypeId:number;
    public AdvertisingSize:string;
    public AdvertisingCost:number;
    public AdvertisingContactId:number;
    public AdvertisingContact:classContacts;
    public AdvertisingStage:classMovieAdvertisingStage;
    public AdvertisingType:classMovieAdvertisingType;
    public City:classCities;
    public Period:classMoviePeriod;
}





