using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Authentication;
using System.Web.Http;
using BCMParkingAPI.Models;

namespace BCMParkingAPI.Controllers
{
    
    public class UsersController : BaseApiController
    {
        //GET Users/
        public List<User> Get()
        {
            throw new NotImplementedException();
        }

        //GET Users/id
        public User Get(Guid id)
        {
            throw new NotImplementedException();
        }

        [Authorize(Roles = "admin,user")]
        [HttpPost]
        public LoginStatus Login(Login login)
        {

            if (ModelState.IsValid)
            {
                var response = new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent("Invalid Username and/or Password"),
                    ReasonPhrase = "Invalid Username and/or Password"
                };

                throw new HttpResponseException(response);
            }

            //get list of users by username, should only return one user
            List<User> users =
                DbManager.GetQueryable<User>().Where(x => x.Username == login.Username.ToLower()).ToList();

            //return invalid username/pass if no users found or if passwords dont match
            if (users == null || users.Count == 0 || (users.First().Password != login.Password))
            {
                var response = new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent("Invalid Username and/or Password"),
                    ReasonPhrase = "Invalid Username and/or Password"
                };

                throw new HttpResponseException(response);

            }

            //grab first user
            User user = users.First();

            //create session from user object
            Session session = new Session(user);
            session.IsSessionValid = true;

            //return login status
            return new LoginStatus(user, session);
        }

        //PUT Users/
        public void Put(User user)
        {
            //TODO: 
        }

        //POST Users/
        public void Post(User user)
        {
            //TODO:
        }



    }
}
