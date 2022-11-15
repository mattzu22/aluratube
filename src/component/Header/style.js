import styled from "styled-components";


export const StyledHeader = styled.div`
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

export const StyledBanner = styled.div`
  background: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  height: 300px;
`;