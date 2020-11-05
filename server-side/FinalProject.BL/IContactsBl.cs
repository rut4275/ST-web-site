using FinalProject.Models;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IContactsBl
    {
        Task<Contacts> getById(int id);
    }
}