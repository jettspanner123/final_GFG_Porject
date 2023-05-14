import React from "react";
import { GiHamburgerMenu, GiLandMine } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineArrowDown,
  AiOutlineSend,
  AiFillMedicineBox,
} from "react-icons/ai";
import SideArt from "./SideArt";
import Link from "next/link";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiEarthAfricaEurope } from "react-icons/gi";
const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [renderDiv, setRenderDiv] = useState(-1);
  const [language, setLanguage] = useState(true);
  const [divElements, setDivElements] = useState(0);
  const [values, setValues] = useState(0);
  const [input, setInput] = useState("");
  const [inputAnimation, setInputAnimation] = useState(false);
  const something: string[] = [
    "HOME",
    "ABOUT",
    "CONTACT",
    "FARMER ROYALTIES",
    "VALUES",
    "DIGITAL ADVERTISEMENT",
  ];

  const setRenderTo = (num: number) => {
    setRenderDiv(num);
  };
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 4,
          duration: 2,
        }}
      >
        <div
          className="fixed top-[1.9rem] hover:bg-white hover:text-black hover:cursor-default transition-all duration-300 rounded-xl border-[0.5px] md:left-[9rem] left-[9rem] md:translate-x-0 border-white text-white p-4 text-xl md:text-3xl"
          onClick={() => setLanguage(!language)}
        >
          {language == true ? <>Hindi</> : <>English</>}
        </div>
      </motion.div>
      <motion.div
        animate={{
          x: 0,
        }}
        initial={{ x: -200 }}
        transition={{
          delay: 4,
          duration: 2,
          type: "spring",
        }}
        className="text-white  fixed top-[2rem] left-[3rem]  border-[1px] border-white  rounded-xl cursor-default hover:bg-white hover:text-black   gap-4 text-[1.5rem] flex justify-center items-center"
        onClick={() => setIsShowing(!isShowing)}
      >
        <div className="flex justify-center w-full items-center gap-4 hover:bg-white p-[1rem] hover:text-black transition-all duration-300">
          <GiHamburgerMenu size={30} />
        </div>
      </motion.div>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              y: -10,
              opacity: 0,
            }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => setIsShowing(!isShowing)}
            style={{
              paddingInline: "1rem",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              paddingBlock: "1rem",
              // top: "8.5rem",
              top: "2rem",
              borderRadius: "1rem",
              border: "1px solid white",
              backgroundColor: "white",
              zIndex: "10000",
              boxShadow: "0 0 2px 80000px white",
            }}
          >
            <ul className="text-black text-[1.3rem] ">
              <div className="flex hover:cursor-default justify-start items-center text-[2rem] py-[1.5rem] hover:bg-[#303030] rounded-xl transition-all duration-300 hover:text-white gap-[1rem] ">
                <RxCross2 size={50} className="ml-5" /> Close
              </div>
              <ul className="overflow-scroll  absolute top-[8rem] w-[98%]">
                {something.map((items, index) =>
                  items === "DIGITAL ADVERTISEMENT" ? (
                    <Link href="https://farmads.vq.pe/">
                      <li
                        className="list_items text-[2.5rem]  md:text-[3.5rem]"
                        onClick={() => setRenderDiv(index)}
                      >
                        {items}
                      </li>
                    </Link>
                  ) : items == "FARMER ROYALTIES" ? (
                    <li
                      className="list_items text-[2.5rem] md:text-[3.5rem]"
                      onClick={() => setRenderDiv(index)}
                    >
                      FARMER ROYALTIES
                      <span className="text-[1.5rem] mx-5 my-0 hidden md:block">
                        (Farmer loans etc.)
                      </span>
                    </li>
                  ) : (
                    <li
                      className="list_items text-[2.5rem] md:text-[3.5rem]"
                      onClick={() => setRenderDiv(index)}
                    >
                      {items}
                    </li>
                  )
                )}
              </ul>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 350 }}
        transition={{
          delay: 4,
          duration: 2,
          type: "spring",
        }}
        className="fixed top-[3rem] hidden md:block md:top-[2rem]  right-[3rem] text-white text-[1.5rem] md:text-[3rem] "
      >
        <h1 className="main_heading ">FARMEASE</h1>
      </motion.div>

      <div
        className="text-white"
        style={{
          width: "100vw",
          height: "80vh",
          overflow: "scroll",
          // backgroundColor: "rgba(255,255,255,0.15)",
          paddingInline: "3rem",
          top: "10rem",
          position: "absolute",
        }}
      >
        {/* rendering pages */}
        {renderDiv == 0 ? (
          // homepage
          <div className="overflow-scroll w-[99%] md:w-[80%] mx-auto ">
            <div className="flex justify-center items-center">
              {language == true ? (
                <h1 className="text-[2rem] p-6 bg-[rgba(255,255,255,0.15)] rounded-xl md:text-[4rem] font-bold ">
                  Something About us.
                </h1>
              ) : (
                <h1 className="text-[2rem] p-6 bg-[rgba(255,255,255,0.15)] rounded-xl md:text-[4rem] font-bold ">
                  हमारे बारे में कुछ
                </h1>
              )}
            </div>
            {language == true ? (
              <div className="w-[99%] md:w-[80%] text-[1.2rem] md:text-[1.5rem] mx-auto mt-[7rem] font-medium text-justify">
                One agriculture technology that has gained popularity in recent
                years is precision agriculture. Precision agriculture uses
                technology such as GPS, sensors, and drones to collect data on
                crops and soil conditions. This data is then analyzed to make
                more informed decisions about planting, fertilizing, and
                harvesting crops. Precision agriculture allows farmers to use
                resources more efficiently, reduce waste, and increase yields.
                Additionally, it can help reduce the environmental impact of
                agriculture by minimizing the use of chemicals and reducing
                runoff. Overall, precision agriculture has the potential to
                improve the sustainability and profitability of farming
                operations.
              </div>
            ) : (
              <div className="w-[99%] md:w-[80%] text-[1.2rem] md:text-[1.5rem] mx-auto mt-[7rem] font-medium text-justify">
                एक कृषि तकनीक जिसने हाल ही में लोकप्रियता हासिल की है साल सटीक
                कृषि है। सटीक कृषि उपयोग डेटा एकत्र करने के लिए जीपीएस, सेंसर और
                ड्रोन जैसी तकनीक फसलों और मिट्टी की स्थिति। इसके बाद इस डेटा को
                बनाने के लिए विश्लेषण किया जाता है रोपण, उर्वरक और के बारे में
                अधिक सूचित निर्णय फसलों की कटाई। सटीक कृषि किसानों को उपयोग करने
                की अनुमति देती है संसाधनों को अधिक कुशलता से, अपशिष्ट को कम
                करें, और उपज में वृद्धि करें। इसके अतिरिक्त, यह के पर्यावरणीय
                प्रभाव को कम करने में मदद कर सकता है रसायनों के उपयोग को कम करके
                और कम करके कृषि अपवाह। कुल मिलाकर, सटीक कृषि में क्षमता है खेती
                की स्थिरता और लाभप्रदता में सुधार संचालन।
              </div>
            )}

            <div className="flex text-[1.5rem] md:mt-[15rem] mt-[5rem] justify-center items-center gap-[1rem]">
              <motion.div
                initial={{ y: -90 }}
                animate={{ y: 40 }}
                transition={{ duration: 1, repeat: 1000 }}
              >
                <AiOutlineArrowDown size={35} />
              </motion.div>
              Slide Down
            </div>

            <div className="w-[99%] md:w-[80%] mx-auto mt-[8rem]">
              {language == true ? (
                <h1 className="font-bold md:text-[4rem] text-[2rem] text-center md:text-left">
                  <span className="text-[3rem] md:text-[4rem]">
                    Introducing,
                  </span>
                  <br /> your friend where you can find solution of every
                  problems and needs.
                </h1>
              ) : (
                <h1 className="font-bold md:text-[4rem] text-[2rem] text-center md:text-left">
                  <span className="text-[2rem] md:text-[4rem]">
                    पेश है, <br /> आपका दोस्त जहां आप हर समस्या का समाधान ढूंढ
                    सकते हैं पहेली और जरूरतें।{" "}
                  </span>
                </h1>
              )}
              <h1
                onClick={() =>
                  window.open(
                    "https://ora.ai/progressive-bronze-eiml/krishi-mitra-",
                    "_blank"
                  )
                }
                className="hover:cursor-pointer font-bold md:text-[6rem] text-[2.5rem] hover:scale-95 transition-all duration-700 p-4 text-black bg-white text-center mt-10 rounded-xl"
              >
                {language == true ? "Visit 'KrishiMitra'" : "कृषिमित्र"}
              </h1>
            </div>
          </div>
        ) : renderDiv == 1 ? (
          // the about us page
          <div className="w-[100%] mx-auto ">
            <h1 className="text-[3rem] font-bold  text-center bg-[rgba(255,255,255,0.15)] border-[0.5px] border-gray-300 p-4 rounded-xl md:w-[60%] mx-auto md:text-[5rem]">
              {language == true ? "About Us" : "हमारे बारे में"}
            </h1>
            <div className="text-[1.1rem] text-justify mt-[5rem] md:w-[60%] mx-auto md:text-[1.5rem]">
              {language == true ? (
                <div>
                  Agrotech, a rapidly emerging field at the intersection of
                  agriculture and technology, is revolutionizing the way we
                  produce food. With the world's population growing and the need
                  for sustainable farming practices becoming increasingly
                  crucial, agrotech offers innovative solutions. It leverages
                  advancements such as artificial intelligence, robotics,
                  precision agriculture, and data analytics to optimize crop
                  yields, monitor soil health, manage pests, and conserve
                  resources. From automated irrigation systems to drone-based
                  crop monitoring, agrotech empowers farmers to make data-driven
                  decisions and implement efficient farming techniques. By
                  merging technology with agriculture, agrotech has the
                  potential to enhance productivity, minimize environmental
                  impact, and address global food security challenges.
                </div>
              ) : (
                <div>
                  एग्रोटेक, के चौराहे पर एक तेजी से उभरता हुआ क्षेत्र कृषि और
                  प्रौद्योगिकी, हमारे उत्पादन करने के तरीके में क्रांति ला रहे
                  हैं खाना। दुनिया की आबादी बढ़ रही है और इसकी आवश्यकता के साथ
                  स्थायी कृषि पद्धतियाँ तेजी से महत्वपूर्ण होती जा रही हैं,
                  एग्रोटेक अभिनव समाधान प्रदान करता है। यह उन्नति का लाभ उठाता
                  है जैसे कि आर्टिफिशियल इंटेलिजेंस, रोबोटिक्स, सटीक कृषि, और
                  डेटा विश्लेषण फसल की पैदावार का अनुकूलन करने के लिए, मिट्टी के
                  स्वास्थ्य की निगरानी, कीटों का प्रबंधन करें, और संसाधनों का
                  संरक्षण करें। स्वचालित सिंचाई से ड्रोन आधारित फसल निगरानी के
                  लिए सिस्टम, एग्रोटेक किसानों को सशक्त बनाता है डेटा-संचालित
                  निर्णय लेने और कुशल खेती को लागू करने के लिए तकनीक। कृषि के
                  साथ प्रौद्योगिकी का विलय करके, एग्रोटेक ने किया है उत्पादकता
                  बढ़ाने, पर्यावरण को कम करने की क्षमता प्रभाव, और वैश्विक खाद्य
                  सुरक्षा चुनौतियों का समाधान।
                </div>
              )}
            </div>
            <div
              className="mt-10 hover:translate-y-[-1rem]  transition-all duration-300 p-6 bg-white font-bold text-[1.5rem] md:w-[60%] mx-auto text-black text-center rounded-xl md:text-[2rem]"
              onClick={() => setRenderTo(2)}
            >
              {language == true ? "Contact Us" : "संपर्क करें"}
            </div>
          </div>
        ) : renderDiv == 2 ? (
          <div className="w-[100%]">
            <h1 className="text-[3rem] font-bold  text-center bg-[rgba(255,255,255,0.15)] border-[0.5px] md:text-[4rem] border-gray-300 md:w-[60%] mx-auto p-2 rounded-xl ">
              Contact Us
            </h1>
            <div className="w-full md:w-[60%] mx-auto flex justify-center items-center py-10">
              <input
                className="w-[100%] text-[1.1rem] bg-[rgba(255,255,255,0.16)] border-[0.5px] p-4 rounded-xl outline-none"
                placeholder="Enter name here."
                name="Name"
              />
            </div>
            <div className="w-full md:w-[60%] mx-auto flex justify-center items-center ">
              <input
                className="w-[100%] text-[1.1rem] bg-[rgba(255,255,255,0.16)] border-[0.5px] p-4 rounded-xl outline-none"
                placeholder="Enter email here."
                name="Email"
              />
            </div>
            <div className="w-full flex justify-center items-center ">
              <textarea
                className="w-[100%] md:w-[60%] mx-auto mt-10 text-[1.1rem] bg-[rgba(255,255,255,0.16)] border-[0.5px] p-4 rounded-xl outline-none h-[20rem]"
                placeholder="Enter email here."
                name="Text"
              />
            </div>
            <div className="w-full md:w-[60%] mx-auto bg-white text-center font-bold text-black p-6 mt-10 rounded-xl text-[1.2rem] hover:translate-y-[-1rem] transition-all duration-300 md:text-[2rem]">
              Submit
            </div>
          </div>
        ) : renderDiv == 3 ? (
          // some navbar
          <div className="w-full md:w-[80%] mx-auto ">
            <div className="md:flex grid grid-cols-2  items-center border-t-[0.5px] border-b-[0.5px] text-[1.5rem] py-4">
              <li
                onClick={() => setDivElements(0)}
                className="hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 font-semibold text-center"
              >
                {language == true ? "Schemes" : "योजनाओं"}
              </li>
              <li
                onClick={() => setDivElements(1)}
                className="hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 font-semibold text-center"
              >
                {language == true ? "Techniques" : "तकनीक"}
              </li>
              <li
                onClick={() => setDivElements(2)}
                className="hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 font-semibold text-center"
              >
                {language == true ? "Royalties" : "रॉयल्टी"}
              </li>
              <li
                onClick={() => setDivElements(3)}
                className="hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 font-semibold text-center"
              >
                {language == true ? "NGO's" : "सरकारीसंगठन"}
              </li>
            </div>
            {/* div elements */}
            {divElements == 0 ? (
              <div className="w-full bg-[rgba(255,255,255,0.15)] rounded-xl mt-10 p-4">
                <h1 className="text-center font-bold my-3 md:my-10 md:text-[3rem]">
                  {language == true ? "Schemes" : "योजनाओं"}
                </h1>
                <LinkTiles
                  text={
                    language == true
                      ? "Agriculture Infrastructure Fund"
                      : "कृषि अवसंरचना कोष"
                  }
                  linkthing="https://pmkisan.gov.in/AIF.aspx"
                />
                <LinkTiles
                  text={
                    language == true
                      ? "Credit facility for farmers"
                      : "किसानों के लिए ऋण सुविधा"
                  }
                  linkthing="https://www.agricoop.nic.in/schemes/credit-facility-farmers"
                />
                <LinkTiles
                  text={
                    language == true
                      ? "Crop insurance schemes"
                      : "फसल बीमा योजनाएं"
                  }
                  linkthing="https://pmfby.gov.in/"
                />
                <LinkTiles
                  text={
                    language == true
                      ? "Group Accident Insurance scheme for Fishermen"
                      : "मछुआरों के लिए समूह दुर्घटना बीमा योजना"
                  }
                  linkthing="https://vikaspedia.in/social-welfare/pradhan-mantri-matsya-sampada-yojana-1/group-accident-insurance-scheme-for-fishermen"
                />
              </div>
            ) : divElements == 1 ? (
              <div className="w-full bg-[rgba(255,255,255,0.15)] rounded-xl mt-10 p-4">
                {/* thchnology page */}
                <h1 className="text-center font-bold my-3 md:my-10 md:text-[3rem]">
                  {language == true ? "Techniques" : "तकनीक"}
                </h1>
                <LinkTiles
                  text={language == true ? "Drip Irrigation" : ""}
                  linkthing="https://www.netafimindia.com/drip-irrigation/"
                />
                <LinkTiles
                  text="Mulching
"
                  linkthing="https://www.fayetteville-ar.gov/3421/Composting-and-Mulch"
                />
                <LinkTiles
                  text="Crop Rotation
"
                  linkthing="https://www.conserve-energy-future.com/advantages-disadvantages-crop-rotation.php"
                />
                <LinkTiles
                  text="Rainwater Harvesting
"
                  linkthing="https://www.treehugger.com/beginners-guide-to-rainwater-harvesting-5089884"
                />
              </div>
            ) : divElements == 2 ? (
              <div className="w-full bg-[rgba(255,255,255,0.15)] rounded-xl mt-10 p-4">
                {/* royalties page */}
                <h1 className="text-center font-bold my-3 md:my-10 md:text-[3rem]">
                  {language == true ? "Royalties" : "रॉयल्टी"}
                </h1>
                <LinkTiles
                  text="Taboola
"
                  linkthing="https://www.taboola.com/"
                />
                <LinkTiles
                  text="Outbrain
"
                  linkthing="https://www.outbrain.com/"
                />
                <LinkTiles
                  text="AdRoll
"
                  linkthing="https://www.adroll.com/"
                />
              </div>
            ) : (
              <div className="w-full bg-[rgba(255,255,255,0.15)] rounded-xl mt-10 p-4">
                {/* royalties page */}
                <h1 className="text-center font-bold my-3 md:my-10 md:text-[3rem]">
                  {language == true ? "NGO's" : "गैर सरकारी संगठन"}
                </h1>
                <LinkTiles
                  text="Centre for Collective Development
"
                  linkthing="https://ccd.ngo"
                />
                <LinkTiles
                  text="Goonj
"
                  linkthing="https://goonj.org/"
                />
                <LinkTiles
                  text="Pratham
"
                  linkthing="https://www.pratham.org/"
                />
                <LinkTiles
                  text="smilefoundationindia
"
                  linkthing="https://www.smilefoundationindia.org"
                />
              </div>
            )}
          </div>
        ) : renderDiv == 4 ? (
          <div>
            <div className=" w-full">
              <div className="  items-center border-t-[0.5px] border-b-[0.5px] text-[1.5rem] py-4">
                <li
                  onClick={() => setValues(1)}
                  className="w-full md:w-[80%] mx-auto hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 flex justify-center items-center gap-[1rem] font-semibold text-center"
                >
                  Weather
                  <TiWeatherPartlySunny size={30} />
                </li>
                <li
                  onClick={() => setValues(2)}
                  className="w-full md:w-[80%] mx-auto hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 flex justify-center items-center gap-[1rem] font-semibold text-center"
                >
                  Soil
                  <GiEarthAfricaEurope size={30} />
                </li>
                <li
                  onClick={() => setValues(3)}
                  className="w-full md:w-[80%] mx-auto hover:scale-110 transition-all duration-150 list-none bg-white text-black p-4 rounded-xl m-3 flex justify-center items-center gap-[1rem] font-semibold text-center"
                >
                  Pestisides
                  <AiFillMedicineBox size={30} />
                </li>
              </div>
              <div className="w-full  p-4 text-center">
                {values == 0 ? (
                  <div className=" h-[50vh] ">
                    <div className="box flex justify-center items-center  bg-white w-[80%] md:w-[20rem] rounded-xl  h-[30vh] mx-auto md:mt-[8rem] mt-[5rem]">
                      <div className="flex gap-[1rem] three_dot">
                        <div className="rounded-full w-[2rem] h-[2rem] bg-black"></div>
                        <div className="rounded-full w-[2rem] h-[2rem] bg-black"></div>
                        <div className="rounded-full w-[2rem] h-[2rem] bg-black"></div>
                      </div>
                    </div>
                  </div>
                ) : values == 1 ? (
                  <div className=" py-[5rem] mt-10 w-full md:w-[80%] rounded-xl mx-auto">
                    <div className="flex justify-center items-center flex-col md:flex-row md:gap-[10rem]">
                      <TiWeatherPartlySunny size={200} />
                      <div>
                        <h1 className="font-bold text-[3rem] md:text-[8rem]">
                          00°
                        </h1>
                        <h1 className="font-bold text-[1.5rem] mt-10">
                          {input}
                        </h1>
                      </div>
                    </div>

                    <div className="md:w-[60%] w-full mx-auto mt-[3rem] p-2 rounded-xl bg-white  flex justify-between flex-col md:flex-row">
                      <input
                        type="text"
                        onClick={() => setInputAnimation(!inputAnimation)}
                        className="md:text-2xl text-xl text-black py-4 md:py-4 px-4 md:px-4 outline-none border-none w-full"
                        placeholder="Enter city."
                        onChange={(e) => setInput(e.target.value)}
                      />
                      <button
                        onClick={() => console.log(input)}
                        className="text-white bg-black border-[0.5px] border-black hover:bg-white hover:text-black transition-all duration-300 font-bold p-4 rounded-xl"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                ) : values == 2 ? (
                  <div></div>
                ) : values == 3 ? (
                  <div></div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <SideArt />
            {language == true ? (
              <div>
                <motion.h1
                  animate={{ x: 0 }}
                  initial={{ x: -1000 }}
                  transition={{ delay: 3.5, duration: 2 }}
                  className="text-[4rem]  text-center md:text-left md:text-[6rem]"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bolder",
                    marginTop: "7rem",
                  }}
                >
                  <span>MAKING FRAMING</span>, <br />{" "}
                  <span>AN EASY PROCESS.</span>
                </motion.h1>
              </div>
            ) : (
              <motion.h1
                className="text-[4rem]  text-center md:text-left md:text-[6rem]"
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ delay: 0.2, duration: 1 }}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "6rem",
                  fontWeight: "bolder",
                  marginTop: "5rem",
                }}
              >
                <span>खेती करने</span>, <br />
                <span>
                  को एक आसान
                  <span>
                    <br />
                    प्रक्रिया बनाना
                  </span>
                </span>
              </motion.h1>
            )}

            {/* this is for the second hero text  */}
            {language == true ? (
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ delay: 3.9, duration: 2.5 }}
              >
                <p className="text-2xl py-4 text-center md:text-left">
                  We provide tools that a farmer needs. Our website provides an
                  all over solution <br /> for farmers, that can be used to{" "}
                </p>
                <motion.button
                  onClick={() => setRenderDiv(0)}
                  className=" transition-all duration-500 bg-white z-[10000]   text-black font-semibold py-6 w-full  md:w-[53%] rounded-xl my-4 text-2xl"
                >
                  Let's Get Started
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <p className="text-2xl p-4 text-center md:text-left">
                  हम उपकरण प्रदान करते हैं जिसकी एक किसान को आवश्यकता होती है।
                  हमारी वेबसाइट किसानों <br /> के लिए एक संपूर्ण समाधान प्रदान
                  करती है, जिसका उपयोग किया जा सकता है
                </p>
                <button
                  onClick={() => setRenderDiv(0)}
                  className="hover:scale-[1.01] transition-all duration-500 bg-white z-[10000]   text-black font-semibold py-6 w-[53%] rounded-xl my-4 text-2xl"
                >
                  Let's Get Started
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const LinkTiles = ({ text, linkthing }: any) => {
  return (
    <div className=" px-1 py-4  ">
      <Link href={linkthing} target="_blank">
        <div className="text-center hover:bg-[rgba(255,255,255,0.35)] transition-all duration-200 hover:text-white bg-white text-black p-3 md:text-[1.5rem]  rounded-xl font-bold">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
