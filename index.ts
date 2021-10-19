declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TGTOKEN: string
      TGID: string
    }
  }
}

import got from "got"
import { Result } from "./result"

const tgToken = process.env.TGTOKEN
const tgID = process.env.TGID

const sendMessage = (text: string) => {
  return got
    .get(
      `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgID}&text=${text}`
    )
    .json()
    .then((v) => console.log("message send", v))
    .catch((v) => {
      console.log(v)
    })
}

const fetchResult = () =>
  got
    .get(
      "https://www.apple.com.cn/shop/fulfillment-messages?parts.0=Z14X&option.0=065-CCNY%2C065-CCP4%2C065-CCP7%2C065-CCTX%2C065-CCPD%2C065-CD69%2C065-CCT9%2C065-CD3H%2C065-CD3M&mt=regular&store=R484&_=1634630830495"
    )
    .json<Result>()
    .then((v) => {
      if (v.body.content.deliveryMessage.Z14X.isBuyable) {
        return sendMessage("可以买了")
      } else {
        console.log('不能买')
      }
    })

fetchResult()
