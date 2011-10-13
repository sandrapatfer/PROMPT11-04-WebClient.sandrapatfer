using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text;

namespace DrawingsServer
{
    public static class Extensions
    {
        public static MvcHtmlString FileInput(this HtmlHelper htmlHelper, string inputId)
        {
            return MvcHtmlString.Create(string.Format("<input type=\"file\" id=\"{0}\" name=\"{0}\" />", inputId));
        }

        public static MvcHtmlString ImageBase64(this HtmlHelper htmlHelper, byte[] image, string imageContentType)
        {
            return MvcHtmlString.Create(string.Format("<img src=\"data:{0};base64,{1}\" />", imageContentType,
                Convert.ToBase64String(image)));
        }
    }
}