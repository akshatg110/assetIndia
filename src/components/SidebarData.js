import React from 'react'
import HomeIcon from '@material-ui/icons/Home' 
import AssessmentIcon from '@material-ui/icons/Assessment';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import PublicIcon from '@material-ui/icons/Public';
import ContactsIcon from '@material-ui/icons/Contacts';

export const SidebarData = [
    {
        title:'Home',
        icon:<HomeIcon />,
        link:"/home"
    },
    {
        title:'About Us',
        icon:<AssessmentIcon />,
        link:"/home"
    },
    {
        title:'Our Work',
        icon:<WorkIcon />,
        link:"/home"
    },
    {
        title:'Get Involved',
        icon:<DescriptionIcon />,
        link:"/home"
    },
    {
        title:'Publication',
        icon:<PublicIcon />,
        link:"/home"
    },
    {
        title:'Contact Us',
        icon:<ContactsIcon />,
        link:"/home"
    }
]
