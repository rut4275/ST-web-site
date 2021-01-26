using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinalProject.BL;
using FinalProject.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        public IContactsBl ContactsBl;

        public ContactsController(IContactsBl _ContactsBl)
        {
            ContactsBl = _ContactsBl;
        }
        // GET: api/<ContactsController>
        [HttpGet]
        public async Task<List<Contacts>> Get()
        {
            return await ContactsBl.getAll();
        }

        // GET api/<ContactsController>/5
        [HttpGet("{id}")]
        public Task<Contacts> Get(int id)
        {
            return ContactsBl.getById(id);
        }

        // POST api/<ContactsController>
        [HttpPost]
        public async Task<Contacts> Post([FromBody] Contacts contact)
        {
            return await ContactsBl.newContact(contact);
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
