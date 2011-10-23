using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DrawingsServer.DomainModel
{
    static class Extensions
    {
        public static IEnumerable<TSource> Last<TSource>(this IEnumerable<TSource> source, int count)
        {
            var last = new List<TSource>();
            var enumerator = source.GetEnumerator();
            while (enumerator.MoveNext())
            {
                if (last.Count < count)
                {
                    last.Add(enumerator.Current);
                }
                else
                {
                    // shift the current elements in the list to add the current in the end
                    for (int i = 0; i < (count - 1); i++)
                    {
                        last[i] = last[i + 1];
                    }
                    last[count - 1] = enumerator.Current;
                }
            }
            return last;
        }
    }
}
