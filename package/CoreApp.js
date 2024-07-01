
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidSyncer } from "@wrappid/styles";

import CoreAppDiv from "./components/layouts/CoreAppDiv";
import CoreNavigation from "./components/navigation/CoreNavigation";
import CoreAppStrictWrapper from "./CoreAppStrictWrapper";
import CoreRoutes from "./CoreRoutes";
import CoreProvider from "./store/CoreProvider";

export default function CoreApp(props) {
  const {
    storage,
    appStyles,
    customIcons,
    applicationRegistry,
    themesRegistry,
    routesRegistry,
    menusRegistry,
    componentsRegistry,
    reducersRegistry,
    resourcesRegistry,
    functionsRegistry,
    validationsRegistry,
    applicationConfig
  } = props;

  return (
    <CoreAppStrictWrapper mode={applicationConfig?.environment}>
      <WrappidSyncer data={{
        config: applicationConfig,
        themes: Object.values(themesRegistry)
      }}>
        <CoreProvider
          applicationConfig={{ ...(applicationConfig || {}) }}
          storage={storage}
          appStyles={appStyles}
          customIcons={customIcons}
          applicationRegistry={applicationRegistry}
          themesRegistry={themesRegistry}
          routesRegistry={routesRegistry}
          menusRegistry={menusRegistry}
          componentsRegistry={componentsRegistry}
          reducersRegistry={reducersRegistry}
          resourcesRegistry={resourcesRegistry}
          functionsRegistry={functionsRegistry}
          validationsRegistry={validationsRegistry} 
        >
          <CoreAppDiv>
            <CoreNavigation>
              <CoreRoutes />
            </CoreNavigation>
          </CoreAppDiv>
        </CoreProvider>
      </WrappidSyncer>
    </CoreAppStrictWrapper>
  );
}
