namespace firstProjectWebApi.Models // static, call method directly using class name without instantiating object of it
{
    public class toDoItem
    {
        public int id { get; set; } 
        public string shortDescription { get; set; }
        public string longDescription { get; set; }
    }
}