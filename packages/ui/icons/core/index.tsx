import dynamic from 'next/dynamic';

const core = {
  // InsertIconDict
  Search: dynamic(() => import('./Search')),
  Error: dynamic(() => import('./Error')),
  Quote: dynamic(() => import('./Quote')),
  Person: dynamic(() => import('./Person')),
  SolidArrowDown: dynamic(() => import('./SolidArrowDown')),
  SolidArrowUp: dynamic(() => import('./SolidArrowUp')),
  SolidArrowRight: dynamic(() => import('./SolidArrowRight')),
  SolidArrowLeft: dynamic(() => import('./SolidArrowLeft')),
  DoubleCaretDown: dynamic(() => import('./DoubleCaretDown')),
  DoubleCaretUp: dynamic(() => import('./DoubleCaretUp')),
  DoubleCaretRight: dynamic(() => import('./DoubleCaretRight')),
  DoubleCaretLeft: dynamic(() => import('./DoubleCaretLeft')),
  CaretDown: dynamic(() => import('./CaretDown')),
  CaretUp: dynamic(() => import('./CaretUp')),
  CaretRight: dynamic(() => import('./CaretRight')),
  CaretLeft: dynamic(() => import('./CaretLeft')),
  ArrowNesting: dynamic(() => import('./ArrowNesting')),
  LinkOut: dynamic(() => import('./LinkOut')),
  ArrowDown: dynamic(() => import('./ArrowDown')),
  ArrowRight: dynamic(() => import('./ArrowRight')),
  ArrowUp: dynamic(() => import('./ArrowUp')),
  ArrowLeft: dynamic(() => import('./ArrowLeft')),
  MinusSign: dynamic(() => import('./MinusSign')),
  PlusSign: dynamic(() => import('./PlusSign')),
  Close: dynamic(() => import('./Close'))
};

export default core;
