import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
//SVG
import Logo from "../../assets/SVG/logo.svg";
import Category from "../../assets/SVG/Category.svg";
import Calendar from "../../assets/SVG/Calendar.svg";
import Chart1 from "../../assets/SVG/Chart1.svg";
import chart from "../../assets/SVG/chart.svg";
import Chat from "../../assets/SVG/Chat.svg";
import Document from "../../assets/SVG/Document.svg";
import Logout from "../../assets/SVG/Logout.svg";
import Setting from "../../assets/SVG/Setting.svg";
import Wallet from "../../assets/SVG/Wallet.svg";

const Menu = () => {
  return (
    <div className="flex flex-col bg-primaryColor w-[250px] h-screen space-y-12 pt-5">
      <div className="mx-auto">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex flex-col h-96">
        {[
          ["داشبورد", "/dashboard", <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_21)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.41867 12.0828C10.0008 12.0828 10.2046 13.5226 10.2046 16.5169C10.2046 18.0172 10.2046 19.0845 9.52447 19.866C8.74182 20.7664 7.31729 20.951 5.41867 20.951C3.52004 20.951 2.09551 20.7664 1.31286 19.866C0.63269 19.0845 0.63269 18.0182 0.63269 16.543L1.47727 16.5169H0.63269C0.63269 13.5226 0.836517 12.0828 5.41867 12.0828ZM17.8059 12.0828C22.388 12.0828 22.5919 13.5226 22.5919 16.5169C22.5919 18.0172 22.5919 19.0845 21.9117 19.866C21.1291 20.7664 19.7045 20.951 17.8059 20.951C15.9073 20.951 14.4827 20.7664 13.7001 19.866C13.0199 19.0845 13.0199 18.0182 13.0199 16.543L13.8645 16.5169H13.0199C13.0199 13.5226 13.2237 12.0828 17.8059 12.0828ZM5.65083 13.6482L5.41867 13.6478C2.48067 13.6478 2.33 13.8431 2.32228 16.1278L2.32275 17.0179C2.32809 17.9266 2.36546 18.583 2.62703 18.8852C2.92545 19.2275 3.8117 19.386 5.41867 19.386C7.02563 19.386 7.91188 19.2264 8.2103 18.8842C8.51547 18.5326 8.51547 17.6979 8.51547 16.5419C8.51547 13.9334 8.51547 13.6605 5.65083 13.6482ZM18.0381 13.6482L17.8059 13.6478C14.8679 13.6478 14.7172 13.8431 14.7095 16.1278L14.71 17.0179C14.7153 17.9266 14.7527 18.583 15.0143 18.8852C15.3127 19.2275 16.1989 19.386 17.8059 19.386C19.4129 19.386 20.2991 19.2264 20.5975 18.8842C20.9027 18.5326 20.9027 17.6979 20.9027 16.5419C20.9027 13.9334 20.9027 13.6605 18.0381 13.6482ZM5.41867 0.606201C10.0008 0.606201 10.2046 2.04599 10.2046 5.04033C10.2046 6.54063 10.2046 7.60795 9.52447 8.3894C8.74182 9.28979 7.31729 9.47446 5.41867 9.47446C3.52004 9.47446 2.09551 9.28979 1.31286 8.3894C0.63269 7.60795 0.63269 6.54167 0.63269 5.06641L1.47727 5.04033H0.63269C0.63269 2.04599 0.836517 0.606201 5.41867 0.606201ZM17.8059 0.606201C22.388 0.606201 22.5919 2.04599 22.5919 5.04033C22.5919 6.54063 22.5919 7.60795 21.9117 8.3894C21.1291 9.28979 19.7045 9.47446 17.8059 9.47446C15.9073 9.47446 14.4827 9.28979 13.7001 8.3894C13.0199 7.60795 13.0199 6.54167 13.0199 5.06641L13.8645 5.04033H13.0199C13.0199 2.04599 13.2237 0.606201 17.8059 0.606201ZM5.65083 2.17165L5.41867 2.17119C2.48067 2.17119 2.33 2.36651 2.32228 4.65122L2.32275 5.54132C2.32809 6.45001 2.36546 7.10641 2.62703 7.40868C2.92545 7.75089 3.8117 7.90947 5.41867 7.90947C7.02563 7.90947 7.91188 7.74984 8.2103 7.40763C8.51547 7.05603 8.51547 6.22137 8.51547 5.06537C8.51547 2.45685 8.51547 2.18393 5.65083 2.17165ZM18.0381 2.17165L17.8059 2.17119C14.8679 2.17119 14.7172 2.36651 14.7095 4.65122L14.71 5.54132C14.7153 6.45001 14.7527 7.10641 15.0143 7.40868C15.3127 7.75089 16.1989 7.90947 17.8059 7.90947C19.4129 7.90947 20.2991 7.74984 20.5975 7.40763C20.9027 7.05603 20.9027 6.22137 20.9027 5.06537C20.9027 2.45685 20.9027 2.18393 18.0381 2.17165Z" fill="#fff"/></g><defs><clipPath id="clip0_110_21"><rect width="21.9592" height="20.8534" fill="white" transform="translate(0.63269 0.310303)"/></clipPath></defs></svg>],
          ["کلاس ها", "/classes", <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_15)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7925 0.310303C16.2587 0.310303 16.6371 0.660858 16.6371 1.09279L16.6376 1.97733C18.2818 2.08177 19.6474 2.60357 20.6139 3.50088C21.6691 4.48265 22.2243 5.89426 22.2187 7.58757V17.1058C22.2187 20.5821 19.8358 22.7418 16.0014 22.7418H6.47676C2.64237 22.7418 0.259521 20.5519 0.259521 17.0265V7.58548C0.259521 4.30653 2.38455 2.20178 5.85029 1.97769L5.85098 1.09279C5.85098 0.660858 6.22936 0.310303 6.69556 0.310303C7.16177 0.310303 7.54015 0.660858 7.54015 1.09279L7.53981 1.95771H14.9473L14.9479 1.09279C14.9479 0.660858 15.3263 0.310303 15.7925 0.310303ZM20.5295 9.60003H1.94868V17.0265C1.94868 19.7036 3.55676 21.1768 6.47676 21.1768H16.0014C18.9214 21.1768 20.5295 19.7308 20.5295 17.1058L20.5295 9.60003ZM14.9473 3.52269H7.53981L7.54015 4.52636C7.54015 4.9583 7.16177 5.30885 6.69556 5.30885C6.22936 5.30885 5.85098 4.9583 5.85098 4.52636L5.85038 3.54637C3.32764 3.74272 1.94868 5.15951 1.94868 7.58548V8.03505H20.5295L20.5295 7.58548C20.534 6.29698 20.1601 5.29539 19.418 4.6068C18.7666 4.00147 17.8143 3.63996 16.638 3.54687L16.6371 4.52636C16.6371 4.9583 16.2587 5.30885 15.7925 5.30885C15.3263 5.30885 14.9479 4.9583 14.9479 4.52636L14.9473 3.52269Z" fill="#F9F9F9"/></g><defs><clipPath id="clip0_110_15"><rect width="21.9592" height="23.3966" fill="white" transform="translate(0.259521 0.310303)"/></clipPath></defs></svg>],
          ["آزمون", "/test", <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_27)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3212 0.379395C20.0257 0.379395 22.5147 2.7886 22.5147 6.37402V14.7296C22.5147 18.315 20.0257 20.7242 16.3212 20.7242H6.74905C3.04459 20.7242 0.555542 18.315 0.555542 14.7296V6.37402C0.555542 2.7886 3.04459 0.379395 6.74905 0.379395H16.3212ZM16.3212 1.7988H6.74905C3.91785 1.7988 2.08758 3.59388 2.08758 6.37402V14.7296C2.08758 17.5097 3.91785 19.3048 6.74905 19.3048H16.3212C19.1534 19.3048 20.9827 17.5097 20.9827 14.7296V6.37402C20.9827 3.59388 19.1534 1.7988 16.3212 1.7988ZM6.80737 8.14118C7.23021 8.14118 7.57339 8.45913 7.57339 8.85089V15.3423C7.57339 15.7341 7.23021 16.052 6.80737 16.052C6.38453 16.052 6.04135 15.7341 6.04135 15.3423V8.85089C6.04135 8.45913 6.38453 8.14118 6.80737 8.14118ZM11.574 5.03363C11.9969 5.03363 12.3401 5.35158 12.3401 5.74333V15.3414C12.3401 15.7331 11.9969 16.0511 11.574 16.0511C11.1512 16.0511 10.808 15.7331 10.808 15.3414V5.74333C10.808 5.35158 11.1512 5.03363 11.574 5.03363ZM16.2624 11.5714C16.6852 11.5714 17.0284 11.8894 17.0284 12.2811V15.3414C17.0284 15.7331 16.6852 16.0511 16.2624 16.0511C15.8395 16.0511 15.4964 15.7331 15.4964 15.3414V12.2811C15.4964 11.8894 15.8395 11.5714 16.2624 11.5714Z" fill="#F9F9F9"/></g><defs><clipPath id="clip0_110_27"><rect width="21.9592" height="20.3448" fill="white" transform="translate(0.555542 0.379395)"/></clipPath></defs></svg>],
          ["مشاوره", "/Counseling", <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_33)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.57173 10.6509C10.5536 10.6509 14.5181 10.962 14.5181 13.6534C14.5181 16.4886 9.89858 16.6587 7.91704 16.6689L7.1976 16.6689C5.08479 16.6587 0.625305 16.4896 0.625305 13.6704C0.625305 10.832 5.24487 10.6617 7.22641 10.6515L7.46449 10.6509C7.50159 10.6509 7.53736 10.6509 7.57173 10.6509ZM7.57173 11.9224C5.02904 11.9224 1.99775 12.225 1.99775 13.6704C1.99775 14.8165 3.87343 15.398 7.57173 15.398C11.27 15.398 13.1457 14.8105 13.1457 13.6534C13.1457 12.5048 11.27 11.9224 7.57173 11.9224ZM15.9114 10.2549C18.3873 10.5982 18.9061 11.6604 18.9061 12.4903C18.9061 13.1083 18.6178 13.9449 17.2426 14.4273C17.163 14.4553 17.0807 14.4688 16.9993 14.4688C16.722 14.4688 16.4613 14.312 16.3579 14.0585C16.2234 13.7305 16.4018 13.3626 16.7559 13.2388C17.5336 12.9658 17.5336 12.6327 17.5336 12.4903C17.5336 12.0096 16.9197 11.6807 15.7092 11.5137C15.334 11.4612 15.0751 11.1374 15.1309 10.7906C15.1876 10.4431 15.5435 10.21 15.9114 10.2549ZM7.57173 0.514893C10.162 0.514893 12.2701 2.468 12.2701 4.86784C12.2756 6.0241 11.7916 7.11594 10.9095 7.93821C10.0293 8.76133 8.85359 9.21655 7.60284 9.22078H7.57173C4.98054 9.22078 2.87246 7.26768 2.87246 4.86784C2.87246 2.468 4.98054 0.514893 7.57173 0.514893ZM14.0566 1.46754C15.8545 1.7405 17.1593 3.16548 17.1593 4.85495C17.1556 6.55459 15.7859 8.01433 13.9725 8.25C13.9404 8.25423 13.9084 8.25593 13.8764 8.25593C13.5397 8.25593 13.246 8.0262 13.1975 7.70831C13.1453 7.36076 13.4061 7.03863 13.7812 6.99031C14.9231 6.84196 15.785 5.9239 15.7868 4.85411C15.7868 3.79109 14.9652 2.89422 13.8352 2.72298C13.461 2.66534 13.2076 2.33898 13.2689 1.99227C13.3302 1.64556 13.6842 1.41244 14.0566 1.46754ZM7.57173 1.78644C5.73722 1.78644 4.24491 3.16905 4.24491 4.86784C4.24491 6.56663 5.73722 7.94923 7.57173 7.94923H7.60009C8.48212 7.94584 9.31291 7.62456 9.936 7.04219C10.56 6.46152 10.9013 5.68926 10.8977 4.87038C10.8977 3.16904 9.40532 1.78644 7.57173 1.78644Z" fill="#F9F9F9"/></g><defs><clipPath id="clip0_110_33"><rect width="21.9592" height="20.3448" fill="white" transform="translate(0.168701 0.413818)"/></clipPath></defs></svg>],
          ["كتابخانه", "/library", <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_51)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8791 0.215088C18.4115 0.215088 20.7844 2.5301 20.7844 5.97521V15.8632C20.7844 19.3384 18.4845 21.5986 14.9252 21.6201L6.28188 21.6233C2.7495 21.6233 0.375488 19.3083 0.375488 15.8632V5.97521C0.375488 2.49892 2.67535 0.239819 6.23469 0.219389L14.878 0.215088H14.8791ZM14.8791 1.82797L6.2403 1.83227C3.62473 1.84732 2.06078 3.39568 2.06078 5.97521V15.8632C2.06078 18.46 3.63934 20.0105 6.28075 20.0105L14.9196 20.0072C17.5351 19.9922 19.0991 18.4417 19.0991 15.8632V5.97521C19.0991 3.37848 17.5217 1.82797 14.8791 1.82797ZM14.6624 14.7027C15.1275 14.7027 15.505 15.064 15.505 15.5091C15.505 15.9543 15.1275 16.3156 14.6624 16.3156H6.55051C6.08537 16.3156 5.70786 15.9543 5.70786 15.5091C5.70786 15.064 6.08537 14.7027 6.55051 14.7027H14.6624ZM14.6624 10.2012C15.1275 10.2012 15.505 10.5625 15.505 11.0076C15.505 11.4528 15.1275 11.814 14.6624 11.814H6.55051C6.08537 11.814 5.70786 11.4528 5.70786 11.0076C5.70786 10.5625 6.08537 10.2012 6.55051 10.2012H14.6624ZM9.64549 5.71005C10.1106 5.71005 10.4881 6.07134 10.4881 6.51649C10.4881 6.96165 10.1106 7.32293 9.64549 7.32293H6.55017C6.08503 7.32293 5.70753 6.96165 5.70753 6.51649C5.70753 6.07134 6.08503 5.71005 6.55017 5.71005H9.64549Z" fill="#F9F9F9"/></g><defs><clipPath id="clip0_110_51"><rect width="20.898" height="21.9351" fill="white" transform="translate(0.375488)"/></clipPath></defs></svg>],
          ["امور مالی", "/financial", <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_110_39)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9002 1.00854C19.3582 1.00854 22.171 3.61457 22.171 6.8193V13.7723C22.171 16.976 19.3582 19.583 15.9002 19.583H6.86156C3.40358 19.583 0.589722 16.976 0.589722 13.7723V6.8193C0.589722 3.61457 3.40358 1.00854 6.86156 1.00854H15.9002ZM15.9002 2.46172H6.86156C4.26834 2.46172 2.1582 4.41672 2.1582 6.8193V13.7723C2.1582 16.1748 4.26834 18.1298 6.86156 18.1298H15.9002C18.4934 18.1298 20.6025 16.1748 20.6025 13.7723V13.501L17.1541 13.5016C15.1704 13.5016 13.556 12.0067 13.5549 10.1699C13.5549 8.33119 15.1694 6.83539 17.1541 6.83442L20.6025 6.83384V6.8193C20.6025 4.41672 18.4934 2.46172 15.9002 2.46172ZM20.6025 8.28701L17.1541 8.28759C16.0342 8.28856 15.1234 9.13237 15.1234 10.169C15.1234 11.2046 16.0352 12.0484 17.1541 12.0484L20.6025 12.0478V8.28701ZM17.6325 9.38232C18.0654 9.38232 18.4168 9.70783 18.4168 10.1089C18.4168 10.51 18.0654 10.8355 17.6325 10.8355H17.3063C16.8734 10.8355 16.5221 10.51 16.5221 10.1089C16.5221 9.70783 16.8734 9.38232 17.3063 9.38232H17.6325ZM11.7625 5.40498C12.1954 5.40498 12.5468 5.73049 12.5468 6.13156C12.5468 6.53264 12.1954 6.85815 11.7625 6.85815H6.11706C5.68415 6.85815 5.33281 6.53264 5.33281 6.13156C5.33281 5.73049 5.68415 5.40498 6.11706 5.40498H11.7625Z" fill="#F9F9F9"/></g><defs><clipPath id="clip0_110_39"><rect width="21.9592" height="18.819" fill="white" transform="translate(0.589722 0.5)"/></clipPath></defs></svg>],
          ["پشتيبانی", "/support", <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8851 1.36499C13.4009 1.36499 15.7652 2.31187 17.541 4.03186C21.2117 7.58542 21.2117 13.3667 17.541 16.9203C15.7415 18.6632 13.3186 19.5855 10.8641 19.5855C9.52614 19.5855 8.17939 19.3117 6.91932 18.7471C6.54805 18.603 6.20041 18.4674 5.95085 18.4674C5.66364 18.4691 5.27748 18.5979 4.90445 18.7225C4.13913 18.9768 3.18642 19.2939 2.48152 18.614C1.77925 17.9333 2.10324 17.0136 2.36419 16.2735C2.49291 15.909 2.62513 15.5326 2.62513 15.2478C2.62513 15.0138 2.50867 14.7154 2.33004 14.2857C0.689941 10.8567 1.44826 6.72416 4.2302 4.03271C6.00602 2.31272 8.3694 1.36499 10.8851 1.36499ZM10.886 2.63654C8.72054 2.63654 6.6864 3.45203 5.15839 4.93212C2.76436 7.24804 2.11287 10.8041 3.53581 13.7821C3.74071 14.2729 3.93861 14.751 3.93861 15.2478C3.93861 15.7437 3.7626 16.243 3.60761 16.6838C3.47977 17.0466 3.28625 17.5942 3.41059 17.7146C3.53231 17.8367 4.10148 17.6442 4.47713 17.5196C4.92809 17.3704 5.43947 17.1992 5.94648 17.1958C6.45435 17.1958 6.93334 17.3823 7.44034 17.5798C10.5463 18.9701 14.2196 18.3377 16.6128 16.0217C19.7704 12.9632 19.7704 7.98808 16.6128 4.93127C15.0839 3.45118 13.0506 2.63654 10.886 2.63654ZM14.3421 9.97992C14.8255 9.97992 15.2178 10.3588 15.2178 10.8276C15.2178 11.2964 14.8255 11.6753 14.3421 11.6753C13.8588 11.6753 13.463 11.2964 13.463 10.8276C13.463 10.3588 13.8509 9.97992 14.3343 9.97992H14.3421ZM10.8318 9.97992C11.3152 9.97992 11.7075 10.3588 11.7075 10.8276C11.7075 11.2964 11.3152 11.6753 10.8318 11.6753C10.3485 11.6753 9.95267 11.2964 9.95267 10.8276C9.95267 10.3588 10.3397 9.97992 10.8239 9.97992H10.8318ZM7.32116 9.97992C7.80452 9.97992 8.19681 10.3588 8.19681 10.8276C8.19681 11.2964 7.80452 11.6753 7.32116 11.6753C6.8378 11.6753 6.44201 11.2964 6.44201 10.8276C6.44201 10.3588 6.82992 9.97992 7.31328 9.97992H7.32116Z" fill="#F9F9F9"/></svg>],
          ["تنظیمات", "/setting", <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3395 1.56909C11.9664 1.56909 12.5759 1.81832 13.0128 2.25149C13.4489 2.68721 13.6897 3.28484 13.6713 3.89095C13.6731 4.02743 13.7195 4.1851 13.8035 4.32327C13.9428 4.55215 14.1626 4.71322 14.4235 4.77934C14.6845 4.84207 14.9577 4.80816 15.1897 4.67507C16.3105 4.0554 17.737 4.42669 18.3771 5.50327L18.9226 6.41794C18.9366 6.44253 18.9489 6.46626 18.9594 6.49084C19.5391 7.55132 19.152 8.88645 18.075 9.49594C17.9182 9.58326 17.7913 9.70533 17.7037 9.85283C17.568 10.0809 17.5303 10.3521 17.5986 10.6013C17.6687 10.8557 17.8359 11.0667 18.0715 11.1973C18.603 11.4931 18.9997 11.9916 19.1582 12.5672C19.3166 13.1419 19.23 13.7658 18.9209 14.2804L18.3394 15.2179C17.6993 16.2826 16.2729 16.6514 15.1634 16.0309C15.0154 15.9486 14.8447 15.9037 14.6748 15.8995H14.6696C14.4165 15.8995 14.1564 16.0037 13.9673 16.186C13.7755 16.3716 13.6704 16.6192 13.6722 16.882C13.6661 18.1272 12.6197 19.1343 11.3395 19.1343H10.2423C8.95594 19.1343 7.90954 18.1222 7.90954 16.8769C7.90779 16.7234 7.86226 16.5641 7.77732 16.4259C7.63984 16.1936 7.41742 16.0275 7.16086 15.9614C6.90604 15.8952 6.62671 15.9317 6.39729 16.0605C5.84738 16.3572 5.20028 16.4293 4.60834 16.2682C4.01727 16.1063 3.50677 15.713 3.20729 15.1916L2.66001 14.2787C2.01991 13.2038 2.40082 11.8263 3.50939 11.2058C3.82375 11.0303 4.01902 10.7031 4.01902 10.3521C4.01902 10.0012 3.82375 9.67312 3.50939 9.49764C2.39994 8.87373 2.01991 7.49283 2.65914 6.41794L3.25283 5.47445C3.88417 4.41143 5.31148 4.03675 6.42444 4.65557C6.57592 4.74288 6.74055 4.78697 6.9078 4.78866C7.45333 4.78866 7.90954 4.35294 7.9183 3.8172C7.91479 3.22635 8.1556 2.65924 8.5943 2.23115C9.03475 1.80391 9.61969 1.56909 10.2423 1.56909H11.3395ZM11.3395 2.84064H10.2423C9.97082 2.84064 9.71688 2.94322 9.52512 3.12801C9.33422 3.31366 9.23002 3.56034 9.23177 3.82313C9.21338 5.06247 8.16698 6.06021 6.89991 6.06021C6.49361 6.05597 6.1022 5.95001 5.76244 5.75334C5.28521 5.49056 4.66175 5.65247 4.38242 6.12294L3.7896 7.06643C3.51815 7.5225 3.68452 8.12521 4.16788 8.39732C4.88504 8.79914 5.3325 9.5485 5.3325 10.3521C5.3325 11.1557 4.88504 11.9043 4.16613 12.3069C3.6854 12.5765 3.51903 13.1758 3.79748 13.6421L4.35002 14.5644C4.48662 14.8026 4.70991 14.9746 4.96823 15.045C5.22567 15.1145 5.50938 15.0848 5.74581 14.9577C6.09344 14.7602 6.49799 14.6576 6.90429 14.6576C7.10482 14.6576 7.30534 14.6822 7.50149 14.733C8.09343 14.8873 8.60743 15.2705 8.91216 15.785C9.11006 16.108 9.21951 16.4852 9.22302 16.8701C9.22302 17.4211 9.68011 17.8628 10.2423 17.8628H11.3395C11.899 17.8628 12.3561 17.4236 12.3587 16.882C12.3552 16.2835 12.5969 15.7147 13.0391 15.2866C13.4752 14.8644 14.0846 14.611 14.6941 14.6279C15.0934 14.6373 15.4778 14.7415 15.8167 14.928C16.3044 15.1984 16.927 15.0374 17.209 14.5711L17.7904 13.6327C17.92 13.4166 17.9576 13.1453 17.8885 12.8952C17.8202 12.6452 17.6485 12.4281 17.4174 12.3001C16.8762 11.9984 16.49 11.5118 16.3298 10.9286C16.1713 10.3564 16.258 9.73161 16.5671 9.21705C16.7685 8.87797 17.0636 8.5923 17.4174 8.39563C17.892 8.12691 18.0583 7.52589 17.7825 7.05796C17.7711 7.03931 17.7606 7.01981 17.7519 6.99947L17.2387 6.1382C16.9594 5.66773 16.3377 5.50582 15.8499 5.77454C15.3228 6.07632 14.6958 6.16278 14.0934 6.00935C13.4918 5.85846 12.9874 5.48971 12.6731 4.96922C12.4717 4.6437 12.3622 4.26478 12.3587 3.87908C12.3666 3.58916 12.2615 3.32892 12.0706 3.13819C11.8806 2.9483 11.6135 2.84064 11.3395 2.84064ZM10.7947 7.48104C12.4296 7.48104 13.7597 8.76955 13.7597 10.3522C13.7597 11.9349 12.4296 13.2217 10.7947 13.2217C9.15988 13.2217 7.82977 11.9349 7.82977 10.3522C7.82977 8.76955 9.15988 7.48104 10.7947 7.48104ZM10.7947 8.7526C9.88405 8.7526 9.14324 9.4706 9.14324 10.3522C9.14324 11.2338 9.88405 11.9501 10.7947 11.9501C11.7054 11.9501 12.4462 11.2338 12.4462 10.3522C12.4462 9.4706 11.7054 8.7526 10.7947 8.7526Z" fill="#F9F9F9"/></svg>],
          ["خروج", "/ُlogout", <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2853 2.28149C12.4271 2.28149 14.1697 3.96842 14.1697 6.0419V6.83195C14.1697 7.1829 13.8754 7.46773 13.5129 7.46773C13.1504 7.46773 12.8562 7.1829 12.8562 6.83195V6.0419C12.8562 4.66862 11.7029 3.55305 10.2853 3.55305H6.01647C4.60054 3.55305 3.44818 4.66862 3.44818 6.0419V15.476C3.44818 16.8484 4.60054 17.964 6.01647 17.964H10.2949C11.7064 17.964 12.8562 16.8518 12.8562 15.4853V14.6859C12.8562 14.335 13.1504 14.0501 13.5129 14.0501C13.8754 14.0501 14.1697 14.335 14.1697 14.6859V15.4853C14.1697 17.5537 12.4306 19.2355 10.2949 19.2355H6.01647C3.87637 19.2355 2.1347 17.5494 2.1347 15.476V6.0419C2.1347 3.96842 3.87637 2.28149 6.01647 2.28149H10.2853ZM17.3606 7.83733L19.9245 10.3084C19.9474 10.3303 19.9679 10.3532 19.9866 10.3774L19.9245 10.3084C19.9555 10.338 19.9831 10.3703 20.0071 10.4048C20.0176 10.4205 20.0278 10.4366 20.0372 10.4533C20.0448 10.4662 20.0519 10.4798 20.0584 10.4936C20.0639 10.5057 20.0692 10.5179 20.0741 10.5303C20.0807 10.5464 20.0865 10.563 20.0916 10.5797C20.0954 10.593 20.0989 10.6061 20.102 10.6195C20.1059 10.6357 20.109 10.652 20.1114 10.6684C20.1128 10.6791 20.1141 10.6902 20.1152 10.7015C20.1172 10.7208 20.118 10.7396 20.118 10.7585L20.1136 10.8111L20.1118 10.8447C20.1116 10.8462 20.1114 10.8476 20.1112 10.8491L20.118 10.7585C20.118 10.8056 20.1127 10.8522 20.1022 10.8975C20.0989 10.9109 20.0954 10.9241 20.0915 10.9371C20.0865 10.9541 20.0807 10.9706 20.0743 10.9869C20.0692 10.9991 20.0639 11.0113 20.0582 11.0233C20.0519 11.0372 20.0448 11.0508 20.0373 11.0641C20.0278 11.0804 20.0176 11.0965 20.0067 11.1122C20.0006 11.1215 19.9939 11.1307 19.9869 11.1397C19.966 11.1662 19.9433 11.1912 19.9187 11.2143L17.3606 13.6805C17.2328 13.8043 17.0646 13.8662 16.8974 13.8662C16.7293 13.8662 16.5603 13.8043 16.4324 13.6788C16.1767 13.4296 16.1776 13.0278 16.4342 12.7803L17.8702 11.3943H8.91732C8.5548 11.3943 8.26058 11.1095 8.26058 10.7585C8.26058 10.4076 8.5548 10.1227 8.91732 10.1227H17.8719L16.4342 8.73759C16.1776 8.49006 16.1759 8.08825 16.4324 7.83902C16.6881 7.5898 17.1032 7.5898 17.3606 7.83733Z" fill="#F9F9F9"/></svg>],
        ].map(([title, url, icon]) => {
          return (
            <Link className="li" to={url}>
              {icon}
              <p className="text">{title}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;