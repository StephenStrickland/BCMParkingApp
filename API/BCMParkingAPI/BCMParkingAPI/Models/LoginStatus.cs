using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BCMParkingAPI.Models
{
    public class LoginStatus
    {
        public LoginStatus(User user, Session session)
        {
            UserFullName = user.Username;
            ApiKey = session.ApiKey.ToString();
            IsLoginValid = session.IsSessionValid;
        }
        public string UserFullName { get; set; }
        public string ApiKey { get; set; }
        public bool IsLoginValid { get; set; }
    }
}