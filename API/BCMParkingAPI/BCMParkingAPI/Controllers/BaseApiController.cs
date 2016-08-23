using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BCMParkingAPI.Data;

namespace BCMParkingAPI.Controllers
{
    public class BaseApiController : ApiController
    {
        public BaseApiController()
        {
            DbManager = new MongoRepository();
        }
        protected MongoRepository DbManager { get; set; }
    }
}
