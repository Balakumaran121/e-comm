import { message } from '../config/data'

const Header = () => {
  return (
    <div className="h-10 bg-primaryDark text-white flex items-center justify-center gap-5">
      <p>{message}</p>
      <button className="underline underline-offset-1 ">ShopNow</button>
    </div>
  )
}

export default Header
