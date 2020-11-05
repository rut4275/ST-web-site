using FinalProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DL
{
    public class ContactsDl : IContactsDl
    {
        public FinalProjectContext context;
        public ContactsDl(FinalProjectContext _context)
        {
            context = _context;
        }
        public async Task<Contacts> getById(int id)
        {
            return await context.Contacts.Where(c=>c.ContactId==id).FirstOrDefaultAsync();

        }
    }
}
