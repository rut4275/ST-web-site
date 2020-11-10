using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IContactsBl
    {
        Task<Contacts> getById(int id);
        Task<List<Contacts>> getAll();
    }
}