using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class MovieCloseBl : IMovieCloseBl
    {
        IMovieCloseDl movieCloseDl;
        public MovieCloseBl(IMovieCloseDl _movieCloseDl)
        {
            movieCloseDl = _movieCloseDl;
        }
        public async Task<List<MovieClose>> getAll()
        {
            return await movieCloseDl.getAll();
        }

        public async Task<MovieClose> getMovieCloseById(int id)
        {
            return await movieCloseDl.getMovieCloseById(id);
        }
    }
}
