using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;

using Microsoft.AspNetCore.Mvc;

using firstProjectWebApi.Models;


namespace myFirstProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class toDoController : ControllerBase
    {
        // temporary mock DB storing toDoListItems
        private List<toDoItem> list;

        public toDoController() { // tightly coupled implementation
            list = new List<toDoItem>();
        }

        [HttpGet]
        public IEnumerable<toDoItem> GetAll() {
            // temporary mock DB setup
            this.list.Add(new toDoItem() { id = 0, shortDescription = "Placeholder", longDescription = "Feel free to delete this placeholder item from your list"});
            return this.list;
        }
    }

}