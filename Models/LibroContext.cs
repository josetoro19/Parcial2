using Microsoft.EntityFrameworkCore;

namespace TaskSharpHTTP.Models
{
public class LibroContext : DbContext
{
public LibroContext(DbContextOptions<LibroContext> options) :
base(options)
{
}
public DbSet<Libro> libros { get; set; }
}
}