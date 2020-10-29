import { classMovieAdvertising } from './classMovieAdvertising';
import { classMovieClose } from './classMovieClose';
import { classMovieOpen } from './classMovieOpen';

export class classMoviePeriod{
    public PeriodId:number;
    public PeriodName:string;
    public PeriodDate:Date;
    public  MovieAdvertising:classMovieAdvertising[];
    public  MovieClose:classMovieClose[];
    public  MovieOpen:classMovieOpen[];
}


