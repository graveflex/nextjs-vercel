'use client';

import type { Tag } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Styled, { css } from 'styled-components';

const Label = Styled.label`
    display: block;
`;

const SelectContent = Styled.div`
    display: grid;
`;

const FilterContent = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  ${({ theme: { spacing, themeColorShades } }) => css`
    gap: ${spacing[4]}rem;

    .selected {
        background-color: ${themeColorShades.secondary30};
    }
  `}
`;

const Container = Styled.div`
    display: grid;
    grid-template-columns: 1fr 260px;
    ${({ theme: { spacing, themeColorShades } }) => css`
    background-color: ${themeColorShades.plain10};
        margin: ${spacing[6]}rem 0;
        padding: ${spacing[4]}rem;
        border-radius: 1.125rem;
    `}
`;

const buildQuery = (query: {
  selectedTags: string[];
  sort: string;
  search: string;
}) => {
  const searchParams = new URLSearchParams();

  if (!query.selectedTags) {
    return '';
  }

  searchParams.append('filter', query.selectedTags.join(','));

  searchParams.append('sort', query.sort);
  searchParams.append('search', query.search);

  return searchParams.toString();
};

function TagsClient({ tagData }: { tagData: Tag[] }) {
  const initialParams = useSearchParams();
  const initialFilter =
    initialParams?.get('filter')?.split(',') ?? ([] as string[]);
  const initialSort = initialParams?.get('sort') ?? 'newest';
  const initialSearch = initialParams?.get('search') ?? '';

  const [query, setQuery] = useState({
    selectedTags: initialFilter,
    sort: initialSort,
    search: initialSearch
  });
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    router.push(`${path}?${buildQuery(query)}`);
  }, [query, router, path]);

  const handleTagClick = (tag: string) => {
    setQuery((prevState) => {
      const tagIndex = prevState.selectedTags.indexOf(tag);
      const newTags =
        tagIndex === -1
          ? [...prevState.selectedTags, tag]
          : prevState.selectedTags.filter((t) => t !== tag);
      return { ...prevState, selectedTags: newTags };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery((prevState) => ({ ...prevState, sort: e.target.value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.trim();
    setQuery((prevState) => ({
      ...prevState,
      search: search.length > 2 ? search : ''
    }));
  };

  const isSelected = (tag: string) => query.selectedTags.includes(tag);

  return (
    <Wrapper contentWidth="xl">
      <Container>
        <FilterContent>
          <Label>Filter by: </Label>
          {tagData.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleTagClick(label)}
              type="button"
              className={isSelected(label) ? 'selected' : ''}
            >
              {label}
            </button>
          ))}
        </FilterContent>

        <SelectContent>
          <Label>Sort by: </Label>
          <select onChange={handleSelectChange} defaultValue={initialSort}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <Label>Search: </Label>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            defaultValue={initialSearch}
          />
        </SelectContent>
      </Container>
    </Wrapper>
  );
}

export default TagsClient;
