import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Assets
import MintGif from "../../assets/MintVideo.mp4";
import YButton from "../basic/YButton";
import Team from "../team/team";
import Meet from "../meet/meet";
import Roadmap from "../roadmap/roadmap";
import State from "../state/state";
import Leet from "../leet/leet";
import { BsFileMinusFill, BsFilePlusFill } from "react-icons/bs";
import About from "../about/about";
//import CSS
import "./mint.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintNum, setMintNum] = useState(1);
  const claimNFTs = (_amount) => {
    _amount = document.getElementById("inputBox").textContent;
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Official BooCrew NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      // ********
      // You can change the line above to
      // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
      // users to be able to mint through your website!
      // And after you're done with whitelisted users buying from your website,
      // You can switch it back to .mint(blockchain.account, _amount).
      // ********
      .send({
        gasLimit: 285000 * _amount,
        to: "0x560A618d632bad1Fd73F27125903b5Db11470b78", // the address of your contract
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.03 * _amount).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback(
          "Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"
        );
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback("Your BooCrew NFT has been successfully minted!");
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const plus_num = () => {
    // const {mintNum} = this.state;
    if (mintNum >= 25) return;
    setMintNum(mintNum + 1);
    // if (mintNum == 25) return;
  };
  const minus_num = () => {
    // const {mintNum} = this.state;
    if (mintNum <= 1) return;
    setMintNum(mintNum - 1);
  };

  return (
    <div className="mint-control">
      <Container>
        <Col style={{ paddingTop: 220 }}>
          <About />
          <br />
          <br />
        </Col>
        <Col>
          <Team />
        </Col>
        <Col>
          <Leet />
        </Col>
        <Col>
          <Roadmap />
        </Col>
        <Row>
          <Col md={6} xs={12} className="mint-image">
            <video
              id="video"
              style={{
                maxHeight: 800,
                maxWidth: 800,
                border: "solid 2px black",
              }}
              controls
              loop
              className="video"
              src={MintGif}
              id="mint"
              alt="mint gif"
              style={{ border: "solid black 5px" }}
            />
          </Col>
          <Col md={6} xs={12} className="mint-description">
            <header style={{ fontStyle: "normal", fontFamily: "newerThing" }}>
              MINT YOUR <text style={{ color: "white" }}>CHEEKY CHIMP</text>
            </header>
            <text style={{ textAlign: "center", height: 10 }}>
              {/* 10000 images are original to the collection. 
                            They are all 1/1 and show original colors and leaf arangements.
                            <br/><br/>
                            Show us your plants on */}
              {/* <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "#32CD32", fontWeight: 900, fontSize: 20}}href="https://instagram.com/"> Instagram </a>
                            </text> 
                            and 
                            <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "#32CD32", fontWeight: 900, fontSize: 20}}href="https://twitter.com/"> Twitter!</a>
                            </text> */}
            </text>
            <div className="number-control">
              <BsFileMinusFill
                color="white"
                size={40}
                onClick={() => minus_num()}
              />
              <span id="inputBox" style={{ color: "white" }}>
                {mintNum}
              </span>
              <BsFilePlusFill
                color="white"
                size={40}
                onClick={() => plus_num()}
              />
            </div>
            <p style={{ marginTop: 0, marginBottom: 0 }}>0.06 ETH + Gas</p>
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <div className="flex-column">
                <button
                  className="ybutton"
                  onClick={(e) => {
                    console.log("--------");
                    // e.preventDefault();
                    // dispatch(connect());
                    // getData();
                    // ^ change the above to uncommented to use mint button
                  }}
                >
                  COMING SOON
                </button>
                {blockchain.errorMsg !== "" ? (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    {blockchain.errorMsg}
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                className="ybutton"
                onClick={(e) => {
                  e.preventDefault();
                  claimNFTs(1);
                  getData();
                }}
              >
                {claimingNft ? "BUSY" : "MINT"}
              </button>
            )}
          </Col>
          <Col style={{ marginTop: 30 }}>{/* <State /> */}</Col>
        </Row>
      </Container>
      {/* <div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto", alignContent: "center"}}> */}
      <div
        className="autoBox"
        style={{ marginLeft: "5vh", marginRight: "5vh" }}
      >
        <form
          style={{ borderRadius: 20 }}
          accept-charset="UTF-8"
          action="https://zb250.infusionsoft.com/app/form/process/1fe841cd1ca23887c659701b0edd5170"
          class="infusion-form outerBox"
          id="inf_form_02f4e9299b95d2258eb6cc475b4fa25f"
          method="POST"
        >
          <input
            name="inf_form_xid"
            type="hidden"
            value="02f4e9299b95d2258eb6cc475b4fa25f"
          />
          <input
            name="inf_form_name"
            type="hidden"
            value="Email Opt-in @~br~cheekychimps.club"
          />
          <input
            name="infusionsoft_version"
            type="hidden"
            value="1.70.0.407468"
          />
          <div class="infusion-field" className="emailBox">
            <text style={{ fontFamily: "newerThing" }}>
              Official Cheeky Chimps Newsletter
            </text>
            <br />
            <texter style={{ fontFamily: "newerThing" }}>
              Join our Newsletter for updates and exclusive Cheeky Chimps
              content! <br />
              You might even win some prizes!
            </texter>
            <br />
            <label
              for="inf_field_Email"
              style={{ fontFamily: "newerThing" }}
            ></label>
            <input
              id="inf_field_Email"
              name="inf_field_Email"
              placeholder="name@email.com"
              style={{
                fontFamily: "newerThing",
                textAlign: "center",
                marginTop: 20,
              }}
              type="text"
            />
          </div>
          <div>
            <div>&nbsp;</div>
          </div>
          <div class="infusion-submit">
            <button
              class="infusion-recaptcha"
              id="recaptcha_02f4e9299b95d2258eb6cc475b4fa25f"
              type="submit"
              style={{
                fontFamily: "newerThing",
                backgroundColor: "red",
                color: "white",
                border: "solid black 3px",
                borderRadius: 20,
                fontSize: 30,
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <script
          type="text/javascript"
          src="https://zb250.infusionsoft.app/app/webTracking/getTrackingCode"
        ></script>
        <script
          type="text/javascript"
          src="https://zb250.infusionsoft.com/app/timezone/timezoneInputJs?xid=1fe841cd1ca23887c659701b0edd5170"
        ></script>
        <script
          type="text/javascript"
          src="https://zb250.infusionsoft.com/js/jquery/jquery-3.3.1.js"
        ></script>
        <script
          type="text/javascript"
          src="https://zb250.infusionsoft.app/app/webform/overwriteRefererJs"
        ></script>
      </div>
    </div>
    // </div>
  );
}

export default Mint;
