import React from "react";
import { notFound } from "next/navigation";
import { Page } from "@web/payload/payload-types";
import first from "lodash/first";

import RenderBlocks from "@web/components/RenderBlocks";

import getPayloadClient from "@web/payload/payloadClient";

const pageApi = async (slug: string) => {
  const payload = await getPayloadClient();
  try {
    return await payload.find({
      collection: "page",
      where: {
        slug: {
          equals: slug,
        },
      },
    });
  } catch (err) {
    return { error: err };
  }
};

export default async function Page() {
  const data = (await pageApi("home")) as { docs: Page[] };

  const page = first(data?.docs);

  // if there's an error fetching data, 404
  if ("error" in data) {
    return notFound();
  }

  return <RenderBlocks blocks={page?.layout || []} />;
}
