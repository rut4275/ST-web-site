using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class MovieOpenDl : IMovieOpenDl
    {

        public FinalProjectContext context;
        public MovieOpenDl(FinalProjectContext _context)
        {
            context = _context;
        }

        public async Task<List<MovieOpen>> GetAll()
        {
            var movies = await context.MovieOpen.Include(e => e.City)
               .Include(e => e.ContactCulture)
               .Include(e => e.Film)
               .Include(e => e.InCharge)
               .Include(e => e.Period)
               .ToListAsync();
            return movies;
        }
    }
}
