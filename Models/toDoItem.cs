using System.Collections.Generic;
using firstProjectWebApi.Models;

namespace firstProjectWebApi.Models // static, call method directly using class name without instantiating object of it
{
    public class toDoItem
    {
        public int id { get; set; } 
        public string shortDescription { get; set; }
        public string longDescription { get; set; }
    }
}

namespace mockDB
{
    public class mockDataBase
    {
        public List<toDoItem> list;
        
        public mockDataBase() {
            list = new List<toDoItem>();
            list.Add(new toDoItem() { id = 0, shortDescription = "Placeholder", longDescription = "Feel free to delete this placeholder item from your list"});
        }
    }
}