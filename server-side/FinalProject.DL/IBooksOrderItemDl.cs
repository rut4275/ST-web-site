using FinalProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public interface IBooksOrderItemDl
    {
        void deleteOrderItem(ICollection<BooksOrderItem> oldList, ICollection<BooksOrderItem> newList);
        Task putOrderItems(int bookOrderId, ICollection<BooksOrderItem> booksOrderItems);
    }
}