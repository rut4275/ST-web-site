﻿using System;
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
        public IMovieCloseBl moviesClose;
        public MoviesCloseController(IMovieCloseBl _moviesClose)
        {
            moviesClose = _moviesClose;
        }
        // GET: api/MoviesClose
        [HttpGet]
        public async Task<List<MovieClose>> Get()
        {
            return await moviesClose.getAll();
        }

        // GET: api/MoviesClose/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/MoviesClose
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MoviesClose/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
