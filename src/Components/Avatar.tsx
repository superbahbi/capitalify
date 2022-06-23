import React from "react";
import styled from "styled-components";

const AvatarContainer = styled.div<AvatarProps>`
  position: absolute;
  width: 60px;
  height: 70px;
  border-radius: 100%;
  top: ${(p) => (p.top ? p.top : "0")};
  left: ${(p) => (p.left ? p.left : "0")};
`;
const AvatarImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  object-fit: cover;
`;

interface AvatarProps {
  src?: string;
  top?: string;
  left?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, top, left }) => {
  return (
    <AvatarContainer top={top} left={left}>
      <AvatarImage src={src} />
    </AvatarContainer>
  );
};
export default Avatar;
