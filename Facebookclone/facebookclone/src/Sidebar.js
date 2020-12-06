import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
            <SidebarRow src='  https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png   ' title="Pages"/>  
            <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png' title="Friends"/>
            <SidebarRow src=' https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png' title="Messenger"/>
            <SidebarRow src=' https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png ' title="Marketplace"/>
            <SidebarRow src='  https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png ' title="Videos"/>
            <SidebarRow src=' https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png ' title="Events"/>
            <SidebarRow src=' https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png  ' title="Memories"/>
            <SidebarRow src=' https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png   ' title="Saved"/>
              
            
        </div>
    )
}

export default Sidebar
