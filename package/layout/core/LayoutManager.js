/* eslint-disable no-console */
import React from "react";

import CoreComponent from "../../components/CoreComponent";
import CoreDialog from "../../components/feedback/CoreDialog";
import CoreModal from "../../components/utils/CoreModal";
import { ComponentRegistryContext, CoreDialogContext } from "../../config/contextHandler";
import BlankLayout from "../BlankLayout";
import BlankLayoutPage from "../page/BlankLayoutPage";
// eslint-disable-next-line import/order
import CoreLayoutItem from "./CoreLayoutItem";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./CoreLayoutPlaceholder";

export default function LayoutManager(props) {
  const { pageName, layoutName } = props;
  
  const [dialog, setDialog] = React.useState({});
  const dialogStates = { dialog, setDialog };
  
  const mergedComponentRegistry = React.useContext(ComponentRegistryContext);

  const [componentsRegistry, setComponentsRegistry] = React.useState({});
  const [layoutsRegistry, setLayoutsRegistry] = React.useState({});
  const [page, setPage] = React.useState(BlankLayoutPage);
  const [layout, setLayout] = React.useState(BlankLayout);

  React.useEffect(() => {
    const [layoutObject, nonLayoutObject] = Object.entries(
      mergedComponentRegistry
    ).reduce(
      ([layoutAcc, nonLayoutAcc], [key, value]) => {
        return value.layout
          ? [{ ...layoutAcc, [key]: value }, nonLayoutAcc]
          : [layoutAcc, { ...nonLayoutAcc, [key]: value }];
      },
      [[], []]
    );

    setComponentsRegistry(nonLayoutObject);
    setLayoutsRegistry(layoutObject);
  }, [mergedComponentRegistry]);

  React.useEffect(() => {
    if(componentsRegistry && componentsRegistry[pageName]?.comp && pageName){
      setPage(componentsRegistry[pageName]?.comp); 
    } 
  }, [pageName, componentsRegistry]);
  
  React.useEffect(() => { 
    if(layoutsRegistry && layoutsRegistry[layoutName]?.comp && layoutName){
      setLayout(layoutsRegistry[layoutName]?.comp); 
    }
  }, [layoutName, layoutsRegistry]);

  const replacePlaceholder = (LayoutComponent, PageComponent) => {
    if (LayoutComponent) {
      let layoutChildrens = LayoutComponent?.props?.children;
  
      if (layoutChildrens && !Array.isArray(layoutChildrens)) {
        layoutChildrens = [layoutChildrens];
      }
  
      console.log("layoutChildrens-------------------------------");
      console.log(layoutChildrens);
      console.log("layoutChildrens-------------------------------");
  
      let pageChildrens = PageComponent?.props?.children;
  
      if (pageChildrens && !Array.isArray(pageChildrens)) {
        pageChildrens = [pageChildrens];
      }
  
      console.log("pageChildrens-------------------------------");
      console.log(pageChildrens);
      console.log("pageChildrens-------------------------------");
      
      /**
       * Supporting old format(s)
       * - without layout
       * - with layout
       */
      if (LayoutComponent.type.name === BlankLayout.name) {
        return PageComponent;
      }
      let layoutPlaceholders = layoutChildrens.filter(layoutChild => layoutChild?.type?.name === CoreLayoutPlaceholder.name);

      if (!layoutPlaceholders) {
        return <CoreComponent componentName={layoutName}>{PageComponent}</CoreComponent>;
      }

      layoutChildrens = layoutChildrens.map((layoutChildren) => {
        if (layoutChildren?.type?.name === CoreLayoutPlaceholder.name) {
          /**
           * @todo
           * 1. if it has a id in props
           * 2. find CoreLayoutItem in pageChildrens which have similar id
           */
          if (layoutChildren?.props?.id) {
            /**
             * @todo
             * 1. get placeholder parent
             * 2. 
            */
         
            let pageChildrenPlaceholders = pageChildrens?.props?.children?.filter(eachItem => eachItem?.type?.name === CoreLayoutPlaceholder.name)[0];
         
            if (pageChildrenPlaceholders > 1) {
              console.log("item has placeholders");
            } else {
              let pageChildren = pageChildrens.filter(eachItem => eachItem?.type?.name === CoreLayoutItem.name && eachItem?.props?.id === layoutChildren?.props?.id)[0];
  
              console.log("pageChildren=", pageChildren);
  
              return pageChildren;
            }
          } else {
            console.log(`placeholder content not available in page component ${pageName}`);
          }
        } else {
          return layoutChildren;
        }
      });
      return layoutChildrens;
    } else {
      return PageComponent;
    }
  };

  return (
    <>
      { /**
         * @todo
         * 1. get the children by id
         * 2. check if the id of the layout placeholder 
              are available in page as layout items
         * Sol
         * 1. children each child name store in child.type.name
         */}

      <CoreModal open={true} />
        
      <CoreDialogContext.Provider value={dialogStates}>
        <CoreDialog />

        {/* LAYOUT CONTENT */}
        <>
          {replacePlaceholder(layout, page)}
        </>

      </CoreDialogContext.Provider>
    </>
  );
}
