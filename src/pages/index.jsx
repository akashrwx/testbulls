import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { gsap, TimelineMax } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick"

gsap.registerPlugin(ScrollTrigger)

const sliderMarket = {
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}
const brokerSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  rows: 3,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}

function TestimonialNextArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <svg
        width="18px"
        x="0px"
        y="0px"
        viewBox="0 0 9.5 8.3"
        style={{ enableBackground: "new 0 0 9.5 8.3" }}
      >
        <path
          className="st0"
          d="M9.4,4.3L6.5,8C6.3,8.3,5.9,8.3,5.7,8.1C5.6,8,5.5,7.9,5.5,7.7c0-0.1,0-0.2,0.1-0.4l2.2-2.8L0.6,4.8
	C0.3,4.8,0,4.5,0,4.2s0.2-0.6,0.5-0.6l7.2-0.2l-2-2.5C5.5,0.7,5.5,0.3,5.8,0.1C6-0.1,6.4,0,6.6,0.2l2.8,3.4C9.5,3.8,9.5,4.1,9.4,4.3
	z"
        />
      </svg>
    </div>
  )
}

function TestimonialPrevArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <svg
        width="18px"
        x="0px"
        y="0px"
        viewBox="0 0 9.5 8.3"
        style={{ enableBackground: "new 0 0 9.5 8.3" }}
      >
        <path
          className="st0"
          d="M9.4,4.3L6.5,8C6.3,8.3,5.9,8.3,5.7,8.1C5.6,8,5.5,7.9,5.5,7.7c0-0.1,0-0.2,0.1-0.4l2.2-2.8L0.6,4.8
	C0.3,4.8,0,4.5,0,4.2s0.2-0.6,0.5-0.6l7.2-0.2l-2-2.5C5.5,0.7,5.5,0.3,5.8,0.1C6-0.1,6.4,0,6.6,0.2l2.8,3.4C9.5,3.8,9.5,4.1,9.4,4.3
	z"
        />
      </svg>
    </div>
  )
}
var ecoTestimonial = {
  dots: true,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1100,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <TestimonialNextArrow />,
  prevArrow: <TestimonialPrevArrow />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
      },
    },
  ],
}

