import { useState } from 'react';
import NftCard from '../components/NftCard'

const sampleData = [
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    },
    {
        image: "./image/image7.png",
        name: "testNFT",
        price: "testPrice",
        date: "testData"
    }
]
export default function Home() {
    const [tab, setTab] = useState("all");
    const [nftCollection, setNftCollection] = useState(sampleData)
    console.log("nftcollection", nftCollection)
    return (
      <div>
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img
                            src="./image/logo.png"
                            className="mr-3 h-6 sm:h-10 sm:w-[130px]"
                            alt="Flowbite Logo"/>
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* <a
                            href="#"
                            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                        <a
                            href="#"
                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a> */}
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                        <ul
                            className="flex flex-col mt-4 font-extrabold text-[17px] uppercase lg:flex-row lg:space-x-10 lg:mt-0">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:rounded-full lg:hover:text-white lg:px-4 lg:py-2 lg:hover:bg-primary-900 dark:text-gray-400 rounded-lg">Login</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:rounded-full lg:hover:text-white lg:px-4 lg:py-2 lg:hover:bg-primary-900 dark:text-gray-400 rounded-lg">WalletInfo</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:rounded-full lg:hover:text-white lg:px-4 lg:py-2 lg:hover:bg-primary-900 dark:text-gray-400 rounded-lg">NFT Mint</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:rounded-full lg:hover:text-white lg:px-4 lg:py-2 lg:hover:bg-primary-900 dark:text-gray-400 rounded-lg">NFT Buylist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="search h-80 w-full">
            <div className="search_card z-20">
                <h1 className="tracking-in-expand-fwd text-[33px] font-bold py-3">ESCARE NFT marketplace</h1>
                <p className="tracking-in-expand-fwd-bottom pb-16">Description auyeriuhwkjerh </p>
                <div className="absolute z-10 w-full">
                    <input className="rounded-full w-4/5 z-20 text text-search" type="search" placeholder="search NFT by name" />
                </div>
            </div>
            <div className="constelacao z-1">
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.6s', left: '982px', top: '200px'}}></span>
                <span
                    className="estrela style3 opacity2 tam3"
                    style={{animationDelay: '.1s', left: '724px', top: '352px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.6s', left: '625px', top: '252px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '21px', top: '624px'}}></span>
                <span
                    className="estrela style4 opacity3 tam3"
                    style={{animationDelay: '.7s', left: '373px', top: '329px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.6s', left: '781px', top: '153px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '212px', top: '378px'}}></span>
                <span
                    className="estrela style3 opacity3 tam3"
                    style={{animationDelay: '.6s', left: '623px', top: '398px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '925px', top: '586px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.3s', left: '56px', top: '155px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.6s', left: '609px', top: '560px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '902px', top: '410px'}}></span>
                <span
                    className="estrela style3 opacity1 tam3"
                    style={{animationDelay: '.1s', left: '164px', top: '332px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.6s', left: '957px', top: '549px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.5s', left: '25px', top: '602px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.0s', left: '445px', top: '199px'}}></span>
                <span
                    className="estrela style1 opacity3 tam3"
                    style={{animationDelay: '.0s', left: '920px', top: '185px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '495px', top: '438px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '647px', top: '346px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.7s', left: '515px', top: '460px'}}></span>
                <span
                    className="estrela style2 opacity2 tam3"
                    style={{animationDelay: '.7s', left: '337px', top: '531px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '317px', top: '583px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.5s', left: '285px', top: '90px'}}></span>
                <span
                    className="estrela style4 opacity2 tam3"
                    style={{animationDelay: '.6s', left: '781px', top: '425px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.5s', left: '1002px', top: '93px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '520px', top: '40px'}}></span>
                <span
                    className="estrela style1 opacity1 tam3"
                    style={{animationDelay: '.4s', left: '815px', top: '70px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.6s', left: '731px', top: '561px'}}></span>
                <span
                    className="estrela style2 opacity1 tam3"
                    style={{animationDelay: '.2s', left: '286px', top: '311px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '979px', top: '312px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '877px', top: '542px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '582px', top: '479px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.3s', left: '62px', top: '159px'}}></span>
                <span
                    className="estrela style1 opacity1 tam3"
                    style={{animationDelay: '.6s', left: '849px', top: '140px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '445px', top: '342px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.6s', left: '542px', top: '450px'}}></span>
                <span
                    className="estrela style4 opacity1 tam2"
                    style={{animationDelay: '.4s', left: '424px', top: '204px'}}></span>
                <span
                    className="estrela style4 opacity1 tam2"
                    style={{animationDelay: '.5s', left: '552px', top: '75px'}}></span>
                <span
                    className="estrela style3 opacity1 tam3"
                    style={{animationDelay: '.8s', left: '966px', top: '66px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.5s', left: '265px', top: '314px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.5s', left: '765px', top: '68px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '182px', top: '109px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.8s', left: '91px', top: '225px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.0s', left: '522px', top: '392px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '297px', top: '336px'}}></span>
                <span
                    className="estrela style2 opacity3 tam2"
                    style={{animationDelay: '.5s', left: '86px', top: '588px'}}></span>
                <span
                    className="estrela style1 opacity3 tam2"
                    style={{animationDelay: '.3s', left: '50px', top: '213px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '339px', top: '284px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.6s', left: '137px', top: '281px'}}></span>
                <span
                    className="estrela style3 opacity3 tam1"
                    style={{animationDelay: '.4s', left: '603px', top: '532px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '574px', top: '341px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '31px', top: '240px'}}></span>
                <span
                    className="estrela style2 opacity3 tam3"
                    style={{animationDelay: '.0s', left: '549px', top: '178px'}}></span>
                <span
                    className="estrela style2 opacity2 tam3"
                    style={{animationDelay: '.5s', left: '95px', top: '262px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.0s', left: '955px', top: '236px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '471px', top: '492px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '928px', top: '521px'}}></span>
                <span
                    className="estrela style3 opacity3 tam3"
                    style={{animationDelay: '.1s', left: '894px', top: '454px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '944px', top: '448px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '429px', top: '363px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.3s', left: '197px', top: '599px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '616px', top: '179px'}}></span>
                <span
                    className="estrela style2 opacity3 tam3"
                    style={{animationDelay: '.5s', left: '351px', top: '150px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.7s', left: '519px', top: '111px'}}></span>
                <span
                    className="estrela style4 opacity1 tam2"
                    style={{animationDelay: '.4s', left: '649px', top: '23px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.8s', left: '213px', top: '610px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '27px', top: '428px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.0s', left: '19px', top: '271px'}}></span>
                <span
                    className="estrela style2 opacity1 tam2"
                    style={{animationDelay: '.6s', left: '694px', top: '576px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.0s', left: '757px', top: '36px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.4s', left: '53px', top: '464px'}}></span>
                <span
                    className="estrela style1 opacity2 tam2"
                    style={{animationDelay: '.0s', left: '754px', top: '427px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.0s', left: '931px', top: '481px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.7s', left: '648px', top: '415px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.2s', left: '605px', top: '249px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '4px', top: '219px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '515px', top: '294px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.2s', left: '681px', top: '190px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.3s', left: '641px', top: '477px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.3s', left: '211px', top: '567px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.2s', left: '181px', top: '486px'}}></span>
                <span
                    className="estrela style1 opacity1 tam3"
                    style={{animationDelay: '.1s', left: '717px', top: '30px'}}></span>
                <span
                    className="estrela style3 opacity2 tam2"
                    style={{animationDelay: '.7s', left: '756px', top: '422px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '609px', top: '283px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.3s', left: '122px', top: '357px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '448px', top: '454px'}}></span>
                <span
                    className="estrela style1 opacity1 tam3"
                    style={{animationDelay: '.4s', left: '406px', top: '576px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '75px', top: '276px'}}></span>
                <span
                    className="estrela style3 opacity3 tam1"
                    style={{animationDelay: '.2s', left: '487px', top: '617px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '755px', top: '362px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '860px', top: '586px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '549px', top: '610px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.3s', left: '481px', top: '375px'}}></span>
                <span
                    className="estrela style2 opacity2 tam2"
                    style={{animationDelay: '.2s', left: '784px', top: '307px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.3s', left: '837px', top: '229px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '659px', top: '605px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.0s', left: '994px', top: '292px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '354px', top: '598px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '729px', top: '492px'}}></span>
                <span
                    className="estrela style3 opacity2 tam3"
                    style={{animationDelay: '.8s', left: '454px', top: '609px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.5s', left: '631px', top: '532px'}}></span>
                <span
                    className="estrela style2 opacity3 tam2"
                    style={{animationDelay: '.2s', left: '945px', top: '146px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.7s', left: '883px', top: '544px'}}></span>
                <span
                    className="estrela style4 opacity1 tam3"
                    style={{animationDelay: '.7s', left: '734px', top: '583px'}}></span>
                <span
                    className="estrela style3 opacity2 tam3"
                    style={{animationDelay: '.5s', left: '65px', top: '408px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '353px', top: '324px'}}></span>
                <span
                    className="estrela style2 opacity2 tam3"
                    style={{animationDelay: '.6s', left: '391px', top: '206px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '476px', top: '88px'}}></span>
                <span
                    className="estrela style2 opacity1 tam2"
                    style={{animationDelay: '.4s', left: '77px', top: '546px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.5s', left: '477px', top: '39px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '538px', top: '455px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.1s', left: '47px', top: '451px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '298px', top: '358px'}}></span>
                <span
                    className="estrela style4 opacity2 tam3"
                    style={{animationDelay: '.4s', left: '990px', top: '273px'}}></span>
                <span
                    className="estrela style2 opacity1 tam3"
                    style={{animationDelay: '.7s', left: '416px', top: '528px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.0s', left: '952px', top: '371px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.2s', left: '925px', top: '111px'}}></span>
                <span
                    className="estrela style1 opacity3 tam2"
                    style={{animationDelay: '.0s', left: '957px', top: '472px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '140px', top: '510px'}}></span>
                <span
                    className="estrela style2 opacity1 tam3"
                    style={{animationDelay: '.0s', left: '105px', top: '96px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '783px', top: '320px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '1015px', top: '212px'}}></span>
                <span
                    className="estrela style3 opacity1 tam3"
                    style={{animationDelay: '.2s', left: '509px', top: '142px'}}></span>
                <span
                    className="estrela style3 opacity2 tam2"
                    style={{animationDelay: '.7s', left: '883px', top: '618px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.1s', left: '287px', top: '316px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '870px', top: '475px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.2s', left: '810px', top: '315px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '304px', top: '506px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '1003px', top: '41px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.1s', left: '248px', top: '554px'}}></span>
                <span
                    className="estrela style3 opacity3 tam2"
                    style={{animationDelay: '.1s', left: '149px', top: '186px'}}></span>
                <span
                    className="estrela style2 opacity2 tam3"
                    style={{animationDelay: '.7s', left: '1021px', top: '482px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '525px', top: '568px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '45px', top: '454px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.1s', left: '574px', top: '139px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.1s', left: '866px', top: '157px'}}></span>
                <span
                    className="estrela style4 opacity2 tam2"
                    style={{animationDelay: '.5s', left: '467px', top: '480px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '518px', top: '136px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '822px', top: '499px'}}></span>
                <span
                    className="estrela style2 opacity2 tam2"
                    style={{animationDelay: '.8s', left: '652px', top: '200px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.8s', left: '294px', top: '624px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '979px', top: '79px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '735px', top: '165px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '914px', top: '307px'}}></span>
                <span
                    className="estrela style3 opacity3 tam1"
                    style={{animationDelay: '.5s', left: '548px', top: '412px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '486px', top: '370px'}}></span>
                <span
                    className="estrela style3 opacity1 tam3"
                    style={{animationDelay: '.5s', left: '105px', top: '70px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '215px', top: '113px'}}></span>
                <span
                    className="estrela style3 opacity2 tam2"
                    style={{animationDelay: '.1s', left: '372px', top: '612px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.5s', left: '812px', top: '197px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '741px', top: '37px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.8s', left: '152px', top: '409px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '366px', top: '547px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '465px', top: '545px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '454px', top: '354px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.6s', left: '217px', top: '466px'}}></span>
                <span
                    className="estrela style2 opacity3 tam2"
                    style={{animationDelay: '.3s', left: '313px', top: '246px'}}></span>
                <span
                    className="estrela style1 opacity1 tam3"
                    style={{animationDelay: '.1s', left: '7px', top: '457px'}}></span>
                <span
                    className="estrela style3 opacity2 tam2"
                    style={{animationDelay: '.6s', left: '356px', top: '335px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '812px', top: '521px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '367px', top: '54px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.3s', left: '791px', top: '524px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.2s', left: '317px', top: '48px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.2s', left: '985px', top: '519px'}}></span>
                <span
                    className="estrela style3 opacity2 tam2"
                    style={{animationDelay: '.2s', left: '977px', top: '302px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.8s', left: '549px', top: '450px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '923px', top: '583px'}}></span>
                <span
                    className="estrela style1 opacity2 tam2"
                    style={{animationDelay: '.7s', left: '83px', top: '18px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.0s', left: '1001px', top: '82px'}}></span>
                <span
                    className="estrela style4 opacity3 tam1"
                    style={{animationDelay: '.7s', left: '258px', top: '455px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '164px', top: '316px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.1s', left: '320px', top: '287px'}}></span>
                <span
                    className="estrela style3 opacity3 tam2"
                    style={{animationDelay: '.3s', left: '459px', top: '395px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.3s', left: '305px', top: '98px'}}></span>
                <span
                    className="estrela style2 opacity1 tam3"
                    style={{animationDelay: '.4s', left: '698px', top: '419px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.2s', left: '939px', top: '40px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.1s', left: '1008px', top: '492px'}}></span>
                <span
                    className="estrela style3 opacity3 tam1"
                    style={{animationDelay: '.2s', left: '1010px', top: '89px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.2s', left: '489px', top: '55px'}}></span>
                <span
                    className="estrela style2 opacity3 tam2"
                    style={{animationDelay: '.3s', left: '421px', top: '451px'}}></span>
                <span
                    className="estrela style4 opacity1 tam3"
                    style={{animationDelay: '.7s', left: '167px', top: '581px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.5s', left: '757px', top: '378px'}}></span>
                <span
                    className="estrela style3 opacity1 tam3"
                    style={{animationDelay: '.7s', left: '151px', top: '114px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.0s', left: '123px', top: '71px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '755px', top: '487px'}}></span>
                <span
                    className="estrela style4 opacity3 tam2"
                    style={{animationDelay: '.8s', left: '824px', top: '185px'}}></span>
                <span
                    className="estrela style4 opacity1 tam3"
                    style={{animationDelay: '.4s', left: '91px', top: '123px'}}></span>
                <span
                    className="estrela style3 opacity1 tam3"
                    style={{animationDelay: '.3s', left: '773px', top: '574px'}}></span>
                <span
                    className="estrela style4 opacity1 tam2"
                    style={{animationDelay: '.1s', left: '806px', top: '222px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '696px', top: '390px'}}></span>
                <span
                    className="estrela style4 opacity1 tam3"
                    style={{animationDelay: '.7s', left: '389px', top: '17px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '877px', top: '572px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.5s', left: '639px', top: '363px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '778px', top: '517px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.3s', left: '179px', top: '218px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.0s', left: '977px', top: '102px'}}></span>
                <span
                    className="estrela style2 opacity2 tam2"
                    style={{animationDelay: '.0s', left: '990px', top: '49px'}}></span>
                <span
                    className="estrela style4 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '165px', top: '81px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '718px', top: '546px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '165px', top: '369px'}}></span>
                <span
                    className="estrela style2 opacity1 tam2"
                    style={{animationDelay: '.4s', left: '346px', top: '223px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.7s', left: '181px', top: '327px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.4s', left: '822px', top: '402px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.2s', left: '264px', top: '440px'}}></span>
                <span
                    className="estrela style3 opacity3 tam2"
                    style={{animationDelay: '.3s', left: '298px', top: '420px'}}></span>
                <span
                    className="estrela style2 opacity1 tam2"
                    style={{animationDelay: '.3s', left: '707px', top: '139px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '285px', top: '619px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.3s', left: '495px', top: '117px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.8s', left: '560px', top: '118px'}}></span>
                <span
                    className="estrela style2 opacity3 tam1"
                    style={{animationDelay: '.5s', left: '496px', top: '179px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.1s', left: '460px', top: '530px'}}></span>
                <span
                    className="estrela style4 opacity1 tam3"
                    style={{animationDelay: '.2s', left: '976px', top: '598px'}}></span>
                <span
                    className="estrela style3 opacity3 tam1"
                    style={{animationDelay: '.6s', left: '945px', top: '102px'}}></span>
                <span
                    className="estrela style1 opacity2 tam2"
                    style={{animationDelay: '.1s', left: '18px', top: '256px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.8s', left: '454px', top: '270px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.3s', left: '797px', top: '71px'}}></span>
                <span
                    className="estrela style4 opacity1 tam3"
                    style={{animationDelay: '.8s', left: '410px', top: '235px'}}></span>
                <span
                    className="estrela style4 opacity2 tam3"
                    style={{animationDelay: '.8s', left: '495px', top: '17px'}}></span>
                <span
                    className="estrela style2 opacity2 tam1"
                    style={{animationDelay: '.6s', left: '776px', top: '37px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '39px', top: '349px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '288px', top: '371px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '328px', top: '308px'}}></span>
                <span
                    className="estrela style3 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '412px', top: '456px'}}></span>
                <span
                    className="estrela style4 opacity2 tam3"
                    style={{animationDelay: '.6s', left: '708px', top: '21px'}}></span>
                <span
                    className="estrela style4 opacity1 tam2"
                    style={{animationDelay: '.5s', left: '417px', top: '229px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '417px', top: '331px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '632px', top: '572px'}}></span>
                <span
                    className="estrela style3 opacity2 tam3"
                    style={{animationDelay: '.5s', left: '792px', top: '354px'}}></span>
                <span
                    className="estrela style2 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '413px', top: '568px'}}></span>
                <span
                    className="estrela style4 opacity3 tam1"
                    style={{animationDelay: '.4s', left: '343px', top: '147px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.4s', left: '659px', top: '538px'}}></span>
                <span
                    className="estrela style4 opacity2 tam3"
                    style={{animationDelay: '.8s', left: '403px', top: '481px'}}></span>
                <span
                    className="estrela style1 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '512px', top: '37px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.2s', left: '464px', top: '167px'}}></span>
                <span
                    className="estrela style1 opacity3 tam1"
                    style={{animationDelay: '.6s', left: '317px', top: '254px'}}></span>
                <span
                    className="estrela style1 opacity2 tam3"
                    style={{animationDelay: '.1s', left: '62px', top: '526px'}}></span>
                <span
                    className="estrela style3 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '513px', top: '175px'}}></span>
                <span
                    className="estrela style2 opacity1 tam2"
                    style={{animationDelay: '.6s', left: '750px', top: '54px'}}></span>
                <span
                    className="estrela style1 opacity2 tam1"
                    style={{animationDelay: '.7s', left: '667px', top: '98px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.2s', left: '289px', top: '58px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.0s', left: '926px', top: '88px'}}></span>
                <span
                    className="estrela style2 opacity1 tam3"
                    style={{animationDelay: '.2s', left: '1013px', top: '391px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.7s', left: '465px', top: '2px'}}></span>
                <span
                    className="estrela style4 opacity3 tam3"
                    style={{animationDelay: '.0s', left: '0px', top: '268px'}}></span>
                <span
                    className="estrela style1 opacity1 tam1"
                    style={{animationDelay: '.6s', left: '717px', top: '30px'}}></span>
                <span
                    className="estrela style3 opacity2 tam3"
                    style={{animationDelay: '.6s', left: '313px', top: '363px'}}></span>
                <span
                    className="estrela style2 opacity1 tam1"
                    style={{animationDelay: '.7s', left: '829px', top: '261px'}}></span>
                <span
                    className="estrela style4 opacity1 tam1"
                    style={{animationDelay: '.5s', left: '334px', top: '396px'}}></span>
                <span
                    className="estrela style3 opacity1 tam2"
                    style={{animationDelay: '.0s', left: '423px', top: '236px'}}></span>
                <span
                    className="estrela style4 opacity3 tam2"
                    style={{animationDelay: '.6s', left: '791px', top: '337px'}}></span>
            </div>
        </div>
        <div className="flex flex-wrap w-4/5 mx-auto justify-center pt-32">
            <div className='grid grid-cols-3 gap-40 w-1/2'>
                <h1 className='text-center text-[19px] border-b-4 border-transparent hover:border-blue-800 box-border'>All</h1>
                <h1 className='text-center text-[19px] border-b-4 border-transparent hover:border-blue-800'>Image</h1>
                <h1 className='text-center text-[19px] border-b-4 border-transparent hover:border-blue-800'>Video</h1>
            </div>
        </div>
        <div className='flex flex-wrap w-4/5 mx-auto mt-12 gap-4'>
            {
                nftCollection.map(({image, name, price, date }, index) =>                     
                    <>
                        <NftCard key={index} image={image} name={name} price={price} date={date}/>
                    </>
                )
            }
        </div>
        <footer>
            <div className='w-full h-[400px] footer'>
                <div className='grid grid-cols-5 text-white pt-20 pl-32'>
                    <div className='cols-span-1'></div>
                    <div className='cols-span-1 grid grid-rows-2 h-20'>
                        <p className='text-[18px] font-bold'>Marketplace</p>
                        <p className=''>Meet various NFT.</p>
                    </div>
                    <div className='cols-span-1 grid grid-rows-5 h-48'>
                        <p className='text-[18px] font-bold'>Quick Links</p>
                        <p className=''>WalletInfo</p>
                        <p className=''>NFT Mint</p>
                        <p className=''>NFT SellList</p>
                        <p className=''>NFT RegSell</p>
                    </div>
                    <div className='cols-span-1 grid grid-rows-8 h-72'>
                        <p className='text-[18px] font-bold'>Represent</p>
                        <p className=''>David</p>
                        <p className='text-[18px] font-bold'>BusinessNumber</p>
                        <p className=''>107-97-7333</p>
                        <p className='text-[18px] font-bold'>FAX</p>
                        <p className=''>02-6499-4123</p>
                        <p className='text-[18px] font-bold'>Address</p>
                        <p className=''>uISEurse qeurqwer akeurwer6 33</p>
                    </div>
                    <div className='cols-span-1'></div>
                </div>
            </div>
        </footer>
      </div>
    );
}
