---
to: "<%= isPayloadBlock ? 'apps/web/src/components/index.tsx' : null %>" 
inject: true
after: CODE INJECTION COMMENT
skip_if: "<%= name %>Schema"
---

export const <%= name %> = dynamic(() => import("./<%= name %>"), {
    ssr: true
}) as React.FC;

