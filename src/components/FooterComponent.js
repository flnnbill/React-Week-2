import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
           <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-6 col-sm-5 text-center mb-5">
                            <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                    class="fa fa-instagram"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                    class="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                    class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-pinterest" href="http://https://pinterest.com/"><i
                                    class="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>

                <div class=" col d-flex justify-content-center">"
                    <div class="row">
                        <ul><a href="home.html">Home</a></ul>


                        <ul><a href="aboutus.html">About</a></ul>


                        <ul><a href="gallery.html">Gallery</a></ul>


                        <ul><a href="contactus.html">Contact</a></ul>
                    </div>

                </div>
        </footer>
    )
}

export default Footer;