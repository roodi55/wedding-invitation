import { Map } from "./map"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faTrainSubway, faCarRear } from "@fortawesome/free-solid-svg-icons";
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import { MAP } from "../../images"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h3>오시는길</h3>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <div className="image-wrapper">
          <img src={MAP} alt="sample" />
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
      <div className="hr" />
      <div className="location-info">
          <div className="transportation-icon-wrapper">
            <FontAwesomeIcon className="transportation-icon" icon={faBus} />
          </div>
          <div className="content">
            <div className="heading">버스</div>
            ▪️간선(파랑): 147, 463 | 지선(초록): 4211 | 광역: 3600, 9600
            <br/>
            ▪️차병원(역삼방면) 하차 후 역삼역 방면 50m 앞 우측 건물
          </div>
        </div>
        <div className="hr" />
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <FontAwesomeIcon className="transportation-icon" icon={faTrainSubway} />
          </div>
          <div className="content">
            <div className="heading">지하철</div>
            ▪️9호선 언주역 7번 출구에서 정면방향 150m (도보3분)
            <br />
            ▪️2호선 역삼역 6번 출구에서 좌측방향 450m(도보7분)
          </div>
        </div>
        <div className="hr" />
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <FontAwesomeIcon className="transportation-icon" icon={faCarRear} />
          </div>
          <div className="content">
            <div className="heading">주차안내</div>
            먼저 건물 내부 주차장(2층)으로 와주세요.   
            <br />
            ▪️웨딩홀 건물 내부 주차 (1시간 30분 무료)
            <br />
            ▪️만차 시 발렛으로 외부 주차 (2시간 30분 무료)
            <br />
            <br />
            <div className="added">예식 후 출차 시 웨딩홀 입구에서 셔틀버스 탑승 후 외부 주차장으로 이동 (5분 소요)</div>
          </div>
        </div>
        <div className="hr" />
      </LazyDiv>
    </>
  )
}
