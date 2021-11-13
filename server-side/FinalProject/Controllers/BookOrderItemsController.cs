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
    public class BookOrderItemsController : ControllerBase
    {
        public IBooksOrderItemBl booksOrderItemBl;
        public BookOrderItemsController(IBooksOrderItemBl _booksOrderItemBl)
        {
            booksOrderItemBl = _booksOrderItemBl;
        }
        // GET: api/<BookOrderItemsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<BookOrderItemsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BookOrderItemsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BookOrderItemsController>/5
        [HttpPut]//("{id}")
        public async Task Put([FromBody] BooksOrders booksOrders)
        {
            await booksOrderItemBl.putOrderItems(booksOrders.BooksOrdersId, booksOrders.BooksOrderItem);
        }

        // DELETE api/<BookOrderItemsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
