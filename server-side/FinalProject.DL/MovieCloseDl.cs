using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace FinalProject.DL
{
    public class MovieCloseDl : IMovieCloseDl
    {
        public FinalProjectContext context;
        public MovieCloseDl(FinalProjectContext _context)
        {
            context = _context;
        }
        // async Task<List<MovieClose>> 
        public async Task<List<MovieClose>> getAll()
        { 
            var movies = await context.MovieClose
               .Include(e => e.Contact)
               .Include(e => e.Film)
               .Include(e => e.InCharge)
               .Include(e => e.Payment)
               .Include(e => e.Order)
               .ToListAsync();
            return movies;
           
        }
    }
}
