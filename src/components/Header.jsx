import { message } from '@config/data'
const Header = () => {
  return (
    <div className="flex-center h-10 bg-primaryDark text-white gap-5">
      <p>{message}</p>
      <button className="underline underline-offset-1 ">ShopNow</button>
    </div>
  )
}

export default Header
