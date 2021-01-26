using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class MovieOpenBl : IMovieOpenBl
    {
        IMovieOpenDl movieOpenDl;
        public MovieOpenBl(IMovieOpenDl _movieOpenDl)
        {
            movieOpenDl = _movieOpenDl;
        }
        public async Task<List<MovieOpen>> GetAll()
        {
            return await movieOpenDl.GetAll();
        }

        public async Task<MovieOpen> getMovieCloseById(int id)
        {
            return await movieOpenDl.getMovieCloseById(id);
        }

        public void newMovieOpen(MovieOpen movieOpen)
        {
            movieOpenDl.newMovieOpen(movieOpen);
        }

        public async Task putMovie(MovieOpen movieOpen)
        {
            await movieOpenDl.putMovie(movieOpen);
        }
    }
}
