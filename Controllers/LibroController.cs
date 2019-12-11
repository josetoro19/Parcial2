using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskSharpHTTP.Models;
namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {
        private readonly LibroContext _context;
        public LibroController(LibroContext context)
        {
            _context = context;
            if (_context.libros.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.libros.Add(new Libro {Id=1, Titulo = "Priorizar el proyecto", PrecioVenta = 200000, Popularidad = true });
                _context.libros.Add(new Libro { Id=2,Titulo = "Calendario el proyecto", PrecioVenta = 300000, Popularidad = true });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Libro>>> Getlibros()
        {
            return await _context.libros.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Libro>> GetLibro(int id)
        {
            var taskItem = await _context.libros.FindAsync(id);
            if (taskItem == null)
            {
                return NotFound();
            }
            return taskItem;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Libro>> PostLibro(Libro item)
        { 
             _context.libros.Add(item);
              await _context.SaveChangesAsync();
              return CreatedAtAction(nameof(GetLibro), new { id = item.Id }, item);                    
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLibro(int id, Libro item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibro(int id)
        {
            var Libro = await
            _context.libros.FindAsync(id);
            if (Libro == null)
            {
                return NotFound();
            }

            _context.libros.Remove(Libro);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}