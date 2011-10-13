using StructureMap;
using DrawingsServer.DomainModel.Services;
using DrawingsServer.DomainModel.ServicesImpl;

namespace DrawingsServer.DependencyResolution
{
    public static class IoC
    {
        public static IContainer Initialize()
        {
            ObjectFactory.Initialize(x =>
                        {
                            x.Scan(scan =>
                            {
                                scan.TheCallingAssembly();
                                scan.WithDefaultConventions();
                            });

                            // IDrawingsService
                            x.For<IDrawingsService>().HttpContextScoped().Use<InMemoryDrawingsService>();
                        });
            return ObjectFactory.Container;
        }
    }
}