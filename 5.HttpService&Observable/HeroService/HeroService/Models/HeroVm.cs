using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeroService.Models
{
    public class HeroVm
    {
        public int heroId { get; set; }
        public string heroName { get; set; }
        public string sports { get; set; }
        public string heroNature { get; set; }
        public string imageUrl { get; set; }     
    }
}
