import styled from "styled-components";


export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 90px;
    height: 90px;
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

export const StyledBanner = styled.div`
  background: url(${({ bg }) => bg});
  background-position: center ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
`;