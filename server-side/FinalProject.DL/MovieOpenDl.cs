using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<MovieOpen> getMovieCloseById(int id)
        {
            var movies = await context.MovieOpen
                    .Where(e => e.MovieId == id)
                    .Include(e => e.ContactCulture)
                    .Include(e => e.Film)
                    .Include(e => e.InCharge)
                    .Include(e => e.City)
                    .Include(e=>e.Period)
                    .FirstOrDefaultAsync();
            return movies;
        }

        public async Task putMovie(MovieOpen movieOpen)
        {
            await context.MovieOpen.ForEachAsync(m =>
            {
                if (m.MovieId == movieOpen.MovieId)
                {
                    m.ContactCulture = movieOpen.ContactCulture;
                    m.ContactCultureId = movieOpen.ContactCultureId;
                    m.AuditoriumCost = movieOpen.AuditoriumCost;
                    m.CityId = movieOpen.CityId;
                    m.CountParticipantsAfternoon = movieOpen.CountParticipantsAfternoon;
                    m.CountParticipantsEvening = movieOpen.CountParticipantsEvening;
                    m.EquipmentCost = movieOpen.EquipmentCost;
                    m.FilmId = movieOpen.FilmId;
                    m.InCharge = movieOpen.InCharge;
                    m.InChargeAmount = movieOpen.InChargeAmount;
                    m.InChargeId = movieOpen.InChargeId;
                    m.InChargePaid = movieOpen.InChargePaid;
                    m.MovieDate = movieOpen.MovieDate;
                    m.NetProfitForDay = movieOpen.NetProfitForDay;
                    m.NumberOfSeatsAuditorium = movieOpen.NumberOfSeatsAuditorium;
                    m.PeriodId = movieOpen.PeriodId;
                    m.TicketCostAfternoon = movieOpen.TicketCostAfternoon;
                    m.TicketCostEvening = movieOpen.TicketCostEvening;
                    m.WithEquipment = movieOpen.WithEquipment;
                };

            });
            await context.SaveChangesAsync();
        }
    }
}
