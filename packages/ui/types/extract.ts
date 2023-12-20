import type { Page } from 'web/src/payload/payload-types';

export type ExtractArray<A> = A extends (infer T)[] ? T : never;

export type Layout = ExtractArray<Required<Page>['layout']>;

export type Block<T extends string> = Extract<Layout, { blockType: T }>;
