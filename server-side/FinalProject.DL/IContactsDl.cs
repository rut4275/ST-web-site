using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public interface IContactsDl
    {
        Task<Contacts> getById(int id);
        Task<List<Contacts>> getAll();
    }
}