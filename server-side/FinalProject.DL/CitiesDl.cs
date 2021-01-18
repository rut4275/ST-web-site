using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class CitiesDl : ICitiesDl
    {
        public FinalProjectContext context;
        public CitiesDl(FinalProjectContext _context)
        {
            context = _context;
        }
        public async Task<List<Cities>> getAll()
        {
            return await context.Cities.ToListAsync();
        }
    }
}
