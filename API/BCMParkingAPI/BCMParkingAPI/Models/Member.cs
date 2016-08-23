using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BCMParkingAPI.Models
{
    public class Member
    {
        public Guid MemberId { get; set; }
        public Audit Audit { get; set; }
        public ContactInformation ContactInformation { get; set; }
    }
}