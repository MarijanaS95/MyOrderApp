using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication10.Models;

namespace WebApplication10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuitemCartsController : ControllerBase
    {
        private readonly menudatabaseContext _context;

        public MenuitemCartsController(menudatabaseContext context)
        {
            _context = context;
        }

        // GET: api/MenuitemCarts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuitemCart>>> GetMenuitemCarts()
        {
            return await _context.MenuitemCarts.ToListAsync();
        }

        // GET: api/MenuitemCarts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuitemCart>> GetMenuitemCart(int id)
        {
            var menuitemCart = await _context.MenuitemCarts.FindAsync(id);

            if (menuitemCart == null)
            {
                return NotFound();
            }

            return menuitemCart;
        }

        // PUT: api/MenuitemCarts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuitemCart(int id, MenuitemCart menuitemCart)
        {
            if (id != menuitemCart.MenuItemId)
            {
                return BadRequest();
            }

            _context.Entry(menuitemCart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuitemCartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MenuitemCarts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuitemCart>> PostMenuitemCart(MenuitemCart menuitemCart)
        {
            _context.MenuitemCarts.Add(menuitemCart);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MenuitemCartExists(menuitemCart.MenuItemId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMenuitemCart", new { id = menuitemCart.MenuItemId }, menuitemCart);
        }

        [HttpPost]
        [Route("PostMenuitemsForCart")]
        public async Task<ActionResult<List<MenuitemCart>>> PostMenuitemsForCart(List<MenuitemCart> menuitemsForCart)
        {
            _context.ChangeTracker.Clear();
            _context.MenuitemCarts.AddRange(menuitemsForCart);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException error)
            {
               
            }

            return CreatedAtAction("GetMenuitemCart", menuitemsForCart);
        }

        // DELETE: api/MenuitemCarts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuitemCart(int id)
        {
            var menuitemCart = await _context.MenuitemCarts.FindAsync(id);
            if (menuitemCart == null)
            {
                return NotFound();
            }

            _context.MenuitemCarts.Remove(menuitemCart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuitemCartExists(int id)
        {
            return _context.MenuitemCarts.Any(e => e.MenuItemId == id);
        }
    }
}
