using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace WebApplication10.Models
{
    public partial class Menuitem
    {
        public Menuitem()
        {
            MenuitemCarts = new HashSet<MenuitemCart>();
        }

        public int MenuItemId { get; set; }
        public int? MenuId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public byte[] Picture { get; set; }

        public virtual Menu Menu { get; set; }
        public virtual ICollection<MenuitemCart> MenuitemCarts { get; set; }
    }
}
