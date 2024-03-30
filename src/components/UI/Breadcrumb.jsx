

const Breadcrumb=()=>{
    return(<div className="container py-4 flex items-center gap-3">
    <a href="../index.html" className="text-red-700 text-base">
      <i className="fa-solid fa-house" />
    </a>
    <span className="text-sm text-gray-400">
      <i className="fa-solid fa-chevron-right" />
    </span>
    <p className="text-gray-600 font-medium">Shop</p>
    
  </div>
  )
}

export default Breadcrumb;