using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using employeserver;

namespace WebApplication9.Controllers
{
    public class employeController : ApiController
    {

        public IEnumerable<emplye> Get()
        {

            using(employedbentety entyte=new employedbentety())
            {

               return  entyte.emplye.ToList();
            }
        }
    }
}
