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
    public class CitiesController : ControllerBase
    {
        ICitiesBl citiesBl;
        public CitiesController(ICitiesBl _citiesBl)
        {
            citiesBl = _citiesBl;
        }
        // GET: api/<CitiesController>
        [HttpGet]
        public async Task<List<Cities>> Get()
        {
            return await citiesBl.getAll();
        }

        // GET api/<CitiesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CitiesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CitiesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CitiesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
