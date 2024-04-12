
import Method from "../../assets/images/methods.png"

const Copyright=()=>{
    return(<div className="bg-gray-800 py-4">
    <div className="container flex items-center justify-between">
      <p className="text-white">© Store3X - All Right Reserved</p>
      <div>
        <img src={Method} alt="methods" className="h-5" />
      </div>
    </div>
  </div>)
}

export default Copyright;