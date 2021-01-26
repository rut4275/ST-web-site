using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FinalProject.Models
{
    public partial class MovieAdvertisingType
    {
        public MovieAdvertisingType()
        {
            MovieAdvertising = new HashSet<MovieAdvertising>();
        }

        public int AdvertisingTypeId { get; set; }
        public string AdvertisingTypeName { get; set; }

        [JsonIgnore]
        public virtual ICollection<MovieAdvertising> MovieAdvertising { get; set; }
    }
}
