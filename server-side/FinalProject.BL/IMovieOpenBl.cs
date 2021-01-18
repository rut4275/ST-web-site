using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IMovieOpenBl
    {
        Task<List<MovieOpen>> GetAll();
        Task<MovieOpen> getMovieCloseById(int id);
        Task putMovie(MovieOpen movieOpen);
    }
}