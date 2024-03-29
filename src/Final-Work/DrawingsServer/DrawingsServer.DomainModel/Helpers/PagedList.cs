﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright file="PagedList.cs" company="Centro de Cálculo do ISEL - CCISEL">
//   Luís Falcão - 2011
// </copyright>
// <summary>
//   Defines the PagedList type.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace DrawingsServer.DomainModel.Helpers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class PagedList<T> : List<T>, IPagedList<T>
    {

        private void CreatePagedList(int total, int pageSize, int pageIndex)
        {
            TotalCount = total;
            PageSize = pageSize;
            PageIndex = pageIndex;
            TotalPages = (int) Math.Ceiling(total/(double) pageSize);
        }

        public PagedList(IQueryable<T> source, int pageIndex, int pageSize)
        {
            CreatePagedList(source.Count(), pageSize, pageIndex);
            AddRange(source.Skip(pageIndex * pageSize).Take(pageSize));
        }

        public PagedList(IEnumerable<T> source, int total, int pageIndex, int pageSize)
        {
            CreatePagedList(total, pageSize, pageIndex);
            AddRange(source.Skip(pageIndex * pageSize).Take(pageSize));
        }

        public int TotalPages { get; private set; }

        public int TotalCount { get; private set;  }

        public int PageIndex { get; private set; }

        public int PageSize { get; private set; }

        public bool HasPreviousPage
        {
            get { return (PageIndex > 0); }
        }

        public bool HasNextPage
        {
            get { return (PageIndex + 1 < TotalPages); }
        }
    }
}