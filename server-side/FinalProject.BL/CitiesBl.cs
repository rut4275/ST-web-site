using FinalProject.DL;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.BL
{
    public class CitiesBl : ICitiesBl
    {
        ICitiesDl CitiesDl;
        public CitiesBl(ICitiesDl _CitiesDl)
        {
            CitiesDl = _CitiesDl;
        }
        public async Task<List<Cities>> getAll()
        {
            return await CitiesDl.getAll();
        }
    }
}
