using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DrawingsServer.DomainModel
{
    public class Drawing
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public byte[] Image { get; set; }
        public string ImageContentType { get; set; }
        public string Author { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastUpdated { get; set; }
        public string Category { get; set; }
    }
}