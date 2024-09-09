'use client';
import type { Tag } from '@mono/types/payload-types';
import Button from '@mono/ui/components/Button';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const buildQuery = (query: {
  selectedTags: string[];
  sort: string;
  search: string;
}) => {
  const searchParams = new URLSearchParams();
  if (query.selectedTags.length > 0) {
    searchParams.append('filter', query.selectedTags.join(','));
  }
  searchParams.append('sort', query.sort);
  searchParams.append('search', query.search);

  return searchParams.toString();
};

function TagsClient({ tagData }: { tagData: Tag[] }) {
  const [query, setQuery] = useState({
    selectedTags: [] as string[],
    sort: 'newest',
    search: ''
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

  return (
    <div>
      {tagData.map(({ id, label }) => (
        <button key={id} onClick={() => handleTagClick(label)} type="button">
          {label}
        </button>
      ))}

      <select onChange={handleSelectChange}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      <input type="text" placeholder="Search" onChange={handleSearchChange} />
    </div>
  );
}

export default TagsClient;
