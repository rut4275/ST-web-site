using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public interface ICitiesDl
    {
        Task<List<Cities>> getAll();
    }
}