using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IMovieCloseBl
    {
        Task<List<MovieClose>> getAll();
        Task<MovieClose> getMovieCloseById(int id);
        Task putMovie(MovieClose movieClose);
        Task newMovieClose(MovieClose movieClose);
    }
}