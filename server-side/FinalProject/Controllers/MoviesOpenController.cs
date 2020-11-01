using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FinalProject.BL;
using FinalProject.Models;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesOpenController : ControllerBase
    {
        public IMovieOpenBl MovieOpen;
        public MoviesOpenController(IMovieOpenBl _MovieOpen)
        {
            MovieOpen = _MovieOpen;
        }

        // GET: api/Movies
        [HttpGet]
        public async Task<List<MovieOpen>> Get()
        {
            return await MovieOpen.GetAll();
        }

        //   // GET: api/Movies/5
        //   [HttpGet("{id}", Name = "Get")]
        //   public string Get(int id)
        //   {
        //       return "value";
        //   }
             
        //   // POST: api/Movies
        //   [HttpPost]
        //   public void Post([FromBody] string value)
        //   {
        //   }
             
        //   // PUT: api/Movies/5
        //   [HttpPut("{id}")]
        //   public void Put(int id, [FromBody] string value)
        //   {
        //   }
             
        //   // DELETE: api/ApiWithActions/5
        //   [HttpDelete("{id}")]
        //   public void Delete(int id)
        //   {
        //   }
    }
}
