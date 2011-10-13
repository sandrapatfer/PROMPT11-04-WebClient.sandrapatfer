using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DrawingsServer.DomainModel.Services;
using DrawingsServer.DomainModel;

namespace DrawingsServer.Controllers
{
    public class DrawingsController : Controller
    {
        IDrawingsService m_drawingsService;

        public DrawingsController(IDrawingsService svc)
        {
            m_drawingsService = svc;
        }

        //
        // GET: /Drawings/

        public ActionResult Index()
        {
            return View(m_drawingsService.GetAllDrawings());
        }

        //
        // GET: /Drawings/Details/5

        public ActionResult Details(int id)
        {
            return View(m_drawingsService.Get(id));
        }

        //
        // GET: /Drawings/Create

        public ActionResult Create()
        {
            return View();
        } 

        //
        // POST: /Drawings/Create

        [HttpPost]
        public ActionResult Create(HttpPostedFileBase drawingImage)
        {
            Drawing newDraw = new Drawing();
            TryUpdateModel(newDraw);
            if (ModelState.IsValid && drawingImage != null)
            {
                newDraw.ImageContentType = drawingImage.ContentType;
                newDraw.Image = new byte[drawingImage.ContentLength];
                drawingImage.InputStream.Read(newDraw.Image, 0, drawingImage.ContentLength);
                m_drawingsService.Add(newDraw);
                return RedirectToAction("Index");
            }
            else
            {
                return View(newDraw);
            }
        }
        
        //
        // GET: /Drawings/Edit/5
 
        public ActionResult Edit(int id)
        {
            return View(m_drawingsService.Get(id));
        }

        //
        // POST: /Drawings/Edit/5

        [HttpPost]
        public ActionResult Edit(Drawing newDrawing)
        {
            if (ModelState.IsValid)
            {
                Drawing drawing = m_drawingsService.Get(newDrawing.Id);
                UpdateModel(drawing);
                m_drawingsService.Update(drawing);
                return RedirectToAction("Index");
            }
            else
            {
                return View(newDrawing);
            }
        }

        //
        // GET: /Drawings/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Drawings/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
