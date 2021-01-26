using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<MovieClose> getMovieCloseById(int id)
        {
            var movies = await context.MovieClose
               .Where(e => e.MovieId == id)
               .Include(e => e.Contact)
               .Include(e => e.Film)
               .Include(e => e.InCharge)
               .Include(e => e.Payment)
               .Include(e => e.Order)
               .FirstOrDefaultAsync();
            return movies;
        }

        public async Task newMovieClose(MovieClose movieClose)
        {
            await context.MovieClose.AddAsync(movieClose);
            //context.MovieClose.Update(movieClose);
            await context.SaveChangesAsync();
        }

        public async Task putMovie(MovieClose movieClose)
        {
            await context.MovieClose.ForEachAsync(m =>
            {
                if (m.MovieId == movieClose.MovieId)
                {
                    m.Contact = movieClose.Contact;
                    m.ContactId = movieClose.ContactId;
                    //m.Film = movieClose.Film;
                    m.FilmId = movieClose.FilmId;
                    m.GlobalMovie = movieClose.GlobalMovie;
                    m.InCharge = movieClose.InCharge;
                    m.InChargeAmount = movieClose.InChargeAmount;
                    m.InChargeId = movieClose.InChargeId;
                    m.MovieAddress = movieClose.MovieAddress;
                    m.MovieDate = movieClose.MovieDate;
                    m.Order = movieClose.Order;
                    m.OrderId = movieClose.OrderId;
                    m.Paid = movieClose.Paid;
                    //m.Payment = movieClose.Payment;
                    m.PaymentId = movieClose.PaymentId;
                    m.PeriodId = movieClose.PeriodId;
                    m.PricePerHead = movieClose.PricePerHead;
                    m.TotalAmount = movieClose.TotalAmount;
                    m.TotalParticipants = movieClose.TotalParticipants;
                    m.WithReceipt = movieClose.WithReceipt;
                };

            });
            await context.SaveChangesAsync();
        }
    }
}
