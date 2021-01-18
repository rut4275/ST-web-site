using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinalProject.BL;
using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesCloseController : ControllerBase
    {
        public IMovieCloseBl moviesCloseBl;
        public MoviesCloseController(IMovieCloseBl _moviesClose)
        {
            moviesCloseBl = _moviesClose;
        }
        // GET: api/MoviesClose
        [HttpGet]
        public async Task<List<MovieClose>> Get()
        {
            return await moviesCloseBl.getAll();
        }

        //// GET: api/MoviesClose
        //[HttpGet]
        //public async Task<MovieClose> Get([FromQuery] int id)
        //{
        //    return await moviesClose.getMovieCloseById(id);
        //}

        // GET: api/MoviesClose/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<MovieClose> Get(int id)
        {
            return await moviesCloseBl.getMovieCloseById(id);
        }

        // POST: api/MoviesClose
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MoviesClose/5
        [HttpPut]//("{id}")
        public async Task Put([FromBody] MovieClose movieClose)
        {
            await moviesCloseBl.putMovie(movieClose);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
