using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public interface IBooksOrderItemBl
    {
        Task putOrderItems(int bookOrderId, ICollection<BooksOrderItem> booksOrderItems);
    }
}