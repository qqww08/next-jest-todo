import { NextPage } from "next";
import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";

const Index: NextPage = () => {
  return <div>123</div>;
};
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  // console.log(store);
  // console.log(req);
  return {};
};
export default Index;
