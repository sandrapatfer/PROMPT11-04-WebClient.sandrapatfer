using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DrawingsServer.DomainModel.Services;
using DrawingsServer.DomainModel;
using System.Text.RegularExpressions;

namespace DrawingsServer.Controllers
{
    using Utils;

    public class DrawingsController : Controller
    {
        IDrawingsService m_drawingsService;

        public DrawingsController(IDrawingsService svc)
        {
            m_drawingsService = svc;
        }

        //
        // GET: /Drawings/

        public ActionResult Index(int PageNumber)
        {
            return View(m_drawingsService.GetAllDrawings(PageNumber, Config.PageSize));
        }

        public PartialViewResult Paging(int PageNumber, string Title)
        {
            return PartialView("_DrawingsTable", m_drawingsService.GetAllDrawings(Title, PageNumber, Config.PageSize));
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
        public ActionResult Create(HttpPostedFileBase drawingImageFile, string canvasImage)
        {
            Drawing newDraw = FillDrawing(new Drawing(), drawingImageFile, canvasImage);
            if (newDraw != null)
            {
                m_drawingsService.Add(newDraw);
                return RedirectToAction("Index");
            }
            return View(newDraw);
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
        public ActionResult Edit(Drawing newDrawing, HttpPostedFileBase drawingImageFile, string canvasImage)
        {
            if (ModelState.IsValid)
            {
                Drawing drawing = m_drawingsService.Get(newDrawing.Id);
                drawing = FillDrawing(drawing, drawingImageFile, canvasImage);
                if (drawing != null)
                {
                    m_drawingsService.Update(drawing);
                    return RedirectToAction("Index");
                }
            }
            return View(newDrawing);
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


        //
        // AJAX GET: /Drawings/Latest

        public JsonResult Latest(int lastId)
        {
            return Json(m_drawingsService.GetLatest(lastId, Config.LatestPageSize).Select(d => new { Id = d.Id, Title = string.IsNullOrEmpty(d.Title) ? " " : d.Title, ImageSource = String.Format("data:{0};base64,{1}", d.ImageContentType, Convert.ToBase64String(d.Image)) }),
                JsonRequestBehavior.AllowGet);
        }

        private Drawing FillDrawing(Drawing newDraw, HttpPostedFileBase drawingImage, string canvasImage)
        {
            TryUpdateModel(newDraw);
            if (ModelState.IsValid)
            {
                if (drawingImage != null)
                {
                    newDraw.ImageContentType = drawingImage.ContentType;
                    newDraw.Image = new byte[drawingImage.ContentLength];
                    drawingImage.InputStream.Read(newDraw.Image, 0, drawingImage.ContentLength);
                    return newDraw;
                }
                else if (canvasImage != null)
                {
                    Regex expr = new Regex("data:(.*);base64,(.*)");
                    MatchCollection matches = expr.Matches(canvasImage);
                    if (matches.Count == 1 && matches[0].Groups.Count == 3)
                    {
                        // first group in match is the whole text
                        newDraw.ImageContentType = matches[0].Groups[1].Value;
                        newDraw.Image = Convert.FromBase64String(matches[0].Groups[2].Value);
                    return newDraw;
                    }
                }
            }
            return null;
        }

    }
}
