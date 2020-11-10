using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class MoviePaymentBl : IMoviePaymentBl
    {
        IMoviePaymentDl moviePaymentDl;
        public MoviePaymentBl(IMoviePaymentDl _moviePaymentDl)
        {
            moviePaymentDl = _moviePaymentDl;
        }
        public async Task<List<MoviePayment>> getAll()
        {
            return await moviePaymentDl.getAll();
        }
    }
}
