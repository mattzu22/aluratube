import { StyledTimeline } from "./style";

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

  export default Timeline;