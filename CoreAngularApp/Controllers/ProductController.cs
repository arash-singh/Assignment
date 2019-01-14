using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreAngularApp.Common;
using CoreAngularApp.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace CoreAngularApp.Controllers
{
    [Route("api/[controller]")]
    public class ProductController
    {
        private readonly IOptions<AppSettings> config;

        public ProductController(IOptions<AppSettings> config)
        {
            this.config = config;
        }

        [HttpGet]
        public string Get(string id)
        {
            var apiKey = this.config.Value.ApiKey;
            var httpHelper = new HttpHelper(this.config.Value.ApiUrl);
            var requestUrl = $"items?apiKey={apiKey}&upc={id}";
            return httpHelper.GetFromApi(requestUrl).Result;
        }

        [HttpGet("[action]")]
        public string GetRecommendations(string id)
        {
            var apiKey = this.config.Value.ApiKey;
            var httpHelper = new HttpHelper(this.config.Value.ApiUrl);
            var requestUrl = $"nbp?apiKey={apiKey}&itemId={id}";
            return httpHelper.GetFromApi(requestUrl).Result;
        }
    }
}
