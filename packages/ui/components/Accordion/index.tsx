'use client';

import type { FAQBlockT } from '@mono/types/payload-types';
import Icon from '@mono/ui/components/RenderIcon';
import RichText from '@mono/ui/components/primitives/RichText';
import type React from 'react';
import { useCallback, useMemo, useState } from 'react';

export type AccordionProps = Partial<FAQBlockT>;

function Accordion({
  items,
  children
}: AccordionProps & { children?: React.ReactNode }) {
  const [openSections, setOpenSections] = useState<boolean[]>(
    Array(items?.length).fill(false)
  );

  const toggleOpen = useCallback(
    (index: number) => {
      const updatedOpenSections = openSections.map((item, i) =>
        i === index ? !item : item
      );
      setOpenSections(updatedOpenSections);
    },
    [openSections]
  );

  const accordionItems = useMemo(() => {
    return items?.map(({ title, content }, index) => {
      const key = `${title}-${index}`;

      return (
        <li key={key}>
          <button
            type="button"
            aria-label={title ? `Toggle ${title}` : 'Toggle section'}
            tab-index="0"
            onClick={() => toggleOpen(index)}
            aria-expanded={openSections[index]}
            aria-controls={`section-${index}`}
          >
            <div className={openSections[index] ? 'open' : ''}>{title}</div>
            <div>
              {openSections[index] ? (
                <Icon name="CaretUp" size="20" color="currentColor" />
              ) : (
                <Icon name="CaretDown" size="20" color="currentColor" />
              )}
            </div>
          </button>
          <div
            id={`section-${index}`}
            className={openSections[index] ? 'open' : ''}
          >
            {content && <RichText {...content} />}
            {children}
          </div>
        </li>
      );
    });
  }, [items, toggleOpen, openSections, children]);

  if (!items) {
    return null;
  }

  return <ul>{accordionItems}</ul>;
}

export default Accordion;
