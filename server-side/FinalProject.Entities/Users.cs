using System;
using System.Collections.Generic;

namespace FinalProject.Models
{
    public partial class Users
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int UserPassword { get; set; }
        public string UserMail { get; set; }
        public string UserPhone { get; set; }
    }
}
