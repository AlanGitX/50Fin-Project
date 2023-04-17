import React from 'react'

function Footer() {
  return (
    <div>
<div>

  <footer class="text-center text-lg-start" style={{backgroundColor: "#db6930"}}>
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i class="fab fa-facebook-f"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i class="fab fa-youtube"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
        <i class="fab fa-instagram"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor:"#54456b"}} >
        <i class="fab fa-twitter"></i>
      </button>
    </div>

    <div class="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
      © 2023 Copyright:
      <a class="text-white">&nbsp;Alan Thomas</a>
    </div>
  </footer>
  
</div>
    </div>
  )
}

export default Footer