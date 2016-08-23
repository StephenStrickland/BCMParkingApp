using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BCMParkingAPI.Models
{
    public class User
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public Guid MemberId { get; set; }
        public UserRole Role { get; set; }
    }

    public enum UserRole
    {
        Admin = 0,
        User = 1
    }
}