import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

function BreadcrumBoot() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='http://www.google.com' target='blank'>
        {" "}
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href='#'> About</BreadcrumbItem>
      <BreadcrumbItem active> Help</BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadcrumBoot;
