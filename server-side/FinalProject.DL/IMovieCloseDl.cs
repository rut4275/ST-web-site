using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public interface IMovieCloseDl
    {
        public Task<List<MovieClose>> getAll();
        Task<MovieClose> getMovieCloseById(int id);
    }
}