import { StyledHeader, StyledBanner }  from "./style"
import config from '../../../config.json'

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

  export default Header;

