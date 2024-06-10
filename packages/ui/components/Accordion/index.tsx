'use client';

import React, { useCallback, useMemo, useState } from 'react';
import RichText from '@mono/ui/components/primitives/RichText';
import Icon from '@mono/ui/components/RenderIcon';
import s, { css } from '@refract-ui/sc';

const ContentStyles = s.div`
  padding-bottom: 1.125rem;
`;

const Content = s.div``;

const IconText = s.span`
opacity: 0;
min-width: 4.125rem;
text-align: right;
position: relative;
top: 0.125rem;
transition: opacity 0.2s ease-in-out;

${({ theme: { box } }) => css`
  ${box.t('button')};
`}
`;

const IconContainer = s.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

const Text = s.span<{ $isMenu: boolean }>`
  display: block;
  transition: color 0.2s ease-in-out;

  ${({ theme: { box, allColors }, $isMenu }) => css`
    ${box.t('heading')};
    color: ${allColors.secondary};

    ${$isMenu &&
    css`
      ${box.t('h2')};
      text-transform: uppercase;
    `}
  `}
`;

const hoverStyles = css`
  ${({ theme: { themeColors } }) => css`
    &:hover,
    &:focus {
      border-color: ${themeColors.secondary};
      outline: none;

      svg {
        color: ${themeColors.secondary};
      }

      ${Text} {
        color: currentColor;
        text-decoration: underline;
      }
      ${IconText} {
        opacity: 1;
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
  transition: border-color 0.2s ease-in-out;

  ${({ theme: { allColors } }) => css`
    border-top: 1px solid ${allColors.neutral600};

    svg {
      color: ${allColors.secondary};
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
  isMenu?: boolean;
};

function Accordion({
  items,
  children,
  isMenu = false
}: AccordionProps & { children?: React.ReactNode; isMenu?: boolean }) {
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
      const expandedText = `${openSections[index] ? 'Close' : 'Expand'}`;

      return (
        <InnerList key={key}>
          <TextButton
            aria-label={text ? `Toggle ${text}` : 'Toggle section'}
            tab-index="0"
            onClick={() => toggleOpen(index)}
            aria-expanded={openSections[index]}
            aria-controls={`section-${index}`}
          >
            <Text $isMenu={isMenu}>{text}</Text>
            <IconContainer>
              {expandedText && <IconText>{expandedText}</IconText>}
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
