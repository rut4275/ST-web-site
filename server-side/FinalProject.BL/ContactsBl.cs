using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class ContactsBl : IContactsBl
    {
        IContactsDl ContactsDl;
        public ContactsBl(IContactsDl _ContactsDl)
        {
            ContactsDl = _ContactsDl;
        }
        public async Task<Contacts> getById(int id)
        {
            return await ContactsDl.getById(id);
        }
    }
}
