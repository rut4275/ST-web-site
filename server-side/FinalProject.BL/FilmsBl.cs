using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class FilmsBl : IFilmsBl
    {
        IFilmsDl FilmsDl;
        public FilmsBl(IFilmsDl _FilmsDl)
        {
            FilmsDl = _FilmsDl;
        }
        public async Task<List<Films>> getAll()
        {
            return await FilmsDl.getAll();
        }
    }
}
