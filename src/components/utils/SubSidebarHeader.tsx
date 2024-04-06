import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Icons from '../../shared/icons';

const SubSidebarHeader = React.memo((props: any) => {
  return (
    <MDBDropdown className='sub-sidebar-header'>
        <MDBDropdownToggle>
            <div>Paulos Ab's server</div> 
            <Icons.AngleBottom />
        </MDBDropdownToggle>
        <MDBDropdownMenu>
            <MDBDropdownItem link>Action</MDBDropdownItem>
            <MDBDropdownItem link>Another action</MDBDropdownItem>
            <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
  );
})

export default SubSidebarHeader;