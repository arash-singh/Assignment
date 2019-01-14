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
    public class SearchController : Controller
    {
        private readonly IOptions<AppSettings> config;

        public SearchController(IOptions<AppSettings> config)
        {
            this.config = config;
        }

        [HttpGet]
        public string Get(string key)
        {
            var apiKey = this.config.Value.ApiKey;
            var httpHelper = new HttpHelper(this.config.Value.ApiUrl);
            var requestUrl = $"search?apiKey={apiKey}&query={key}";
            return httpHelper.GetFromApi(requestUrl).Result;
        }
    }
}
