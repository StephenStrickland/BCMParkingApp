using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BCMParkingAPI.Models
{
    public class LicensePlate
    {
        public Guid LicensePlateId { get; set; }
        public Guid MemberId { get; set; }
        public string LicensePlateNumber { get; set; }
        public List<DateTime> AuditDateTimes { get; set; }   
    }
}