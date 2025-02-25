'use client';

import type { Tag } from '@mono/types/payload-types';
import Wrapper from '@mono/web/components/Wrapper';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type React from 'react';
import { useEffect, useState } from 'react';

type QueryProps = {
  selectedTags: string[];
  sort: string;
  search: string;
  page: string;
};

const buildQuery = (query: {
  selectedTags: string[];
  sort: string;
  search: string;
  page: string;
}) => {
  const searchParams = new URLSearchParams();

  searchParams.append('filter', query.selectedTags.join(','));
  searchParams.append('sort', query.sort);
  searchParams.append('search', query.search);
  searchParams.append('page', query.page);

  return searchParams.toString();
};

const isSelected = (tag: string, query: QueryProps) => {
  return query.selectedTags.includes(tag);
};

function TagsClient({ tagData }: { tagData: Tag[] }) {
  const initialParams = useSearchParams();
  const initialFilter =
    initialParams?.get('filter')?.split(',') ?? ([] as string[]);
  const initialSort = initialParams?.get('sort') ?? '';
  const initialSearch = initialParams?.get('search') ?? '';
  const initialPage = initialParams?.get('page') ?? '';

  const [query, setQuery] = useState<QueryProps>({
    selectedTags: initialFilter,
    sort: initialSort,
    search: initialSearch,
    page: initialPage
  });
  const [debouncedQuery, setDebouncedQuery] = useState<QueryProps>(query);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    let nextPath = path;

    if (
      debouncedQuery.page ||
      debouncedQuery.sort ||
      debouncedQuery.search ||
      debouncedQuery.selectedTags.length
    ) {
      nextPath = `${path}?${buildQuery(debouncedQuery)}`;
    }

    router.push(nextPath);
  }, [path, router, debouncedQuery]);

  const handleTagClick = (tag: string) => {
    setQuery((prevState) => {
      const tagIndex = prevState.selectedTags.indexOf(tag);
      const newTags =
        tagIndex === -1
          ? [...prevState.selectedTags, tag]
          : prevState.selectedTags.filter((t) => t !== tag);
      return { ...prevState, selectedTags: newTags, page: '1' };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery((prevState) => ({ ...prevState, sort: e.target.value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.trim();
    const searchLength = search.length;

    setQuery((prevState) => ({
      ...prevState,
      search: searchLength >= 2 && searchLength <= 20 ? search : '',
      page: '1'
    }));
  };

  return (
    <Wrapper contentWidth="xl">
      <div>
        <div>
          <label>Filter by: </label>
          {tagData.map(({ id, label }) => {
            return (
              <button
                key={id}
                onClick={() => handleTagClick(label)}
                type="button"
                className={isSelected(label, query) ? 'selected' : ''}
                aria-label={`Filter by ${label}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div>
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            onChange={handleSelectChange}
            defaultValue={initialSort}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <label htmlFor="search">Search: </label>
          <input
            id="search"
            type="text"
            placeholder="Search blog..."
            onChange={handleSearchChange}
            defaultValue={initialSearch}
            autoComplete="off"
            aria-label="Search blog posts"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default TagsClient;
