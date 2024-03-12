using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication10.Models
{
    public partial class Menu
    {
        public Menu()
        {
            Menuitems = new HashSet<Menuitem>();
        }

        public int MenuId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }

        public virtual ICollection<Menuitem> Menuitems { get; set; }
    }
}
