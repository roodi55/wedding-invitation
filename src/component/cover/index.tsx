import {
  LOCATION,
  WEDDING_DATE,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="info">
        {WEDDING_DATE.format("YYYY년 MMMM D일 dddd A h시")}
      </div>
      <div className="info">{LOCATION}</div>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
    </LazyDiv>
  )
}
