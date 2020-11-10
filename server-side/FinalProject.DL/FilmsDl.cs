using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class FilmsDl : IFilmsDl
    {
        public FinalProjectContext context;
        public FilmsDl(FinalProjectContext _context)
        {
            context = _context;
        }
        public async Task<List<Films>> getAll()
        {
            return await context.Films.ToListAsync();
        }
    }
}
