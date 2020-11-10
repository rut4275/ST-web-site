using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class MoviePeriodBl : IMoviePeriodBl
    {
        IMoviePeriodDl moviePeriodDl;
        public MoviePeriodBl(IMoviePeriodDl _moviePeriodDl)
        {
            moviePeriodDl = _moviePeriodDl;
        }
        public async Task<List<MoviePeriod>> getAll()
        {
            return await moviePeriodDl.getAll();
        }
    }
}
