using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class MoviePaymentDl : IMoviePaymentDl
    {
        public FinalProjectContext context;
        public MoviePaymentDl(FinalProjectContext _context)
        {
            context = _context;
        }
        public async Task<List<MoviePayment>> getAll()
        {
            var payment = await context.MoviePayment.ToListAsync();
            return payment;
        }
    }
}
