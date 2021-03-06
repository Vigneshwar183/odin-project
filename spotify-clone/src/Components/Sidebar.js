import React from "react";
import '../styles/sidebar.css';
import SidebarOption from '../Components/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from "./DataLayer";


function Sidebar(){
    const [{playlists,token},dispatch]=useDataLayerValue();
    console.log(playlists.items)
    function handlePlaylistClick(playlist_id){
        console.log(playlist_id)
        dispatch({
            type:"SET_CURRENT_PLAYLIST",
            currentPlaylist:playlist_id,
        })
    }
    return(
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"></img>
            <SidebarOption Icon={HomeIcon} title='Home'/>
            <SidebarOption Icon={SearchIcon} title='Search'/>
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>
            <br></br>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr></hr>
            {playlists?.items?.map((playlist,index) =>(
                <SidebarOption title={playlist.name} handlePlaylistClick={handlePlaylistClick} id={playlist.id} key={index}/>
            ))}
        </div>
    )
}

export default Sidebar