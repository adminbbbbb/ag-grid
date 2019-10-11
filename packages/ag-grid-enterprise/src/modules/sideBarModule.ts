import {Grid, Module, ModuleNames} from "ag-grid-community";
import {HorizontalResizeComp} from "./sideBar/horizontalResizeComp";
import {SideBarComp} from "./sideBar/sideBarComp";
import {SideBarButtonsComp} from "./sideBar/sideBarButtonsComp";

export const SideBarModule: Module = {
    moduleName: ModuleNames.SideBarModule,
    beans: [],
    agStackComponents: [
        {componentName: 'AgHorizontalResize', componentClass: HorizontalResizeComp},
        {componentName: 'AgSideBar', componentClass: SideBarComp},
        {componentName: 'AgSideBarButtons', componentClass: SideBarButtonsComp},
    ]
};

Grid.addModule([SideBarModule]);