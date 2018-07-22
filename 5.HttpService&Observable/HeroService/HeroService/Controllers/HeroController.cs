using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HeroService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HeroService.Controllers
{
    [Produces("application/json")]
    [Route("api/Hero")]
    public class HeroController : Controller
    {
        [HttpGet("GetIndianHeroes")]
        public IList<HeroVm> GetIndianHeroes()
        {
            var heroList = new List<HeroVm>();
            var hero = new HeroVm();
            hero.heroId = 1;
            hero.heroName = "Sachin";hero.sports = "Cricket"; hero.heroNature = "Calm";
            hero.imageUrl = "./assets/sachin.jpg";
            heroList.Add(hero);
            return heroList;
    //        return new HeroVm({ heroId:'1', heroName:'Sachin', sports:'Cricket', heroNature:'Calm', imageUrl:'./assets/sachin.jpg' },
    //{ heroId: '2',heroName: 'PV Sindhu',sports: 'Shuttle',heroNature: 'Aggressive',imageUrl: './assets/pvsindhu.jpg'},
    //{ heroId: '3',heroName: 'Saina',sports: 'Shuttle',heroNature: 'Intelligent',imageUrl: './assets/Saina.jpg'},
    //{ heroId: '4',heroName: 'Sunil',sports: 'Football',heroNature: 'Fast Runner',imageUrl: './assets/sunil.jpg'},
    //{ heroId: '5',heroName: 'Virat',sports: 'Cricket',heroNature: 'Very Aggressive',imageUrl: './assets/virat.jpg'},);
        }
    }
}