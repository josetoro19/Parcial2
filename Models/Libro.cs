
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class Libro
    {

        [Key] [JsonProperty("id")][DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }
        [JsonProperty("titulo")]  public string Titulo { get; set; }
        [JsonProperty("precioVenta")]  public int PrecioVenta { get; set; }
        [JsonProperty("popularidad")]  public bool Popularidad { get; set; }
    }
}