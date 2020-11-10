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
    public class FilmsController : ControllerBase
    {
        IFilmsBl filmsBl;
        public FilmsController(IFilmsBl _filmsBl)
        {
            filmsBl = _filmsBl;
        }
        // GET: api/<FilmsController>
        [HttpGet]
        public async Task<List<Films>> Get()
        {
            return await filmsBl.getAll();
        }

        // GET api/<FilmsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FilmsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<FilmsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FilmsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
