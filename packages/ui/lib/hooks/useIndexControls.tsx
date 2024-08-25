import isNull from 'lodash/isNull';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

interface RouteConstructorProps {
  page?: number | null;
  sort?: string | null;
  filter?: string[];
  search?: string | null;
}

const constructRoute = ({
  pathname = '/',
  page = 1,
  filter = [],
  sort,
  search,
  noPath
}: RouteConstructorProps & {
  pathname: string | null;
  search?: string | null;
  noPath?: boolean;
}) => {
  const nextParams: RouteConstructorProps = { page };

  if (filter.length) {
    nextParams.filter = filter;
  }

  if (sort) {
    nextParams.sort = sort;
  }

  if (search) {
    nextParams.search = search;
  }

  const qs = new URLSearchParams(
    nextParams as Record<string, string>
  ).toString();

  if (noPath) {
    return `?${qs}`;
  }

  return `${pathname}?${qs}`;
};

const useIndexControls = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as URLSearchParams;

  const activeFilters = useMemo(
    () => searchParams.get('filter')?.split(',') || [],
    [searchParams]
  );
  const activeSort = useMemo(() => searchParams.get('sort'), [searchParams]);
  const activePage = useMemo(() => searchParams.get('page'), [searchParams]);
  const activeSearch = useMemo(
    () => searchParams.get('search'),
    [searchParams]
  );

  // filter should reset page index, persist sorting
  const setFilter = useCallback(
    (filter: string) => {
      const nextFilters = [...activeFilters];

      const idx = nextFilters.indexOf(filter);

      if (idx > -1) {
        nextFilters.splice(idx, 1);
      } else {
        nextFilters.push(filter);
      }

      const nextRoute = constructRoute({
        page: 1,
        filter: nextFilters,
        sort: activeSort,
        search: activeSearch,
        pathname
      });

      router.replace(nextRoute, { scroll: false });
    },

    [pathname, router, activeFilters, activeSort, activeSearch]
  );

  // page change should persist filters, sorting
  const setPage = useCallback(
    (page: number) => {
      const nextRoute = constructRoute({
        page,
        filter: activeFilters,
        sort: activeSort,
        search: activeSearch,
        pathname
      });

      router.replace(nextRoute, { scroll: false });
    },
    [pathname, router, activeFilters, activeSort, activeSearch]
  );

  // sort should reset page index, persist filters
  const setSort = useCallback(
    (sort: string) => {
      const nextRoute = constructRoute({
        page: 1,
        filter: activeFilters,
        search: activeSearch,
        sort,
        pathname
      });

      router.replace(nextRoute, { scroll: false });
    },
    [pathname, router, activeFilters, activeSearch]
  );

  const setSearch = useCallback(
    (search: string) => {
      const evalPage = isNull(activePage) ? 1 : parseInt(activePage, 10);
      const nextRoute = constructRoute({
        page: evalPage,
        filter: activeFilters,
        sort: activeSort,
        search,
        pathname,
        noPath: true
      });
      window.history.pushState(null, '', nextRoute);
    },
    [pathname, activeFilters, activeSort, activePage]
  );

  return {
    setFilter,
    setPage,
    setSort,
    setSearch,
    activeSearch,
    activeFilters,
    activeSort,
    activePage
  };
};

export default useIndexControls;
