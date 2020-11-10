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
    public class MoviesPeriodController : ControllerBase
    {
        IMoviePeriodBl moviePeriodBl;
        public MoviesPeriodController(IMoviePeriodBl _moviePeriodBl)
        {
            moviePeriodBl = _moviePeriodBl;
        }
        // GET: api/<MoviesPeriodController>
        [HttpGet]
        public async Task<List<MoviePeriod>> Get()
        {
            return await moviePeriodBl.getAll();
        }

        // GET api/<MoviesPeriodController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MoviesPeriodController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MoviesPeriodController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MoviesPeriodController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
