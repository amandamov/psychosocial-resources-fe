import React from "react";
import "../App.css"

function Footer() {
  return (
     <div className="container-footer">
  	 	<div className="row" style={{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    width: "18%",
}}>
  	 		<div className="footer-col">
  	 			<h4>The team</h4>
  	 			<ul>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Our program</a></li>
  	 				<li><a href="#">Support us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Info</h4>
  	 			<ul>
  	 				<li><a href="#">Events</a></li>
  	 				<li><a href="#">News</a></li>
  	 				<li><a href="#">Get help</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#"><i class="fab fa-whatsapp"></i> +3212434355</a></li>
  	 				<li><a href="#">Email: migramind@hotmail.com</a></li>
  	 				<li><a href="#">Address: Calle fetyt 56, Barcelona</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    )
}

export default Footer;