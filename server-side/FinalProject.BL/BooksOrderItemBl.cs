using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class BooksOrderItemBl : IBooksOrderItemBl
    {
        public IBooksOrderItemDl booksOrderItemDl;
        public BooksOrderItemBl(IBooksOrderItemDl _booksOrderItemDl)
        {
            booksOrderItemDl = _booksOrderItemDl;
        }
        public async Task putOrderItems(int bookOrderId, ICollection<BooksOrderItem> booksOrderItems)
        {
            await booksOrderItemDl.putOrderItems(bookOrderId, booksOrderItems);
        }
    }
}
