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
        public IMovieOpenBl movieOpenBl;
        public MoviesOpenController(IMovieOpenBl _MovieOpen)
        {
            movieOpenBl = _MovieOpen;
        }

        // GET: api/Movies
        [HttpGet]
        public async Task<List<MovieOpen>> Get()
        {
            return await movieOpenBl.GetAll();
        }

        // GET: api/Movies/5
        [HttpGet("{id}")]/*, Name = "Get"*/
        public async Task<MovieOpen> Get(int id)
        {
            return await movieOpenBl.getMovieCloseById(id);
        }


        //[HttpGet]
        //public async Task<MovieOpen> Get([FromQuery] int id)
        //{
        //    return await movieOpenBl.getMovieCloseById(id);
        //}

        //   // POST: api/Movies
        //   [HttpPost]
        //   public void Post([FromBody] string value)
        //   {
        //   }

        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] MovieOpen movieOpen)
        {
            await movieOpenBl.putMovie(movieOpen);
        }

        //   // DELETE: api/ApiWithActions/5
        //   [HttpDelete("{id}")]
        //   public void Delete(int id)
        //   {
        //   }
    }
}
