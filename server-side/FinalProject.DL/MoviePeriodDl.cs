using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class MoviePeriodDl : IMoviePeriodDl
    {
        public FinalProjectContext context;
        public MoviePeriodDl(FinalProjectContext _context)
        {
            context = _context;
        }
        public async Task<List<MoviePeriod>> getAll()
        {
           return await context.MoviePeriod.ToListAsync();
        }
    }
}
