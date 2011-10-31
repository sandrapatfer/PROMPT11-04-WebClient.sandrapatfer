using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DrawingsServer.DomainModel.Helpers;

namespace DrawingsServer.DomainModel.Services
{
    public interface IDrawingsService
    {
        IPagedList<Drawing> GetAllDrawings(int pageIndex, int pageSize);
        ICollection<Drawing> GetLatest(int count);

        void Add(Drawing newDrawing);

        Drawing Get(int id);

        void Update(Drawing drawing);
    }
}
