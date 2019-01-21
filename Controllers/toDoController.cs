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
        
        public int genID() {
            if (lsDB.list.Count() > 0) {
                 return lsDB.list.Max(i => i.id) + 1;
            }
            return 0; 
        }

        [HttpGet]
        public IEnumerable<toDoItem> GetAll() {
            // temporary mock DB setup
            return lsDB.list;
        }
        [HttpGet("{id}")]
        public toDoItem Get(int id)
        {
           int index = lsDB.list.FindIndex(i => i.id == id);
           return lsDB.list[index]; 
        }

        [HttpPost]
        public toDoItem Insert([FromBody]toDoItem todoItem)
        {
            // add todoItem to list
            // preprocess/check validity...
            // update ID
            int newID = this.genID();
            Console.WriteLine("Current count is: " + lsDB.list.Count);
            Console.WriteLine("ID created: " + newID);

            todoItem.id = newID;
            Console.WriteLine("*************************************");

            lsDB.list.Add(todoItem);
            return todoItem;
        }

        [HttpDelete("{id}")]
        public toDoItem Delete(int id)
        {
            // remove item from mockDB, no exception handling implemented yet
            // return item 
            int index = lsDB.list.FindIndex(i => i.id == id);
            Console.WriteLine("*************************************");
            Console.WriteLine("index >> " + index);
            Console.WriteLine("*************************************");
            toDoItem result = lsDB.list[index];
            lsDB.list.RemoveAt(index);
            return result;
        }

        [HttpPut("{id}")]
        public toDoItem Update(int id, [FromBody]toDoItem item)
        {
            // update mockDB
            int index = lsDB.list.FindIndex(i => i.id == id);
            lsDB.list[index].shortDescription = lsDB.list[index].shortDescription != item.shortDescription ? item.shortDescription : lsDB.list[index].shortDescription;
            lsDB.list[index].longDescription = lsDB.list[index].longDescription != item.longDescription ? item.longDescription : lsDB.list[index].longDescription;

            toDoItem target = lsDB.list[index]; 

            return target;
        }
    }

}