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
    public class MoviesPaymentsController : ControllerBase
    {
        IMoviePaymentBl moviesPaymentBl;
        public MoviesPaymentsController(IMoviePaymentBl _moviesPaymentBl)
        {
            moviesPaymentBl = _moviesPaymentBl;
        }
        // GET: api/<MoviesPaymentsController>
        [HttpGet]
        public async Task<List<MoviePayment>> Get()
        {
            return await moviesPaymentBl.getAll();
        }

        // GET api/<MoviesPaymentsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MoviesPaymentsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MoviesPaymentsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MoviesPaymentsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
