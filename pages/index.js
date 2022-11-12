import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/component/Menu/";
import { StyledTimeline } from "../src/component/Timeline";
import { videoServices } from "../src/services/videoService";

function HomePage() {
  const service = videoServices();
  const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
  const [playlist, setPlaylist] = React.useState({});

  React.useEffect(() => {
    service
    .getAllVideos()
    .then((dados) => {
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
        <Timeline searchValue={valorDoFiltro} playlists={playlist}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  /* background: url(${config.bg}) center center no-repeat;
  background-size: cover; */
  background: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  height: 300px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...propriedades }) {
  const playlistNames = Object.keys(propriedades.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
                  return (
                    <a key={index} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
