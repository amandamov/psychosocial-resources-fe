import React from "react";
import "./Footer.css"

function Footer() {
  return (
      <div className="main-footer">
         <div>
            <div>
                {/* Column1 */}
                <div>
                    <h4>MigraMind</h4>
                    <ul>
                        <li>Telephone xxx-xxx-xxx</li>
                        <li>Spain, Barcelona</li>
                        <li>Calle Rods de Ross 12</li>
                    </ul>
                </div>
                {/* Column2 */}
                <div>
                    <h4>Stuff</h4>
                    <ul>
                        <li>About us</li>
                        <li>News</li>
                        <li>Events</li>
                    </ul>
                </div>
                {/* Column3 */}
                <div>
                    <h4>Follow us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>linkedin</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
         </div>
     </div>
  )
}

export default Footer;