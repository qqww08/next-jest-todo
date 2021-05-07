// eslint-disable-next-line import/namespace
import { NextPage } from "next";
import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";

const Index: NextPage = () => {
  return <div>123</div>;
};
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  console.log(123);
  return {};
};
export default Index;
