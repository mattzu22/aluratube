import config from "../../../config.json";
import styled from "styled-components";


const StyleFavorites = styled.div`
  margin-left: 30px;

  .favorites{
    display: flex;
    gap: 30px;
  }

  .channel{
    color: ${({theme}) => theme.textColorBase};
    text-align: center;
    margin-top: 40px;
    max-width: 120px;
  }

  img{
    border-radius: 50%;
  }
`

const FavoritesChannel = () => {
  const favorites = config.favorites.channel
  return (
      <StyleFavorites>
        <h2>Favorites Channels</h2>
        <div className="favorites">
          {favorites.map((favorite, index) => {
            return (
            <a className="channel" href={favorite.url} target="blank" key={index}>
              <img src={favorite.image} alt="imagem" />
              <p>{favorite.name}</p>
            </a>
          )})}
        </div>
      </StyleFavorites>
  );
};

export default FavoritesChannel;
