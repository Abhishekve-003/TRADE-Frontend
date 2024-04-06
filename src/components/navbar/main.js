import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import TemporaryDrawer from './TemporaryDrawer';
import Desktopdrawer from './Desktopdrawer';
import SearchAppBar from './Mobiledrawer';




function NavBarTop({children}) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div >
      <Grid container spacing={0}>
        {isMobile && (
          <>
            <Grid item xs={12}>
              <SearchAppBar />
            </Grid>
            <Grid item xs={12}>
              <TemporaryDrawer >
                {children}
              </TemporaryDrawer>
            </Grid>
          </>
        )}

        {!isMobile && (
          <Grid item xs={12}>
            <Desktopdrawer >
                {children}
            </Desktopdrawer>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default NavBarTop;
