using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using MongoDB.Driver;

namespace BCMParkingAPI.Data
{
    public class MongoRepository
    {

        public MongoRepository()
        {
            string connectionString = ConfigurationManager.AppSettings["MongoConnectionString"];
            _client = new MongoClient(connectionString);
            _database = _client.GetDatabase("BCMParking");

        }

        private static IMongoClient _client;
        private static IMongoDatabase _database;

        public IQueryable<T> GetQueryable<T>()
        {
            return _database.GetCollection<T>(typeof(T).Name).AsQueryable<T>();
        }

        public IMongoCollection<T> GetCollection<T>()
        {
            return _database.GetCollection<T>(typeof(T).Name);
        }

        public UpdateDefinitionBuilder<T> GetUpdateBuilder<T>()
        {
            return Builders<T>.Update;
        }

        public FilterDefinitionBuilder<T> GetFilterBuilder<T>()
        {
            return Builders<T>.Filter;
        }


    }
}