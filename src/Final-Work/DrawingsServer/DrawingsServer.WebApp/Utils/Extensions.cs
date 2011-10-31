using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Text;

namespace DrawingsServer
{
    public static class Extensions
    {
        public static MvcHtmlString FileInput(this HtmlHelper htmlHelper, string inputId)
        {
            return MvcHtmlString.Create(string.Format("<input type=\"file\" id=\"{0}\" name=\"{0}\" />", inputId));
        }

        public static MvcHtmlString ImageBase64(this HtmlHelper htmlHelper, string id, byte[] image, string imageContentType)
        {
            return ImageBase64(htmlHelper, id, image, imageContentType, null);
        }
        
        public static MvcHtmlString ImageBase64(this HtmlHelper htmlHelper, string id, byte[] image, string imageContentType, object htmlAttributes)
        {
            string attrs = "";
            if (htmlAttributes != null)
            {
                var values = new RouteValueDictionary(htmlAttributes);
                StringBuilder attrsBuilder = new StringBuilder();
                foreach (var key in values.Keys)
                {
                    attrsBuilder.AppendFormat("{0} = {1}", key, values[key]);
                }
                attrs = attrsBuilder.ToString();
            }
            return MvcHtmlString.Create(string.Format("<img id=\"{0}\" src=\"data:{1};base64,{2}\" {3} />", id, imageContentType,
                Convert.ToBase64String(image), attrs));
        }
    }
}