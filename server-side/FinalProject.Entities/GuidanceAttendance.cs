using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FinalProject.Models
{
    public partial class GuidanceAttendance
    {
        public int MeetingId { get; set; }
        public int RegistrantId { get; set; }
        public bool Attendance { get; set; }

        [JsonIgnore]
        public virtual GuidanceMeetings Meeting { get; set; }
        [JsonIgnore]
        public virtual GuidanceRegistrants Registrant { get; set; }
    }
}
