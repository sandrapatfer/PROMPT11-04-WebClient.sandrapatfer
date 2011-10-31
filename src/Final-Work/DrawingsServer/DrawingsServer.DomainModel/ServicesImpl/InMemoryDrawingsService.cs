﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DrawingsServer.DomainModel.Helpers;
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
            m_drawings = new List<Drawing>
            {
                new Drawing
                {
                    Title = "one drawing",
                    Image = Convert.FromBase64String("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"),
                    ImageContentType = @"image/png"
                },
                new Drawing
                {
                    Title = "another drawing",
                    Image = Convert.FromBase64String("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"),
                    ImageContentType = @"image/png"
                }
            };
            m_newId = m_drawings.Count;
        }

        #region IDrawingsService Members

        public IPagedList<Drawing> GetAllDrawings(int pageIndex, int pageSize)
        {
            return m_drawings.ToPagedList(m_drawings.Count, pageIndex, pageSize);
        }

        public ICollection<Drawing> GetLatest(int count)
        {
            return m_drawings.Last(count).ToList();
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
            drawing.LastUpdated = DateTime.Now;
        }

        #endregion

    }
}
