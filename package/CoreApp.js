import React from "react";

import CoreAppDiv from "./components/layouts/CoreAppDiv";
import CoreNavigation from "./components/navigation/CoreNavigation";
import ComponentRegistry from "./config/ComponentRegistry";
import {
  ComponentRegistryContext,
  CoreApplicationContext,
  CoreMenuContext,
  CoreResourceContext,
  FunctionsRegistryContext,
  ValidationsRegistryContext
} from "./config/contextHandler";
import CoreRoutes from "./CoreRoutes";
import AppContainer from "./layout/AppContainer";
import CoreProvider from "./store/CoreProvider";

export default function CoreApp({
  reducers,
  storage,
  componentRegistry,
  appStyles,
  customIcons,
  menuRegistry,
  applicationRegistry,
  resourceRegistry,
  functionsRegistry,
  validationsRegistry,
}) {
  return (
    <CoreProvider
      appReducer={reducers}
      storage={storage}
      appStyles={appStyles}
      customIcons={customIcons}
    >
      <CoreApplicationContext.Provider value={applicationRegistry}>
        <ValidationsRegistryContext.Provider value={validationsRegistry}>
          <FunctionsRegistryContext.Provider value={functionsRegistry}>
            <ComponentRegistryContext.Provider
              value={{ ...componentRegistry, ...ComponentRegistry }}
            >
              <React.StrictMode>
                <CoreResourceContext.Provider value={resourceRegistry}>
                  <CoreMenuContext.Provider value={menuRegistry}>
                    <CoreAppDiv>
                      {/* <CoreDialogContext.Provider value={value}> */}
                      <CoreNavigation>
                        <AppContainer>
                          <CoreRoutes />
                        </AppContainer>
                      </CoreNavigation>

                      {/* <CoreDialog /> */}
                      {/* </CoreDialogContext.Provider> */}
                    </CoreAppDiv>
                  </CoreMenuContext.Provider>
                </CoreResourceContext.Provider>
              </React.StrictMode>
            </ComponentRegistryContext.Provider>
          </FunctionsRegistryContext.Provider>
        </ValidationsRegistryContext.Provider>
      </CoreApplicationContext.Provider>
    </CoreProvider>
  );
}
