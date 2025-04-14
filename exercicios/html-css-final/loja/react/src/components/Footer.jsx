import "./footer.css";

const shoppingLinks = ["Schedule Consultation", "Showrooms", "Trade Program", "Outlet"];
const aboutLinks = ['Our Story', 'Reviews', 'Careers', 'Financing', 'Patents', 'Our Blog'];
const resourcesLinks = ['Look Up Order Status', 'Assembly Instructions', 'Returns',
    'Shipping & Delivery', 'FAQ', 'Refer a Friend'];

function Footer() {
    return (
        <div className="footer-full-container">
            <div className="social-media">
                <form action="" method="post" className="form-subscribe">
                    <input
                        className="input-field"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Sign up for enthralling couch reads"
                        maxLength="40"
                        required />
                    <input className="subscribe-btn" type="submit" value="SUBSCRIBE" />
                </form>
            </div>
            <div className="info-links">
                <div className="columns">
                    <div className="column">
                        <h4>Shopping Services</h4>
                        {
                            shoppingLinks.map((shoppingLink) => {
                                return (
                                    <a key={shoppingLink} href="">{shoppingLink}</a>
                                )
                            })
                        }
                    </div>
                    <div className="column">
                        <h4>About</h4>
                        {
                            aboutLinks.map((aboutLink) => {
                                return (
                                    <a key={aboutLink} href="">{aboutLink}</a>
                                )
                            })
                        }
                    </div>
                    <div className="column">
                        <h4>Resources</h4>
                        {
                            resourcesLinks.map((resourcesLink) => {
                                return (
                                    <a key={resourcesLink} href="">{resourcesLink}</a>
                                )
                            })
                        }
                    </div>
                    <div className="column contacts">
                        <h4>Contact customer experience</h4>
                        <p>Email: support@template.com</p>
                        <p>Text: 224-628-7769</p>
                        <p>Hours:</p>
                        <p>Monday to Friday — 10a to 8p EST</p>
                        <p>Saturday to Sunday — 10a to 2p EST</p>
                    </div>
                </div>
                <div className="last-row">
                    <div className="copyright-legal">
                        <p className="copyright">© 2023 Template</p>
                        <div className="legal">
                            <a href="">Terms-</a>
                            <a href="">Accessibility-</a>
                            <a href="">Sitemap-</a>
                            <a href="">Privacy</a>
                        </div>
                    </div>
                    <address className="adress">15 W 27th Street, 9th Floor New York, NY, 10001</address>
                </div>
            </div>
        </div>
    )
}

export default Footer;