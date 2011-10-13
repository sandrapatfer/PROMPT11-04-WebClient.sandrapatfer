using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DrawingsServer.DomainModel.Services;
using System.Threading;

namespace DrawingsServer.DomainModel.ServicesImpl
{
    public class InMemoryDrawingsService : IDrawingsService
    {
        static List<Drawing> m_drawings;
        static int m_newId;

        static InMemoryDrawingsService()
        {
            m_drawings = new List<Drawing>();
            m_newId = 0; 
        }

        #region IDrawingsService Members

        public ICollection<Drawing> GetAllDrawings()
        {
            return m_drawings;
        }

        public void Add(Drawing newDrawing)
        {
            newDrawing.Id = Interlocked.Increment(ref m_newId);
            newDrawing.Created = DateTime.Now;
            newDrawing.LastUpdated = newDrawing.Created;
            m_drawings.Add(newDrawing);
        }

        public Drawing Get(int id)
        {
            return m_drawings.First(d => d.Id == id);
        }

        public void Update(Drawing drawing)
        {
        }

        #endregion
    }
}
