import React from 'react';

// mui components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';

// mui icons
import SchoolIcon from '@material-ui/icons/School';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';

function ProfileAppBar({ selectedTab, onTabChange }) {
   return (
      <>
         <CssBaseline />

         <AppBar position="sticky" color="secondary">
            <Tabs
               value={selectedTab}
               onChange={onTabChange}
               variant="fullWidth"
            >
               <Tab label="Bio" icon={<InfoIcon />} />
               <Tab label="Experience" icon={<WorkIcon />} />
               <Tab label="Education" icon={<SchoolIcon />} />
               <Tab label="Languages" icon={<LanguageIcon />} />
               <Tab label="Skills" icon={<BuildIcon />} />
            </Tabs>
         </AppBar>
      </>
   );
}

export default ProfileAppBar;
