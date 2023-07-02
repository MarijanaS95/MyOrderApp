using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication10.Models
{
    public partial class Cart
    {
        public Cart()
        {
            MenuitemCarts = new HashSet<MenuitemCart>();
        }

        public int CartId { get; set; }
        public DateTime? Date { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Note { get; set; }

        public virtual ICollection<MenuitemCart> MenuitemCarts { get; set; }
    }
}