const Ecosystem = () => {
  const sectionFirst = useRef()
  const mainIllustrationContainer = useRef()
  const firstHeading = useRef()
  const ecoCore = useRef()
  const ecoMarkets = useRef()
  const ecoOms = useRef()
  const ecoBrokers = useRef()
  const ecoclients = useRef()
  const ecoStrategist = useRef()
  const ecoChannelPartner = useRef()
  const ecoDataVendor = useRef()
  const videoBlock = useRef()
  const sectionSecond = useRef()
  const sectionThird = useRef()
  const sectionFourth = useRef()

  useEffect(() => {
    let tl = new TimelineMax()

    tl.fromTo(
      ecoCore.current,
      {
        autoAlpha: 0,
      },

      {
        scrollTrigger: {
          trigger: mainIllustrationContainer.current,
          start: "0 300",
          end: "center 100",
          scrub: true,
          //markers: true,
        },
        //y: 450,
        duration: 2,
        autoAlpha: 1,
        ease: "power2.out",
      }
    )

      .fromTo(
        firstHeading.current,
        {
          autoAlpha: 0,
          y: 0,
        },

        {
          scrollTrigger: {
            trigger: sectionFirst.current,
            start: "600 300",
            end: "800 150",
            // markers: true,
            scrub: true,
            pinSpacing: false,
          },
          //y: 450,
          duration: 3,
          autoAlpha: 1,
          y: -100,
          ease: "power2.out",
        }
      )
      .to(firstHeading.current, {
        scrollTrigger: {
          trigger: mainIllustrationContainer.current,
          start: "80% 300",
          end: "90% 100",
          // markers: true,
          scrub: true,
          pinSpacing: false,
        },
        //y: 450,
        duration: 1,
        scale: 0,
        ease: "power2.out",
      })

      .to(sectionFirst.current, {
        scrollTrigger: {
          trigger: mainIllustrationContainer.current,
          start: "0 0",
          endTrigger: videoBlock.current,
          end: "center center",
          // markers: true,
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
        //y: 450,
        duration: 3,
        ease: "power2.out",
      })


    tl.fromTo(sectionFirst.current, 
      {
        scale:1,
        x: 0,
      },
      {
      scrollTrigger: {
        trigger: sectionSecond.current,
        start: "top-=400 300",
        end: "200 200",
       // markers: true,
        scrub: true,
      },
      scale: 0.53,
      x: -290,
      duration: 3,
      ease: "power2.out",
    })


// this is the one which makes it scale 1 /////////

    .to(sectionFirst.current, {
      scrollTrigger: {
        trigger: "#data-vendor",
        start: "bottom+=150 300",
        end: "bottom+=250 150",
        markers: true,
        scrub: true,
      },
      scale: 1,
      x: 0,
      duration: 3,
      ease: "power2.out",
    })

      tl.fromTo(
        ecoMarkets.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: sectionSecond.current,
            start: "top 400",
            end: "200 100",
            //  markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ecoOms.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: sectionThird.current,
            start: "-300 200",
            end: "-100 100",
            // markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ecoBrokers.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: sectionFourth.current,
            start: "-300 200",
            end: "-100 100",
            // markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ecoclients.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: "#clients",
            start: "-300 200",
            end: "-100 100",
            // markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ecoStrategist.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: "#pro-strategist",
            start: "-300 200",
            end: "-100 100",
            // markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ecoChannelPartner.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: "#channel-partner",
            start: "-300 200",
            end: "-100 100",
            // markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ecoDataVendor.current,
        {
          autoAlpha: 0,
          y: 300,
        },

        {
          scrollTrigger: {
            trigger: "#data-vendor",
            start: "-300 200",
            end: "-100 100",
            // markers: true,
            scrub: true,
          },
          y: 0,
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        '#eco-video',
        {
          autoAlpha: 0,
        },

        {
          scrollTrigger: {
            trigger: "#data-vendor",
            start: "bottom 200",
            end: "bottom+=200 100",
            // markers: true,
            scrub: true,
          },
          duration: 2,
          autoAlpha: 1,
          ease: "power2.out",
        }
      )
    
  }, [])
  return (
    <Layout>
      <SEO title="Ecosystem" />

      <section className="inner-hero-main">
        <div className="container">
          <div className="inner-hero-content">
            <h1>AlgoBulls Ecosystem</h1>

            <p style={{ maxWidth: "560px" }}>
              At the crux of reimagining capital market trading, making smart,
              safe, and powerful trading algorithms digitally accessible to all
              by interconnecting every major stakeholder within the ecosystem.
            </p>

            <div className="text-center">
              <Link to="/" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pad100 main-illustration-area-2"
        ref={mainIllustrationContainer}
      >
        <div className="container">
          <div className="pinning-area-2" ref={sectionFirst}>
            <img
              ref={ecoCore}
              src="/img/ecosystem-core.svg"
              alt="algobulls ecosystem"
            />
            <h2 ref={firstHeading} className="heading text-center">
              How is AlgoBulls enabling smart &amp; secure algorithmic trading
              for every stakeholder in the trading ecosystem?
            </h2>
            <img
              ref={ecoMarkets}
              src="/img/ecosystem-markets.svg"
              alt="algobulls ecosystem"
            />
            <img
              ref={ecoOms}
              src="/img/ecosystem-oms.svg"
              alt="algobulls ecosystem"
            />
            <img
              ref={ecoBrokers}
              src="/img/ecosystem-brokers.svg"
              alt="algobulls ecosystem"
            />
            <img
              ref={ecoclients}
              src="/img/ecosystem-clients.svg"
              alt="algobulls ecosystem"
            />
            <img
              ref={ecoStrategist}
              src="/img/ecosystem-pro-strategist.svg"
              alt="algobulls ecosystem"
            />
            <img
              ref={ecoChannelPartner}
              src="/img/ecosystem-channel-partner.svg"
              alt="algobulls ecosystem"
            />
            <img
              ref={ecoDataVendor}
              src="/img/ecosystem-data-vendor.svg"
              alt="algobulls ecosystem"
            />

            <video
            id="eco-video"
              src="/img/algobulls-ecosystem.mp4"
              loop
              autoPlay
              playsInline
              muted
            ></video>
          </div>
        </div>
      </section>

      <section className="pad100" id="ecosystem-market" ref={sectionSecond}>
        <div className="container">
          <div className="flex-row">
            <div className="col col-5 offset-7">
              <h2 className="heading">Markets</h2>
              <p>
                State-of-the-art predictive algorithmic trading that caters
                accurate and reliable trading solutions for both the traditional
                equity market and the non-traditional cryptocurrency markets
                too, within both Indian &amp; global domains.
              </p>

              <div className="single-market-block">
                <div className="market-head">
                  <div className="icon icon-small">
                    <img src="/img/capital-market.svg" alt="capital market" />
                  </div>
                  <h3>Capital Market</h3>
                </div>

                <p>Indian Market</p>

                <Slider {...sliderMarket}>
                  <div className="single-market-img">
                    <img
                      src="/img/nse.jpg"
                      style={{ width: "80px" }}
                      alt="NSE"
                    />
                  </div>
                  <div className="single-market-img">
                    <img
                      src="/img/bse.png"
                      style={{ width: "60px" }}
                      alt="BSE"
                    />
                  </div>
                  <div className="single-market-img">
                    <img
                      src="/img/mcxsx.png"
                      style={{ width: "125px" }}
                      alt="mcxsx"
                    />
                  </div>
                </Slider>

                <p>US Market</p>

                <Slider {...sliderMarket}>
                  <div className="single-market-img">
                    <img
                      src="/img/nasdaq.png"
                      style={{ width: "95px" }}
                      alt="nasdaq"
                    />
                  </div>
                  <div className="single-market-img">
                    <img
                      src="/img/nyse.png"
                      style={{ width: "30px" }}
                      alt="nyse"
                    />
                  </div>
                </Slider>
              </div>

              <div className="single-market-block">
                <div className="market-head" style={{ marginBottom: "30px" }}>
                  <div className="icon icon-small">
                    <img src="/img/Crypto-market.svg" alt="Crypto market" />
                  </div>
                  <h3>Crypto Market</h3>
                </div>

                <Slider {...sliderMarket}>
                  <div className="single-market-img">
                    <img src="/img/bitbns.png" alt="NSE" />
                  </div>
                  <div className="single-market-img">
                    <img src="/img/coinbase.png" alt="BSE" />
                  </div>
                </Slider>
              </div>

              <div className="request-market">
                <p>Didn't find your preferred trading exchange listed?</p>
                <a href="#!" className="button">
                  Request
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oms" ref={sectionThird}>
        <div className="container">
          <div className="col col-5 offset-7">
            <h2 className="heading">OMS</h2>

            <p>
              Seamless integration with multiple OMS facilitating transparency,
              accountablity, and swift trading execution, all under one roof.{" "}
            </p>

            <div className="oms-logos">
              <img src="/img/nse.jpg" alt="nse" />
              <img src="/img/bse.png" alt="bse" />
              <img src="/img/mcxsx.png" alt="mcxsx" />
              <img src="/img/nasdaq.png" alt="nasdaq" />
              <img src="/img/symphony.png" alt="symphony" />
              <img src="/img/63-moons.png" alt="63-moons" />
            </div>

            <p style={{ fontWeight: "600" }}>What our client says:</p>

            <div className="ecosys-testimonial">
              <Slider {...ecoTestimonial}>
                <div className="single-eco-testimonial">
                  <p>
                    AlgoBulls has built an incredibly sophisticated platform
                    that has helped us connect to a wide range customers
                    enabling cost-effective and efficient processes. This is
                    extremely beneficial for everyone, including us in making
                    the market fair and less volatile.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    AlgoBulls has built an incredibly sophisticated platform
                    that has helped us connect to a wide range customers
                    enabling cost-effective and efficient processes. This is
                    extremely beneficial for everyone, including us in making
                    the market fair and less volatile.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    AlgoBulls has built an incredibly sophisticated platform
                    that has helped us connect to a wide range customers
                    enabling cost-effective and efficient processes. This is
                    extremely beneficial for everyone, including us in making
                    the market fair and less volatile.
                  </p>
                </div>
              </Slider>
            </div>

            <div className="request-market">
              <p>Would you like to join AlgoBulls?</p>
              <a href="#!" className="button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pad100" ref={sectionFourth}>
        <div className="container">
          <div className="col col-5 offset-7">
            <h2 className="heading">Brokers</h2>

            <p>
              We provide a steady and safe connect with all supported brokers.
            </p>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/api-icon.svg" alt="API" />
              </div>

              <h3>API</h3>

              <img src="/img/api-screen.png" alt="api screen" />

              <p>
                We integrate the OMS for the broking houses via our platform to
                provide a seamless real trading experience for all our clients
                across our product line. We support all trading across types of
                segments including cash, commodity, futures &amp; options and
                all order types including regular, bracket and cover orders.
              </p>
            </div>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/broker-panel-icon.svg" alt="API" />
              </div>

              <h3>Broker panel</h3>

              <p>
                A fully integrated and comprehensive panel for the brokers where
                they can monitor their customers activities and leverage
                analytics to enhance their adoption amongst clients; a
                sophisticated tool that augments transparency and discovery for
                all brokers.
              </p>
            </div>
            <div className="ecosys-content-block">
              <h3>Our Brokers</h3>

              <div className="broker-slider">
                <Slider {...brokerSlider}>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                  <div className="single-broker-list">
                    <img src="/img/dummy-logo.png" alt="" />
                  </div>
                </Slider>
              </div>
            </div>

            <p style={{ fontWeight: "600" }}>What our client says:</p>
            <div className="ecosys-testimonial">
              <Slider {...ecoTestimonial}>
                <div className="single-eco-testimonial">
                  <p>
                    AlgoBulls has built an incredibly sophisticated platform
                    that has helped us connect to a wide range customers
                    enabling cost-effective and efficient processes. This is
                    extremely beneficial for everyone, including us in making
                    the market fair and less volatile.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    AlgoBulls has built an incredibly sophisticated platform
                    that has helped us connect to a wide range customers
                    enabling cost-effective and efficient processes. This is
                    extremely beneficial for everyone, including us in making
                    the market fair and less volatile.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    AlgoBulls has built an incredibly sophisticated platform
                    that has helped us connect to a wide range customers
                    enabling cost-effective and efficient processes. This is
                    extremely beneficial for everyone, including us in making
                    the market fair and less volatile.
                  </p>
                </div>
              </Slider>
            </div>

            <div className="request-market">
              <p>Would you like to join AlgoBulls?</p>
              <a href="#!" className="button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="clients">
        <div className="container">
          <div className="col col-5 offset-7">
            <h2 className="heading">Clients</h2>

            <p>
              Disrupting algorithmic trading for the entire spectrum of
              clientele, from individual retail investors to major institutional
              accounts, empowering the complete gamut of clients through
              science-backed trading algorithms with never-seen-before features
              and perks.
            </p>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/hero-icon-9.svg" alt="Retail" />
              </div>

              <h3>Retail</h3>

              <p>
                Helping individuals buy/sell in the capital market without them
                being ever worried about finding accurate and authentic
                information &amp; trading expertise.
              </p>
            </div>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/hero-icon-2.svg" alt="Premium" />
              </div>

              <h3>Premium</h3>

              <p>
                Unlock unlimited potential for tech-driven, high returns capital
                market trading for premium clients tailormade to cater to the
                very specific needs of our premium clientele
              </p>
            </div>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/hero-icon-8.svg" alt="HNI" />
              </div>

              <h3>HNI</h3>

              <p>
                Utilizing advanced AI-powered algorithmic trading that
                recognizes the requirements and temperament of HNI clientele
                trading, with expert strategies in our artillery.
              </p>
            </div>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/hero-icon-4.svg" alt="Ultra HNI" />
              </div>

              <h3>Ultra HNI</h3>

              <p>
                The beautiful amalgamation of science and trading strategies
                creating powerful algorithms for the high investment capacity of
                Ultra HNI clients because we know when it comes to trading "one
                size doesnt fit all".
              </p>
            </div>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/hero-icon-3.svg" alt="Institution" />
              </div>

              <h3>Institution</h3>

              <p>
                Next-generation trading algorithms especially cut out for the
                instituional clientele with one platform that encompasses order
                execution, strategy development, and other useful features that
                makes us end-to-end online trading experts.
              </p>

              <div className="ecosys-logo-block">
                <span>
                  <img src="/img/dummy-logo.png" alt="" />
                </span>
                <span>
                  <img src="/img/dummy-logo.png" alt="" />
                </span>
                <span>
                  <img src="/img/dummy-logo.png" alt="" />
                </span>
              </div>
            </div>
            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/hero-icon-6.svg" alt="Social Trading" />
              </div>

              <h3>Social Trading</h3>

              <p>
                Facilitating secure and authentic social trading by supporting
                our customers through copy trading or mirror trading, that paves
                path for safe and guaranteed returns.
              </p>
            </div>

            <p style={{ fontWeight: "600" }}>What our client says:</p>
            <div className="ecosys-testimonial">
              <Slider {...ecoTestimonial}>
                <div className="single-eco-testimonial">
                  <p>
                    I always assumed making money through trading is something
                    that only trading experts get to do. But AlgoBulls
                    innovative platform that is based purely on scientifc
                    calculations and in-depth market knowledge, has helped me, a
                    complete trading novice make big bucks. I am delightfully
                    surprised how easy it is to crack capital market trading
                    with AlgoBulls.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    I always assumed making money through trading is something
                    that only trading experts get to do. But AlgoBulls
                    innovative platform that is based purely on scientifc
                    calculations and in-depth market knowledge, has helped me, a
                    complete trading novice make big bucks. I am delightfully
                    surprised how easy it is to crack capital market trading
                    with AlgoBulls.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    I always assumed making money through trading is something
                    that only trading experts get to do. But AlgoBulls
                    innovative platform that is based purely on scientifc
                    calculations and in-depth market knowledge, has helped me, a
                    complete trading novice make big bucks. I am delightfully
                    surprised how easy it is to crack capital market trading
                    with AlgoBulls.
                  </p>
                </div>
              </Slider>
            </div>

            <div className="request-market">
              <p>Would you like to join AlgoBulls?</p>
              <a href="#!" className="button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pad100" id="pro-strategist">
        <div className="container">
          <div className="col col-5 offset-7">
            <h2 className="heading">Professional Strategist</h2>

            <p>
              We welcome highly experienced professional traders wherein we
              create a powerful amalgamation of your vigorous trading strategies
              and our robust tech resulting in smart AI-driven algos which can
              be easily monetized by you.
            </p>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/build-and-list-icon.svg" alt="Build and List" />
              </div>

              <h3>Build &amp; List</h3>

              <p>
                You can create your unique trading algos, infuse it with our
                cutting edge scientific prowess, and put it out there for others
                while simultaneously earnings from these signature listings.
              </p>
            </div>

            <div className="ecosys-content-block">
              <div className="icon">
                <img src="/img/trade-replication-icon.svg" alt="Premium" />
              </div>

              <h3>Trade Replication</h3>

              <p>
                In case, you don't wish to reveal your trading secret sauce, you
                can even earn by just pushing your trade signal to the public,
                via our servers, where you get to earn ample returns on your
                expertise without disclosing your exclusive tactics.
              </p>
            </div>

            <p style={{ fontWeight: "600" }}>What our client says:</p>
            <div className="ecosys-testimonial">
              <Slider {...ecoTestimonial}>
                <div className="single-eco-testimonial">
                  <p>
                    With AlgoBulls, I finally found a platform which provided me
                    the necessary tech to bring my unique trading strategies to
                    life. I don't really know coding so its extremely helpful
                    for professional traders like me who know everything about
                    the market but lack necessary skills and knowledge to make
                    it usable in a tech-driven world.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    With AlgoBulls, I finally found a platform which provided me
                    the necessary tech to bring my unique trading strategies to
                    life. I don't really know coding so its extremely helpful
                    for professional traders like me who know everything about
                    the market but lack necessary skills and knowledge to make
                    it usable in a tech-driven world.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    With AlgoBulls, I finally found a platform which provided me
                    the necessary tech to bring my unique trading strategies to
                    life. I don't really know coding so its extremely helpful
                    for professional traders like me who know everything about
                    the market but lack necessary skills and knowledge to make
                    it usable in a tech-driven world.
                  </p>
                </div>
              </Slider>
            </div>

            <div className="request-market">
              <p>Would you like to join AlgoBulls?</p>
              <a href="#!" className="button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="channel-partner">
        <div className="container">
          <div className="col col-5 offset-7">
            <h2 className="heading">Channel Partner</h2>

            <p>
              Opening vistas for higher income and expansion for this segment by
              enabling channel partners earn sizeable revenues on every
              subscription they bring to our platform.
            </p>

            <div className="ecosys-content-block">
              <img src="/img/api-screen.png" alt="api screen" />

              <div
                className="ecosys-logo-block"
                style={{ padding: "20px 0 0" }}
              >
                <span>
                  <img src="/img/dummy-logo.png" alt="" />
                </span>
                <span>
                  <img src="/img/dummy-logo.png" alt="" />
                </span>
                <span>
                  <img src="/img/dummy-logo.png" alt="" />
                </span>
              </div>
            </div>

            <p style={{ fontWeight: "600" }}>What our client says:</p>
            <div className="ecosys-testimonial">
              <Slider {...ecoTestimonial}>
                <div className="single-eco-testimonial">
                  <p>
                    With AlgoBulls, I finally found a platform which provided me
                    the necessary tech to bring my unique trading strategies to
                    life. I don't really know coding so its extremely helpful
                    for professional traders like me who know everything about
                    the market but lack necessary skills and knowledge to make
                    it usable in a tech-driven world.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    With AlgoBulls, I finally found a platform which provided me
                    the necessary tech to bring my unique trading strategies to
                    life. I don't really know coding so its extremely helpful
                    for professional traders like me who know everything about
                    the market but lack necessary skills and knowledge to make
                    it usable in a tech-driven world.
                  </p>
                </div>
                <div className="single-eco-testimonial">
                  <p>
                    With AlgoBulls, I finally found a platform which provided me
                    the necessary tech to bring my unique trading strategies to
                    life. I don't really know coding so its extremely helpful
                    for professional traders like me who know everything about
                    the market but lack necessary skills and knowledge to make
                    it usable in a tech-driven world.
                  </p>
                </div>
              </Slider>
            </div>

            <div className="request-market">
              <p>Would you like to join AlgoBulls?</p>
              <a href="#!" className="button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pad100" id="data-vendor">
        <div className="container">
          <div className="col col-5 offset-7">
            <h2 className="heading">Data Vendor</h2>

            <p>
              Automated seamless integration with licensed and authentic data
              vendors that furnish accurate historical data about market
              fluctations, making real trading easy, hassle-free, and
              transparent for the entire spectrum of our clientele.
            </p>

            <div className="ecosys-content-block">
              <div className="ecosys-logo-block">
                <span>
                  <img src="/img/nse.jpg" alt="" />
                </span>
              </div>
            </div>

            <div className="request-market">
              <p>Would you like to join AlgoBulls?</p>
              <a href="#!" className="button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={videoBlock} style={{ opacity: "0", height: "150vh" }}>
        <div className="container">
          <div className="ecosystem-video">
            <video
              src="/img/algobulls-ecosystem.mp4"
              loop
              autoPlay
              playsInline
              muted
            ></video>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Ecosystem
