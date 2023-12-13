import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo: React.FC = () => {
  const shibaFaceImg = `/assets/naughty.png`;
  return (
    <Link href="/" passHref>
      <LogoBox>
        <Image src={shibaFaceImg} width={30} height={30} alt="logo" />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Aruga Dev
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
