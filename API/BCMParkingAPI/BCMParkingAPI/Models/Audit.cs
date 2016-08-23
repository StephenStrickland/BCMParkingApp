using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BCMParkingAPI.Models
{
    public class Audit
    {
        public Audit(User user)
        {
            CreateDateTime = DateTime.Now;
            CreateUserId = user.UserId;
            ModDateTime = DateTime.Now;
            ModUserId = user.UserId;
        }

        public Audit()
        {
            CreateDateTime = DateTime.Now;
            ModDateTime = DateTime.Now;
        }

        public DateTime CreateDateTime { get; set; }
        public Guid CreateUserId { get; set; }
        public DateTime ModDateTime { get; set; }
        public Guid ModUserId { get; set; }
    }
}