using System.Web.Mvc;
using StructureMap;

namespace DrawingsServer.DependencyResolution
{
    public static class AppStart_Structuremap
    {
        public static void Start()
        {
            var container = (IContainer)IoC.Initialize();
            DependencyResolver.SetResolver(new SmDependencyResolver(container));
        }
    }
}