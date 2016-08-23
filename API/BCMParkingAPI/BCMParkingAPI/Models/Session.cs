using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BCMParkingAPI.Models
{
    public class Session
    {
        public Session(User user)
        {
           Audit = new Audit(user);
            SessionId = new Guid();
            UserId = user.UserId;
            ApiKey = new Guid();
            IsSessionValid = true;
            ValidUntil = DateTime.Now.AddDays(20);
        }
        public Guid SessionId { get; set; }
        public Audit Audit { get; set; }
        public Guid UserId { get; set; }
        public Guid ApiKey { get; set; }
        public bool IsSessionValid { get; set; }
        public DateTime ValidUntil { get; set; }
    }
}