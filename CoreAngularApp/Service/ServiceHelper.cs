using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CoreAngularApp.Service
{
    public class HttpHelper
    {
        private string baseUrl;

        public HttpHelper(string baseUrl) {
            this.baseUrl = baseUrl;
        }

        public async Task<string> GetFromApi(string requestUrl)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(this.baseUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                HttpResponseMessage response;
                response = client.GetAsync(requestUrl).Result;
                if (response.IsSuccessStatusCode)
                {
                    return response.Content.ReadAsStringAsync().Result;
                }
                var errorMessage = await response.Content.ReadAsStringAsync();
                throw new Exception(string
                    .Format("Get failed. Please see details :\r\n\r\n"
                    + "-HttpResponse: {1} \r\n \r\n -Error Message: {2} \r\n ",
                    response.ToString(), errorMessage));
            }
        }
    }
}
