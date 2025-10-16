import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { AttendanceInfo } from "./attendance"

export const Information1 = () => {
  const { openModal, closeModal } = useModal()

  return (
    <>
      <div className="info-card">
        <h3 className="english">신랑 & 신부에게 마음 전하기</h3>
        {/* <div className="content">
          축복의 의미로 축의금을 전달해보세요.
        </div> */}

        <div className="break" />
        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              // header: <div className="title">신랑측 계좌번호</div>,
              content: (
                <>
                  {GROOM_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="title">{relation} 계좌</div>
                          <div className="name">
                            <span className="relation">{account.split(" ")[0]} (예금주:</span> {name})
                          </div>
                          <div>{account.split(" ")[1]}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          계좌번호 복사
                        </Button>
                      </div>
                    ),
                  )}
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="border-box"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          신랑측 계좌번호
        </Button>
        <div className="break" />
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            openModal({
              className: "donation-modal",
              closeOnClickBackground: true,
              // header: <div className="title">신부측 계좌번호</div>,
              content: (
                <>
                  {BRIDE_INFO.filter(({ account }) => !!account).map(
                    ({ relation, name, account }) => (
                      <div className="account-info" key={relation}>
                        <div>
                          <div className="title">{relation} 계좌</div>
                          <div className="name">
                            <span className="relation">{account.split(" ")[0]} (예금주:</span> {name})
                          </div>
                          <div>{account.split(" ")[1]}</div>
                        </div>
                        <Button
                          className="copy-button"
                          onClick={async () => {
                            if (account) {
                              try {
                                navigator.clipboard.writeText(account)
                                alert(account + "\n복사되었습니다.")
                              } catch {
                                alert("복사에 실패했습니다.")
                              }
                            }
                          }}
                        >
                          계좌번호 복사
                        </Button>
                      </div>
                    ),
                  )}
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="border-box"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          신부측 계좌번호
        </Button>
      </div>
    </>
  )
}

export const Information = () => {

  return (
    <LazyDiv className="card information">
      <Information1 />
      <AttendanceInfo />
    </LazyDiv>
  )
}
