using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class BooksOrderItemDl : IBooksOrderItemDl
    {
        public FinalProjectContext context;
        //public ICollection<BooksOrderItem> listOI = new Collection<BooksOrderItem>();
        public BooksOrderItemDl(FinalProjectContext _context)
        {
            context = _context;
        }

        public void deleteOrderItem(ICollection<BooksOrderItem> oldList, ICollection<BooksOrderItem> newList)
        {

            foreach (var oi in oldList)
            {
                if (!newList.Contains(oi))
                {
                    context.BooksOrderItem.Remove(oi);
                }
            }
            context.SaveChangesAsync();
        }
        public async Task putOrderItems(int bookOrderId, ICollection<BooksOrderItem> booksOrderItems)
        {

            //await context.BooksOrderItem.ForEachAsync(b =>
            //{
            //    if (b.OrderId == bookOrderId)
            //    {
            //        if (!booksOrderItems.Contains(b))
            //        {
            //            context.BooksOrderItem.Remove(b);
            //            //listOI.Add(b);
            //        }
            //    };
            //});
            //context.BooksOrderItem = (DbSet<BooksOrderItem>)listOI;
            //await context.SaveChangesAsync();
            var list = await context.BooksOrderItem.AsNoTracking().Where(b => b.OrderId == bookOrderId).ToListAsync();
            foreach (var item in list)
            {
                if (!booksOrderItems.Any(order_item => order_item.BookId == item.BookId))
                {
                    context.BooksOrderItem.Remove(item);
                }
            }
            await context.SaveChangesAsync();

        }
    }
}
