'use client';

import type { FAQBlockT } from '@mono/types/payload-types';
import Icon from '@mono/ui/components/RenderIcon';
import RichText from '@mono/ui/components/primitives/RichText';
import s, { css } from '@refract-ui/sc';
import { motion } from 'framer-motion';
import type React from 'react';
import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

const ContentStyles = s.div`
  padding-bottom: 1.125rem;
`;

const Content = styled(motion.div)`
  overflow: hidden;
  height: 0;
  display: none;

  &.open {
    height: auto;
    display: block;
  }
`;

const IconContainer = s.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

const Text = s.span`
  display: block;

  ${({ theme: { box, allColors } }) => css`
    ${box.t('h3')};
    color: ${allColors.plainFg};
  `}
`;

const hoverStyles = css`
  ${({ theme: { allColors } }) => css`
    &:hover {
      outline: none;

      svg {
        color: ${allColors.plainHover};
      }

      ${Text} {
        color: ${allColors.plainHover};
      }
    }
  `}
`;

const TextButton = s.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  column-gap: 2rem;
  width: 100%;
  padding: 1.125rem 0;

  &:hover {
    background: transparent;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

  ${hoverStyles};
`;

const InnerList = s.li`
  list-style: none;
  margin: 0;
  cursor: pointer;
  overflow: hidden;

  ${({ theme: { allColors } }) => css`
    border-bottom: 1px solid ${allColors.plainFg};

    svg {
      color: ${allColors.plainFg};
    }

    ${hoverStyles};
  `}
`;

const List = s.ul`
  margin: 0;
  padding: 0;
`;

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
        <InnerList key={key}>
          <TextButton
            aria-label={title ? `Toggle ${title}` : 'Toggle section'}
            tab-index="0"
            onClick={() => toggleOpen(index)}
            aria-expanded={openSections[index]}
            aria-controls={`section-${index}`}
          >
            <Text className={openSections[index] ? 'open' : ''}>{title}</Text>
            <IconContainer>
              {openSections[index] ? (
                <Icon name="CaretUp" size="20" color="currentColor" />
              ) : (
                <Icon name="CaretDown" size="20" color="currentColor" />
              )}
            </IconContainer>
          </TextButton>
          <Content
            id={`section-${index}`}
            className={openSections[index] ? 'open' : ''}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openSections[index] ? 'auto' : 0,
              opacity: openSections[index] ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            <ContentStyles>
              {content && <RichText {...content} />}
              {children}
            </ContentStyles>
          </Content>
        </InnerList>
      );
    });
  }, [items, toggleOpen, openSections, children]);

  if (!items) {
    return null;
  }

  return <List>{accordionItems}</List>;
}

export default Accordion;
