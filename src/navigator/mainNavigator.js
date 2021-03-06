import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList67077Navigator from '../features/ArticleList67077/navigator';
import ArticleList67076Navigator from '../features/ArticleList67076/navigator';
import ArticleList67075Navigator from '../features/ArticleList67075/navigator';
import ArticleList65667Navigator from '../features/ArticleList65667/navigator';
import ArticleList65666Navigator from '../features/ArticleList65666/navigator';
import ArticleList65665Navigator from '../features/ArticleList65665/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList67077: { screen: ArticleList67077Navigator },
ArticleList67076: { screen: ArticleList67076Navigator },
ArticleList67075: { screen: ArticleList67075Navigator },
ArticleList65667: { screen: ArticleList65667Navigator },
ArticleList65666: { screen: ArticleList65666Navigator },
ArticleList65665: { screen: ArticleList65665Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
