using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication10.Models
{
    public partial class MenuitemCart
    {
        public int MenuItemId { get; set; }
        public int CartId { get; set; }

        public virtual Cart Cart { get; set; }
        public virtual Menuitem MenuItem { get; set; }
    }
}
