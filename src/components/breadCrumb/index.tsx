import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import { StAll } from "./style";

const BreadCrumb = () => {
  return (
    <StAll>
      <Breadcrumb
        items={[
          {
            title: <Link href={"/"}>All</Link>,
          },
          {
            title: <Link href="/browse">Application List</Link>,
          },
        ]}
      />
    </StAll>
  );
};

export default BreadCrumb;
