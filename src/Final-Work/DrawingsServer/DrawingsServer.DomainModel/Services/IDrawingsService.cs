using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DrawingsServer.DomainModel.Services
{
    public interface IDrawingsService
    {
        ICollection<Drawing> GetAllDrawings();

        void Add(Drawing newDrawing);

        Drawing Get(int id);

        void Update(Drawing drawing);
    }
}
