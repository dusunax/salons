import styled from "@emotion/styled";

import Tags from "../tags/tags";

import * as withIcons from "../../../../public/icons/WithIcon";

import text_ego from "../../../../public/icons/text_ego.svg";
import text_life from "../../../../public/icons/text_life.svg";
import text_love from "../../../../public/icons/text_love.svg";
import text_movie from "../../../../public/icons/text_movie.svg";
import text_music from "../../../../public/icons/text_music.svg";
import text_talk from "../../../../public/icons/text_talk.svg";
import text_work from "../../../../public/icons/text_work.svg";
import text_write from "../../../../public/icons/text_write.svg";
import with_text from "../../../../public/icons/with_text.svg";

const ItemImageWrap = ({ imageProps }) => {
  const { host, categoryName, color } = imageProps;

  const imageUrl = host.profileImageUrl;
  const imageAlt = host.introduction;
  const hasBanner = host.title !== null;
  const name = host.nickname;
  const intro = host.title;

  return (
    <StItemImageWrap categoryColor={color}>
      <div className="tag_container">
        <Tags />
      </div>

      <div className="image_container">
        <img
          className="text_image"
          src={`icons/text_${categoryName}.svg`}
          alt="프로필 이미지 배경"
        />
        <img className="profile_image" src={imageUrl} alt={imageAlt} />
      </div>

      {hasBanner && (
        <div className="banner_container">
          <span>{name}</span>
          <div className="middle_bar" />
          <span>{intro}</span>
        </div>
      )}
    </StItemImageWrap>
  );
};

export default ItemImageWrap;

const StItemImageWrap = styled.div`
  position: relative;

  display: flex;
  flex-flow: column;

  ::after {
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;

    background-color: ${(props) => props.categoryColor};
    opacity: 0.1;
  }

  .image_container,
  .tag_container,
  .banner_container {
    display: flex;
    flex-wrap: wrap;
  }

  .image_container {
    flex: 1 1 auto;
    height: 7rem;

    position: relative;

    justify-content: center;
    align-items: center;
  }

  .profile_image {
    height: 75%;
    border-radius: 50%;
    position: relative;

    border: 1px solid ${(props) => props.categoryColor};

    object-fit: cover;
  }

  .text_image {
    width: 100%;

    position: absolute;
  }

  .tag_container {
    padding: 0.5rem 0.7rem;

    position: absolute;
    top: 0;
    z-index: 9;

    gap: 0.4rem;
  }

  .banner_container {
    padding: 0.2rem 0.7rem 0.3rem;
    bottom: 0;

    justify-content: center;
    align-items: center;

    background: ${(props) => props.categoryColor};
    color: #fff;

    font-size: 9px;
    font-weight: 600;

    .middle_bar {
      width: 1px;
      height: 10px;

      margin: 2px 0.3rem;

      background-color: white;
      opacity: 0.2;
    }

    @media (max-width: 400px) {
      flex-flow: column;
      gap: 0;

      .middle_bar {
        display: none;
      }
    }
  }
`;
