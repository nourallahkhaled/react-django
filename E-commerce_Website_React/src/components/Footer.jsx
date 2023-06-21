import React from 'react'
import '../CSS/Footer.css';
export function Footer() {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4> 
                        <a href="/employer"><p>Employer</p></a>
                        <a href="/healthplan"><p>Helath Plan</p></a>
                        <a href="/individual"><p>Individual</p></a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Corporate</h4>
                        <a href="/resource"><p>Our Stores</p></a>
                        <a href="/resource"><p>Corporate</p></a>
                        <a href="/resource"><p>Corporate Support</p></a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Partner</h4>
                        <a href="/employer"><p>Swing Tech</p></a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Company</h4>
                        <a href="/about"><p>About</p></a>
                        <a href="/press"><p>Press</p></a>
                        <a href="/career"><p>Career</p></a>
                        <a href="/contact"><p>Contact</p></a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Coming Soon On</h4>
                        <div className='socialmedia'>
                            <p><i class="bi bi-facebook"></i></p>
                            <p><i class="bi bi-twitter"></i></p>
                            <p><i class="bi bi-linkedin"></i></p>
                            <p><i class="bi bi-instagram"></i></p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Clothing Gold. All right reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
