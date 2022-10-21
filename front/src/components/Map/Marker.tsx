import { MapMarker, CustomOverlayMap, Roadview } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
import { useState } from "react";
import * as S from "./DetailMap.styled";
import closeicon from "../../assets/img/closeimg.png";
import mark from "../../assets/img/marker.png";
interface Markerprops {
  location: Restaurant;
}

function Marker({ location }: Markerprops) {
  const [isOpen, setIsOpen] = useState(false);
  const [roadOpen, setRoadOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <MapMarker
          onClick={() => setIsOpen(!isOpen)}
          position={{ lat: location.y, lng: location.x }}
          image={{
            src: mark,
            size: {
              width: 24,
              height: 35,
            },
          }}
          title={location.name}
        />
      )}
      {isOpen && (
        <CustomOverlayMap position={{ lat: location.y, lng: location.x }}>
          <S.wrap>
            <S.info>
              <S.title>{location.name}</S.title>
              <S.close
                src={closeicon}
                onClick={() => setIsOpen(false)}
                title="닫기"
              ></S.close>
            </S.info>
            <S.body>
              <S.desc>
                <S.ell>{location.location}</S.ell>
              </S.desc>
              {/* <S.road src={roadview} onClick={() => setRoadOpen(!roadOpen)} />
              {roadOpen && (
                <Roadview
                  position={{
                    lat: location.y,
                    lng: location.x,
                    radius: 50,
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              )} */}
            </S.body>
          </S.wrap>
        </CustomOverlayMap>
      )}
    </>
  );
}

export default Marker;
