import React, { Component, ReactComponentElement } from "react";
import { Route, Routes } from "react-router-dom";
import { private_rotes, public_routes } from ".";
import AdminLayout from "../components/layouts/adminLayout";
import ClientLayout from "../components/layouts/clientLayout";
import NoneLayout from "../components/layouts/noneLayout";
import NotFound from "../pages/notfound";

const RoutesMiddleware = () => {

  const createComponent = (name: any) => {
    const NewComponent = name;
    return <NewComponent />;
  };

  return (
    <Routes>
      {public_routes.length &&
        public_routes?.map((item, index) => {
          return (
            <Route
              key={index}
              path={item?.path}
            //   exact={item.exact}
              element={
                item.config.structure === "layout" ? (
                  <AdminLayout>{createComponent(item.component)}</AdminLayout>
                ) : item.config.structure === "clientLayout" ? (
                  <ClientLayout>{createComponent(item.component)}</ClientLayout>
                ) : (
                  <NoneLayout>{createComponent(item.component)}</NoneLayout>
                )
              }
            />
          );
      })}
      
      {
        private_rotes.length && 
        private_rotes?.map((item, index) => {
          return (
              <Route
                key={index}
                path={item?.path}
                // exact={item.exact}
                element={
                  item.config.structure === "layout" ? (
                    <AdminLayout>{createComponent(item.component)}</AdminLayout>
                  ) : item.config.structure === "clientLayout" ? (
                    <ClientLayout>{createComponent(item.component)}</ClientLayout>
                  ) : (
                    <NoneLayout>{createComponent(item.component)}</NoneLayout>
                  )
                }
              />
          )
        })
      }
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default RoutesMiddleware;