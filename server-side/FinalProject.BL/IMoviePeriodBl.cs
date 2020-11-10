using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IMoviePeriodBl
    {
        Task<List<MoviePeriod>> getAll();
    }
}