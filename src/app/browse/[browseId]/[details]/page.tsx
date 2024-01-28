import { Drawer } from "antd";
import React, { FC } from "react";
import { StRow } from "../../style";
import MenuList from "../../../../components/menuList";
import { Datas } from "../../../../helpers/datas";
import { useState } from "react";

interface PropTypes {
  setopenDetails?: any;
  openDetails?: boolean;
  items?: any;
  title?: string;
}

const DetailsDrawer: FC<PropTypes> = ({
  setopenDetails,
  openDetails,
  items,
  title,
}) => {
  return (
    <>
      {items?.map((res: any, index: any) => (
        <>
          <Drawer
            key={index}
            width={1000}
            title={title ? title : "products"}
            bodyStyle={{ padding: 5 }}
            open={openDetails}
            onClose={() => setopenDetails(false)}
          >
            {items?.map((res: any, index: any) => (
              <MenuList key={index} data={res} />
            ))}
          </Drawer>
          <MenuList data={res} />
        </>
      ))}
    </>
  );
};

export default DetailsDrawer;
