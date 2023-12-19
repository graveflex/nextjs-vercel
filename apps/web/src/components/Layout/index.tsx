import React from "react";
import { type PropsWithChildren } from "react";

import Client from "@web/components/Layout/Client";
import fetchPayloadData from "@web/lib/fetchPayloadData";

const Layout = async ({ children }: PropsWithChildren<{}>) => {
  const navigation = await fetchPayloadData((client) =>
    client.findGlobal({ slug: "navigation" })
  );
  return <Client navigation={navigation}>{children}</Client>;
};

export default Layout;
