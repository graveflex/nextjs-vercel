'use client';

import React, { useCallback, useMemo, useState } from 'react';
import RichText from '@mono/ui/components/primitives/RichText';
import Icon from '@mono/ui/components/RenderIcon';
import s, { css } from '@refract-ui/sc';

const ContentStyles = s.div`
  padding-bottom: 1.125rem;
`;

const Content = s.div`
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
        text-decoration: underline;
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

  ${hoverStyles};
`;

const InnerList = s.li`
  list-style: none;
  margin: 0;
  cursor: pointer;
  overflow: hidden;

  ${({ theme: { allColors } }) => css`
    border-top: 1px solid ${allColors.plainFg};

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

export type AccordionProps = {
  title?: string;
  items?: {
    text?: string | null;
    content?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: 'ltr' | 'rtl' | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    id?: string | null;
  }[];
  children?: React.ReactNode;
};

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
    return items?.map(({ text, content }, index) => {
      const key = `${text}-${index}`;

      return (
        <InnerList key={key}>
          <TextButton
            aria-label={text ? `Toggle ${text}` : 'Toggle section'}
            tab-index="0"
            onClick={() => toggleOpen(index)}
            aria-expanded={openSections[index]}
            aria-controls={`section-${index}`}
          >
            <Text className={openSections[index] ? 'open' : ''}>{text}</Text>
            <IconContainer>
              {openSections[index] ? (
                <Icon name="MinusSign" size="35" color="currentColor" />
              ) : (
                <Icon name="PlusSign" size="35" color="currentColor" />
              )}
            </IconContainer>
          </TextButton>
          <Content
            id={`section-${index}`}
            className={openSections[index] ? 'open' : ''}
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
