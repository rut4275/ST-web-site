using FinalProject.Models;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public interface IContactsDl
    {
        Task<Contacts> getById(int id);
    }
}