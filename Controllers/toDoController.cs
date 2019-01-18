using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;

using Microsoft.AspNetCore.Mvc;

using firstProjectWebApi.Models;
using mockDB;


namespace myFirstProject.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class toDoController : ControllerBase
    {
        public static mockDataBase lsDB = new mockDataBase();

        [HttpGet]
        public IEnumerable<toDoItem> GetAll() {
            // temporary mock DB setup
            return lsDB.list;
        }

        [HttpPost]
        public toDoItem Insert([FromBody]toDoItem todoItem)
        {
            // add todoItem to list
            // preprocess/check validity...
            // update ID
            Console.WriteLine("Current count is: " + lsDB.list.Count);
            todoItem.id = lsDB.list.Count;
            Console.WriteLine("*************************************");

            lsDB.list.Add(todoItem);
            return todoItem;
        }
    }

}