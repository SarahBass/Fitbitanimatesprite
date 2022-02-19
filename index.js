/*--- Import Information from user Account ---*/
import { settingsStorage } from "settings";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";
import { vibration } from "haptics";

const myAnimation = document.getElementById("myAnimation");
myAnimation.animate("enable");
let background = document.getElementById("background");
background.image = "background/background.jpeg";
