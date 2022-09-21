import { loadInitialProjects_to_localStorage } from './controlData.js';
import { displayOverview } from './displayOverview.js';
import { displayHeader } from './displayHeader.js';

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD DATA AND DISPLAY HEADER + OVERVIEW 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

loadInitialProjects_to_localStorage();

displayHeader();
displayOverview();

