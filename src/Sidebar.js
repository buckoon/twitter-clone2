import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOptions from './SidebarOptions';
import { Button } from "@mui/material";


export default function Sidebar(){


    return (
<div className="Sidebar">

 <TwitterIcon className = "sidebar_twitterIcon" />
    
    
    
    
  

    <SidebarOptions 
    active
    Icon={HomeIcon}
    text = "Home"
  />

    <SidebarOptions
    Icon={SearchIcon}
    text = "Explore"
    />


<SidebarOptions
    Icon={NotificationsNoneIcon}
    text = "Notifications"
    />

<SidebarOptions
    Icon={MailOutlineIcon}
    text = "Message"
    />

<SidebarOptions
    Icon={BookmarkBorderIcon}
    text = "Bookmarks"
    />


<SidebarOptions
    Icon={ListAltIcon}
    text = "Lists"
    />

<SidebarOptions
    Icon={PermIdentityIcon}
    text = "Profile"
    />

<SidebarOptions
    Icon={MoreHorizIcon}
    text = "More"
    />
   
<Button className = "sidebar_tweet"
 variant ="outlined">
    Tweet
    </Button>

    
 </div>

    
/*22min*/


    );

}
