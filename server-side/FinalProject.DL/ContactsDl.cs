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

        public async Task<List<Contacts>> getAll()
        {
            return await context.Contacts.ToListAsync();
        }

        public async Task<Contacts> getById(int id)
        {
            return await context.Contacts.Where(c=>c.ContactId==id).FirstOrDefaultAsync();

        }

        public async Task<Contacts> newContact(Contacts contact)
        {
            await context.Contacts.AddAsync(contact);
            await context.SaveChangesAsync();
            return await context.Contacts.Where(c => c.ContactAddress == contact.ContactAddress 
                                                   && c.ContactEmail == contact.ContactEmail
                                                   && c.ContactFirstName == contact.ContactFirstName
                                                   && c.ContactLastName == contact.ContactLastName
                                                   && c.ContactPhone == contact.ContactPhone).FirstOrDefaultAsync();

        }
    }
}
