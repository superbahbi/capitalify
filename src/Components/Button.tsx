import React from "react";
import styled from "styled-components";
const ButtonContainer = styled.button<ButtonProps>`
  grid-area: ${(p) => p.area};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-left: 30px;
  padding-right: 30px;
  ${(p) => {
    switch (p.size) {
      case "sm":
        return `height: 24px;`;
      case "md":
        return `height: 32px;`;
      case "lg":
        return `height: 48px;`;
      case "xl":
        return `height: 64px;`;
      default:
        return `height: 16px;`;
    }
  }}
  ${(p) => {
    return p.primary
      ? `color: white; background-color: #ec994b;`
      : `color: #ec994b; background-color: white;`;
  }}
  border: 1px solid #ec994b;
  border-radius: 41px;
  cursor: pointer;
`;
const ButtonIcon = styled.img`
  height: 24px;
  width: 24px;
  line-height: 24px;
  vertical-align: middle;
  padding-right: 10px;
`;
interface ButtonProps {
  name?: string;
  area?: string;
  primary?: boolean;
  secondary?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  icon?: string;
}
const Button: React.FC<ButtonProps> = ({
  name,
  area,
  primary,
  secondary,
  size,
  icon,
}: ButtonProps) => {
  return (
    <ButtonContainer
      area={area}
      primary={primary}
      secondary={secondary}
      size={size}
    >
      {icon && <ButtonIcon src={icon} alt="bag" />}
      {name}
    </ButtonContainer>
  );
};
export default Button;
