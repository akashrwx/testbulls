import React from "react"

const Footer = () => (
  <>
    <footer className="bg-lightblue">
      <div className="container">
        <div className="flex-row">
          <div className="col col-4">
            <img
              src="/img/algobulls-logo.svg"
              alt="algobulls"
              className="footer-logo"
            />

            <div className="footer-social">
              <a href="#!">
                <img src="/img/facebook.svg" alt="facebook" />
              </a>
              <a href="#!">
                <img src="/img/linkedin.svg" alt="linkedin" />
              </a>
              <a href="#!">
                <img src="/img/youtube.svg" alt="youtube" />
              </a>
              <a href="#!">
                <img src="/img/github.svg" alt="github" />
              </a>
              <a href="#!">
                <img src="/img/twitter.svg" alt="twitter" />
              </a>
              <a href="#!">
                <img src="/img/chat.svg" alt="chat" />
              </a>
              <a href="#!">
                <img src="/img/help.svg" alt="help" />
              </a>
            </div>

            <div className="getcallback hidden-mobile">
              <input type="text" placeholder="Contact Number" />
              <button className="button" type="Call Back">
                Call Back
              </button>
            </div>
          </div>
          <div className="col col-4">
            <div className="footer-links-block">
              <div className="links-single">
                <h3>Explore</h3>

                <a href="#!">Build Strategies</a>
                <a href="#!">Visit Marketplace</a>
                <a href="#!">Our Ecosystem</a>
                <a href="#!">Product Features</a>
                <a href="#!">FAQ</a>
              </div>
              <div className="links-single">
                <h3>Contact</h3>

                <a href="#!">Apply As Strategist</a>
                <a href="#!">Apply As Broker</a>
                <a href="#!">Apply As Partner</a>
              </div>
            </div>
          </div>
          <div className="col col-4">
            <div className="footer-phone">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M16.3333 12.0323C14.7512 12.0323 13.2423 11.6877 11.8508 11.0075C11.6327 10.903 11.3797 10.8865 11.1487 10.9653C10.9177 11.046 10.7288 11.2147 10.6225 11.4328L9.9625 12.7987C7.9825 11.662 6.33983 10.0175 5.20133 8.0375L6.569 7.3775C6.789 7.27117 6.95583 7.08233 7.0365 6.85133C7.11533 6.62033 7.10067 6.36733 6.99433 6.14917C6.31233 4.7595 5.96767 3.25067 5.96767 1.66667C5.96767 1.16067 5.557 0.75 5.051 0.75H1.66667C1.16067 0.75 0.75 1.16067 0.75 1.66667C0.75 10.2595 7.7405 17.25 16.3333 17.25C16.8393 17.25 17.25 16.8393 17.25 16.3333V12.949C17.25 12.443 16.8393 12.0323 16.3333 12.0323Z"
                  fill="#1E88E5"
                />
              </svg>

              <p>
                <a href="tel:02268059034">02268059034</a> ,
                <a href="tel:08035073426"> 08035073426</a>
              </p>
            </div>
            <div className="footer-phone">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path
                  d="M19.5167 12.9165C19.1211 13.3915 18.5349 13.6662 17.9167 13.6665H2.0834C1.46519 13.6662 0.879023 13.3915 0.483398 12.9165L8.12506 6.5498L8.91674 7.09148C9.56889 7.54148 10.4313 7.54148 11.0834 7.09148L11.8751 6.5498L19.5167 12.9165Z"
                  fill="#1E88E5"
                />
                <path
                  d="M19.6333 1.24139L11.875 6.5497L11.0833 7.09138C10.4312 7.54138 9.56879 7.54138 8.91665 7.09138L8.12497 6.5497L0.366699 1.23303C0.757089 0.670106 1.3983 0.333935 2.08338 0.333037H17.9167C18.6048 0.329404 19.2492 0.670341 19.6333 1.24139Z"
                  fill="#64B5F6"
                />
                <path
                  d="M8.12502 6.55003L0.483356 12.9167C0.170584 12.5429 -0.000548905 12.0708 3.70314e-05 11.5834V2.41672C-0.00250203 1.99394 0.125584 1.58066 0.366716 1.2334L8.12502 6.55003Z"
                  fill="#2196F3"
                />
                <path
                  d="M20 2.4167V11.5834C20.0005 12.0708 19.8294 12.5428 19.5167 12.9167L11.875 6.55001L19.6333 1.2417C19.8732 1.58646 20.0012 1.99666 20 2.4167Z"
                  fill="#2196F3"
                />
              </svg>

              <p>
                <a
                  href="mailto:support@algobulls.com"
                  style={{ fontWeight: "400" }}
                >
                  support@algobulls.com
                </a>
              </p>
            </div>
            <div className="footer-phone" style={{ alignItems: "flex-start" }}>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
                <path
                  d="M8 0C3.73312 0 0.265625 3.46758 0.265625 7.73438C0.265625 9.17813 0.66532 10.5832 1.42582 11.795L7.4757 21.6956C7.57891 21.8631 7.73359 21.9663 7.91411 21.9921C8.15894 22.0307 8.42977 21.9276 8.57153 21.6827L14.6387 11.6918C15.3605 10.5059 15.7344 9.12661 15.7344 7.73438C15.7344 3.46758 12.2669 0 8 0ZM8 11.6016C5.83446 11.6016 4.13281 9.84844 4.13281 7.73438C4.13281 5.60738 5.873 3.86719 8 3.86719C10.127 3.86719 11.8672 5.60738 11.8672 7.73438C11.8672 9.83555 10.1914 11.6016 8 11.6016Z"
                  fill="#64B5F6"
                />
                <path
                  d="M8 0V3.86719C10.127 3.86719 11.8672 5.60738 11.8672 7.73438C11.8672 9.83555 10.1914 11.6016 8 11.6016V21.9996C8.21996 22.0047 8.44614 21.8993 8.57148 21.6827L14.6387 11.6918C15.3605 10.5059 15.7344 9.12661 15.7344 7.73438C15.7344 3.46758 12.2669 0 8 0Z"
                  fill="#1E88E5"
                />
              </svg>

              <p>
                AlgoBulls Technologies Private Limited C- 212/ Mascots, 103/104,
                Orbit Plaza, New Prabhadevi Marg, Mumbai 400025
              </p>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Algo bulls Ltd.: Member of NSE​ &amp;​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Algo bulls Ltd. –
            SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <h4>
            <span>CIN Number : U72900MH2019PTC326793,</span>{" "}
            <span>UAM (MSME) Number : MH19D0098171</span>
          </h4>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="privacy-links text-center">
            <a href="#!">Terms of use</a>
            <a href="#!">Privacy policy</a>
            <a href="#!">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
