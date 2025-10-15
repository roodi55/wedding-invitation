import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2025-11-30 13:00", "Asia/Seoul")
export const HOLIDAYS = [30]

export const LOCATION = "더채플앳논현 6층 라포레홀"
export const LOCATION_ADDRESS = "서울 강남구 논현로549(역삼동 607-21)"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION = [127.03455731278, 37.505120053635]

export const NMAP_PLACE_ID = 1106412731
export const KMAP_PLACE_ID = 1992754829

export const BRIDE_FULLNAME = "이정미"
export const BRIDE_FIRSTNAME = "정미"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "이상만"
export const BRIDE_MOTHER = "염미경"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-0000-0000",
    account: "국민은행 641302-01-246163",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-0000-0000",
    account: "국민은행 252102-04-035425",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-0000-0000",
    account: "농협 135-02-476901",
  },
]

export const GROOM_FULLNAME = "박상영"
export const GROOM_FIRSTNAME = "상영"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "박태순"
export const GROOM_MOTHER = "성순환"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-0000-0000",
    account: "하나은행 620-230716-169",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "국민은행 821701-01-087369",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-0000-0000",
    account: "우체국 700310-02-416791",
  },
]