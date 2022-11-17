import React from "react";
import config from "../config.json"
import Menu from "../src/component/Menu";
import Timeline  from "../src/component/TimeLine"
import  Header  from "../src/component/Header";
import { videoServices } from "../src/services/videoService";
import  FavoritesChannel  from "../src/component/Favorites";

function HomePage() {
  const service = videoServices();
  const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
  const [playlist, setPlaylist] = React.useState({});

  React.useEffect(() => {
    service.getAllVideos().then((dados) => {
      const novasPlaylists = { ...playlist };
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist].push(video);
      });
      setPlaylist(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setvalorDoFiltro={setvalorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
        Conteúdo
        </Timeline>
        <FavoritesChannel />
      </div>
    </>
  );
}

export default HomePage;
