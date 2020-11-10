using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IMoviePaymentBl
    {
        Task<List<MoviePayment>> getAll();
    }
}