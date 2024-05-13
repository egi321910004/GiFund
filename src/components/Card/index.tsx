import React from "react";
import {
  Card as BulmaCard,
  Button,
  Content,
  Heading,
  Media,
} from "react-bulma-components";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  avatar: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  content,
}) => {
  return (
    <div
      style={{
        marginRight: "10px",
      }}
    >
      <BulmaCard style={{ width: 300 }}>
        <BulmaCard.Image size="4by3" src={image} />
        <BulmaCard.Content>
          <Media>
            {/* <Media.Item renderAs="figure" align="left">
              <Image
                size={20}
                alt="64x64"
                src={avatar}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Media.Item> */}
            <Media.Item>
              <Heading size={4}>{title}</Heading>
              <Heading subtitle size={6}>
                {subtitle}
              </Heading>
            </Media.Item>
          </Media>
          <Content>{content}</Content>
          <Button>Detail</Button>
          <Button color="success" style={{ marginLeft: "5px" }}>
            Donate
          </Button>
        </BulmaCard.Content>
      </BulmaCard>
    </div>
  );
};

export default CardComponent;
