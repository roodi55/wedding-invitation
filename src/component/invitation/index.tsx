import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { IMAGE2 } from "../../images"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h3 className="english">초대합니다</h3>

      <div className="break" />

      <div className="image-wrapper">
        <img src={IMAGE2} alt="sample" />
      </div>

      <div className="content">모든 시작이 11월이었던</div>
      <div className="content">우리의 이야기에</div>
      <br/>
      <div className="content">영원이라는</div>
      <div className="content">제목을 붙입니다.</div>
      <br/>
      <div className="content">저희의 가장 행복한 순간,</div>
      <div className="content">여러분의 축복으로 함께 빛내주세요</div>

      <div className="break" />

      <div className="name-wrapper">
        <div className="name">
          {GROOM_FATHER} · {GROOM_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{GROOM_TITLE}</span>
          </span>{" "}
          {GROOM_FULLNAME}
        </div>
        <div className="name">
          {BRIDE_FATHER} · {BRIDE_MOTHER}
          <span className="relation">
            의 <span className="relation-name">{BRIDE_TITLE}</span>
          </span>{" "}
          {BRIDE_FULLNAME}
        </div>
      </div>

      <div className="break" />

      {/* <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button> */}
    </LazyDiv>
  )
}
