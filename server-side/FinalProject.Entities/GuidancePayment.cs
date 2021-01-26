using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FinalProject.Models
{
    public partial class GuidancePayment
    {
        public GuidancePayment()
        {
            GuidanceRegistrants = new HashSet<GuidanceRegistrants>();
        }

        public int PaymentId { get; set; }
        public string PaymentType { get; set; }

        [JsonIgnore]
        public virtual ICollection<GuidanceRegistrants> GuidanceRegistrants { get; set; }
    }
}
