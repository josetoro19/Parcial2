using Microsoft.EntityFrameworkCore.Migrations;

namespace Ejercicio2.Migrations
{
    public partial class Libro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "libros",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Titulo = table.Column<string>(nullable: true),
                    PrecioVenta = table.Column<int>(nullable: false),
                    Popularidad = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_libros", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "libros");
        }
    }
}
