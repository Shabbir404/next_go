import '../style.css'
import { TbTargetArrow } from "react-icons/tb";
import { motion } from "framer-motion";
import ThirdLayer from './ThirdLayer';
import ForthLayer from './ForthLayer';

const SecondLayer = () => {
    return (

        <div>
            <div className='mt-20 w-11/12 md:w-11/12 mx-auto'>
                <div className='md:pt-20'>
                    <div className='md:flex justify-between '>
                        <div className='md:ml-16 md:p-0 p-4'>
                            <div className='text-[#63AB45] md:justify-start justify-center flex gap-3 '>
                                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92556 10.4705C2.35744 10.413 2.78906 10.3557 3.21925 10.2908C4.14925 10.1507 5.08588 10.0714 6.01763 9.99252L6.01888 9.99246C6.15888 9.98058 6.29875 9.96877 6.43844 9.95671C7.50663 9.74803 8.58732 9.67086 9.66644 9.72631C10.7733 9.8484 11.8592 10.1942 12.8857 10.7517V11.0166C11.8592 11.574 10.7733 11.9198 9.66644 12.0419C8.58732 12.0974 7.50663 12.0202 6.43844 11.8115C5.36831 11.7194 4.29813 11.6042 3.21925 11.4775C2.14031 11.3507 1.07012 11.201 2.316e-08 11.0166L0 10.7517C0.639939 10.6414 1.28306 10.5559 1.92556 10.4705ZM10.7633 18.6302C10.9332 18.2396 11.12 17.8655 11.3061 17.4927C11.389 17.3268 11.4717 17.1611 11.5527 16.9944C11.8159 16.4529 12.1141 15.9345 12.4299 15.4277C12.5448 15.2432 12.64 15.0404 12.7336 14.841C12.8972 14.4924 13.056 14.1541 13.3071 13.9416C13.7816 13.5568 14.3283 13.3534 14.886 13.354L15 13.5153C14.9945 14.2477 14.8235 14.9613 14.5088 15.5659C14.3311 15.9602 14.0336 16.1859 13.7358 16.4117C13.6073 16.5092 13.4787 16.6068 13.3597 16.7179C12.965 17.0866 12.5615 17.4437 12.1492 17.7893C11.7369 18.1349 11.3159 18.469 10.8685 18.78L10.7633 18.6302ZM11.7543 3.44557C11.4882 3.21689 11.2226 2.98883 10.9388 2.78003L10.816 2.92981C11.0528 3.50581 11.3072 4.0588 11.5703 4.60021C11.8335 5.14163 12.1142 5.6716 12.3949 6.19C12.4795 6.34631 12.5538 6.51517 12.628 6.68397C12.8 7.07504 12.9718 7.46575 13.2721 7.69911C13.7312 8.11566 14.2754 8.34052 14.8334 8.34421L14.9562 8.19443C14.9651 7.46058 14.8095 6.73954 14.5089 6.12083C14.3471 5.79111 14.0894 5.58255 13.824 5.36766C13.6722 5.24477 13.5178 5.11978 13.3773 4.96883C12.9914 4.55412 12.6142 4.16243 12.1931 3.81683C12.0446 3.69492 11.8994 3.57018 11.7543 3.44557Z" fill="#63AB45" />
                                </svg>
                                <p className='satisfy text-2xl'>
                                    About us
                                </p>
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0444 11.0896C13.6126 11.147 13.1809 11.2044 12.7507 11.2693C11.8207 11.4094 10.8841 11.4886 9.95237 11.5675L9.95112 11.5676C9.81112 11.5795 9.67125 11.5913 9.53156 11.6033C8.46337 11.812 7.38268 11.8892 6.30356 11.8337C5.19669 11.7117 4.11081 11.3658 3.08432 10.8084V10.5435C4.11081 9.98606 5.19669 9.64021 6.30356 9.51812C7.38268 9.46268 8.46337 9.53985 9.53156 9.74852C10.6017 9.84071 11.6719 9.95591 12.7507 10.0826C13.8297 10.2094 14.8999 10.3591 15.97 10.5435V10.8084C15.3301 10.9187 14.6869 11.0041 14.0444 11.0896ZM5.20673 2.92979C5.03677 3.32042 4.85 3.6945 4.66388 4.06729C4.58104 4.2332 4.49831 4.3989 4.41728 4.56564C4.15413 5.10708 3.85589 5.62549 3.54011 6.13237C3.42519 6.31683 3.33002 6.51961 3.23642 6.71903C3.07282 7.0676 2.91402 7.40596 2.66294 7.61846C2.18844 8.00323 1.64168 8.20668 1.08403 8.206L0.970001 8.04471C0.97552 7.31238 1.14648 6.59869 1.46122 5.99413C1.6389 5.59985 1.93641 5.37417 2.23418 5.14831C2.36271 5.05081 2.49129 4.95327 2.61031 4.84212C3.00504 4.47348 3.40853 4.11636 3.8208 3.77076C4.23307 3.42516 4.65411 3.09107 5.10147 2.78003L5.20673 2.92979ZM4.21568 18.1145C4.48184 18.3431 4.74735 18.5712 5.03123 18.78L5.15404 18.6302C4.9172 18.0542 4.66281 17.5012 4.39966 16.9598C4.13651 16.4184 3.85581 15.8884 3.57511 15.37C3.49048 15.2137 3.41621 15.0449 3.34198 14.8761C3.16999 14.485 2.99816 14.0943 2.69794 13.8609C2.23879 13.4444 1.6946 13.2195 1.13656 13.2158L1.01376 13.3656C1.00489 14.0994 1.16046 14.8205 1.46111 15.4392C1.62292 15.7689 1.88056 15.9775 2.14597 16.1924C2.29782 16.3153 2.45222 16.4402 2.59268 16.5912C2.97863 17.0059 3.35582 17.3976 3.77686 17.7432C3.92538 17.8651 4.07063 17.9898 4.21568 18.1145Z" fill="#63AB45" />
                                </svg>
                            </div>
                            <div>
                                <div className='md:w-[550px] w-full
                             mt-4 flex flex-col gap-2 tracking-wide
                               md:text-5xl text-4xl md:text-start text-center font-medium'>
                                    <h1>Let’s know About Our</h1>
                                    <h1>Journey For TripRex</h1>
                                </div>
                                <div className='mt-10 flex gap-8'>
                                    <div className='flex gap-2 text-[#63AB45]'>
                                        <TbTargetArrow className='text-4xl'></TbTargetArrow>
                                        <p className='font-medium mt-1'>Mission & Vision</p>
                                    </div>
                                    <div className='text-[#787878] flex gap-3'>
                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2778 14.868C27.1424 14.8909 27.0215 14.9666 26.9419 15.0785C26.8622 15.1904 26.8303 15.3293 26.8531 15.4648C26.965 16.1279 27.0219 16.7961 27.0219 17.4509C27.0219 21.1019 25.3954 24.3976 22.7721 26.5919C22.5534 25.1555 21.933 23.8101 20.9825 22.7111C20.032 21.6121 18.7901 20.8043 17.4002 20.3808C17.9691 20.0033 18.4359 19.4909 18.7589 18.8894C19.0819 18.2878 19.2512 17.6157 19.2516 16.9329C19.2516 14.6474 17.3929 12.7887 15.1074 12.7887C12.8219 12.7887 10.9633 14.6474 10.9633 16.9329C10.9633 18.3709 11.6999 19.637 12.8147 20.3808C11.4247 20.8043 10.1828 21.6121 9.23231 22.7111C8.2818 23.8101 7.66142 25.1555 7.44275 26.5919C6.1075 25.473 5.03466 24.0742 4.30023 22.4945C3.5658 20.9148 3.18776 19.193 3.1929 17.4509C3.1929 16.7961 3.24988 16.1289 3.36177 15.4648C3.37425 15.3972 3.37315 15.3279 3.35855 15.2607C3.34395 15.1936 3.31614 15.13 3.27674 15.0737C3.23733 15.0174 3.18712 14.9695 3.12903 14.9328C3.07094 14.8961 3.00612 14.8713 2.93836 14.8599C2.8706 14.8485 2.80125 14.8507 2.73434 14.8664C2.66743 14.882 2.60431 14.9108 2.54864 14.9511C2.49298 14.9914 2.44589 15.0424 2.41011 15.101C2.37433 15.1597 2.35057 15.2249 2.34023 15.2928C2.21924 16.0058 2.1579 16.7277 2.15686 17.4509C2.15686 23.8122 6.70095 29.182 12.9607 30.2181C13.0939 30.2353 13.2285 30.2002 13.3362 30.1201C13.444 30.04 13.5164 29.9213 13.5383 29.7888C13.5602 29.6564 13.5298 29.5206 13.4536 29.4101C13.3774 29.2996 13.2612 29.2231 13.1296 29.1965C11.437 28.9169 9.82519 28.2736 8.40524 27.3109C8.65285 23.7956 11.5434 21.0771 15.1074 21.0771C18.6714 21.0771 21.5609 23.7956 21.8106 27.3109C20.3904 28.2738 18.7782 28.9171 17.0852 29.1965C17.0163 29.2055 16.9498 29.2282 16.8898 29.2634C16.8298 29.2985 16.7774 29.3454 16.7359 29.4013C16.6945 29.4571 16.6646 29.5207 16.6483 29.5883C16.6319 29.6559 16.6293 29.7261 16.6406 29.7948C16.652 29.8634 16.677 29.929 16.7143 29.9878C16.7516 30.0465 16.8003 30.0971 16.8575 30.1366C16.9148 30.1762 16.9794 30.2037 17.0475 30.2177C17.1157 30.2317 17.1859 30.2318 17.2541 30.2181C23.5139 29.182 28.058 23.8132 28.058 17.4509C28.058 16.7381 27.9958 16.0118 27.8746 15.2928C27.8636 15.2256 27.8393 15.1613 27.8033 15.1035C27.7673 15.0457 27.7202 14.9956 27.6647 14.9562C27.6092 14.9167 27.5465 14.8886 27.4801 14.8734C27.4137 14.8583 27.3449 14.8565 27.2778 14.868ZM11.9993 16.9329C11.9993 15.2193 13.3938 13.8247 15.1074 13.8247C16.821 13.8247 18.2156 15.2193 18.2156 16.9329C18.2156 18.6465 16.821 20.041 15.1074 20.041C13.3938 20.041 11.9993 18.6465 11.9993 16.9329ZM20.7808 4.47859C20.751 4.38647 20.696 4.30455 20.622 4.2421C20.5481 4.17966 20.4581 4.13919 20.3622 4.1253L17.0521 3.64458L15.5716 0.644196C15.3975 0.291941 14.8173 0.291941 14.6433 0.644196L13.1628 3.64458L9.85259 4.1253C9.75691 4.13919 9.66703 4.17959 9.59312 4.24191C9.5192 4.30423 9.4642 4.38599 9.43434 4.47795C9.40448 4.5699 9.40095 4.66838 9.42415 4.76224C9.44735 4.8561 9.49635 4.94159 9.56561 5.00905L11.961 7.34326L11.3953 10.6399C11.3789 10.7353 11.3895 10.8333 11.426 10.9229C11.4624 11.0125 11.5232 11.0901 11.6015 11.1469C11.6798 11.2038 11.7724 11.2375 11.8689 11.2444C11.9654 11.2513 12.0619 11.2311 12.1475 11.1859L15.1074 9.62877L18.0674 11.1859C18.1528 11.2317 18.2495 11.2524 18.3461 11.2454C18.4428 11.2384 18.5355 11.2042 18.6134 11.1466C18.6918 11.0897 18.7527 11.012 18.7891 10.9222C18.8255 10.8325 18.8361 10.7343 18.8196 10.6389L18.2539 7.3443L20.6503 5.00801C20.7195 4.94064 20.7685 4.85528 20.7917 4.76155C20.815 4.66781 20.8115 4.56945 20.7818 4.47756L20.7808 4.47859ZM17.3349 6.79001C17.2747 6.84871 17.2297 6.92115 17.2037 7.0011C17.1778 7.08104 17.1716 7.16611 17.1857 7.24897L17.6209 9.78004L15.3478 8.58444C15.2733 8.54558 15.1904 8.5253 15.1064 8.5253C15.0223 8.5253 14.9395 8.54558 14.865 8.58444L12.593 9.78004L13.0271 7.24897C13.0412 7.16611 13.035 7.08104 13.009 7.0011C12.9831 6.92115 12.938 6.84871 12.8779 6.79001L11.0399 4.99869L13.5803 4.62985C13.6632 4.61767 13.742 4.58559 13.8098 4.53633C13.8777 4.48707 13.9326 4.42211 13.9699 4.34701L15.1074 2.04492L16.244 4.34805C16.2812 4.42315 16.3361 4.48811 16.404 4.53736C16.4718 4.58663 16.5506 4.61871 16.6335 4.63089L19.1739 4.99972L17.336 6.79104L17.3349 6.79001Z" fill="#787878" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.71312 12.8125C2.69649 12.9079 2.70695 13.0061 2.7433 13.0959C2.77965 13.1856 2.84044 13.2634 2.91876 13.3204C2.99709 13.3773 3.08982 13.4112 3.18642 13.4181C3.28302 13.4251 3.37963 13.4048 3.46528 13.3595L5.78499 12.1391L8.10573 13.3595C8.191 13.4051 8.28745 13.4256 8.3839 13.4187C8.48035 13.4117 8.57285 13.3775 8.65068 13.3202C8.72907 13.2633 8.78994 13.1856 8.82639 13.0958C8.86283 13.0061 8.87339 12.9079 8.85686 12.8125L8.41343 10.2297L10.2908 8.40105C10.3603 8.33364 10.4096 8.24807 10.433 8.15406C10.4563 8.06005 10.4529 7.96136 10.423 7.86922C10.3931 7.77708 10.338 7.69515 10.2639 7.63276C10.1898 7.57037 10.0996 7.53001 10.0038 7.51626L7.4095 7.14018L6.24913 4.78836C6.07508 4.4361 5.49489 4.4361 5.32084 4.78836L4.16047 7.14018L1.56621 7.51626C1.47032 7.53001 1.38021 7.57037 1.3061 7.63276C1.232 7.69515 1.17687 7.77708 1.14698 7.86922C1.11709 7.96136 1.11364 8.06005 1.13702 8.15406C1.1604 8.24807 1.20966 8.33364 1.27923 8.40105L3.15654 10.2297L2.71312 12.8125ZM2.75456 8.39173L4.57799 8.12649C4.66113 8.11447 4.7401 8.08245 4.80813 8.0332C4.87616 7.98393 4.93122 7.91889 4.96858 7.84366L5.78499 6.1891L6.60139 7.84366C6.63865 7.91876 6.69355 7.98371 6.76139 8.03296C6.82923 8.08222 6.90799 8.11431 6.99094 8.12649L8.81542 8.39173L7.4955 9.67745C7.43532 9.73615 7.3903 9.80859 7.36431 9.88854C7.33833 9.96849 7.33215 10.0536 7.3463 10.1364L7.65815 11.9536L6.02638 11.0958C5.95185 11.0569 5.86904 11.0366 5.78499 11.0366C5.70093 11.0366 5.61812 11.0569 5.54359 11.0958L3.91182 11.9536L4.22263 10.1364C4.23692 10.0536 4.2309 9.96862 4.2051 9.88868C4.17929 9.80874 4.13447 9.73625 4.07448 9.67745L2.75456 8.39173ZM28.6526 7.51626L26.0583 7.14018L24.8979 4.78836C24.7239 4.4361 24.1437 4.4361 23.9696 4.78836L22.8093 7.14018L20.215 7.51626C20.1191 7.53001 20.029 7.57037 19.9549 7.63276C19.8808 7.69515 19.8257 7.77708 19.7958 7.86922C19.7659 7.96136 19.7624 8.06005 19.7858 8.15406C19.8092 8.24807 19.8585 8.33364 19.928 8.40105L21.8053 10.2297L21.3619 12.8125C21.3453 12.9079 21.3558 13.0061 21.3921 13.0959C21.4285 13.1856 21.4892 13.2634 21.5676 13.3204C21.6459 13.3773 21.7386 13.4112 21.8352 13.4181C21.9318 13.4251 22.0284 13.4048 22.1141 13.3595L24.4338 12.1391L26.7545 13.3595C26.8398 13.4051 26.9363 13.4256 27.0327 13.4187C27.1292 13.4117 27.2217 13.3775 27.2995 13.3202C27.3779 13.2633 27.4388 13.1856 27.4752 13.0958C27.5116 13.0061 27.5222 12.9079 27.5057 12.8125L27.0622 10.2297L28.9395 8.40105C29.0091 8.33364 29.0584 8.24807 29.0818 8.15406C29.1051 8.06005 29.1017 7.96136 29.0718 7.86922C29.0419 7.77708 28.9868 7.69515 28.9127 7.63276C28.8386 7.57037 28.7485 7.53001 28.6526 7.51626ZM26.1443 9.67745C26.0841 9.73615 26.0391 9.80859 26.0131 9.88854C25.9871 9.96849 25.981 10.0536 25.9951 10.1364L26.307 11.9536L24.6752 11.0958C24.6007 11.0569 24.5178 11.0366 24.4338 11.0366C24.3497 11.0366 24.2669 11.0569 24.1924 11.0958L22.5606 11.9536L22.8714 10.1364C22.8857 10.0536 22.8797 9.96862 22.8539 9.88868C22.8281 9.80874 22.7833 9.73625 22.7233 9.67745L21.4034 8.39173L23.2268 8.12649C23.3099 8.11447 23.3889 8.08245 23.4569 8.0332C23.525 7.98393 23.58 7.91889 23.6174 7.84366L24.4338 6.1891L25.2502 7.84366C25.2875 7.91876 25.3424 7.98371 25.4102 8.03296C25.478 8.08222 25.5568 8.11431 25.6397 8.12649L27.4642 8.39173L26.1443 9.67745Z" fill="#787878" />
                                            <path d="M15.1104 30.4015C15.3965 30.4015 15.6285 30.1696 15.6285 29.8835C15.6285 29.5974 15.3965 29.3655 15.1104 29.3655C14.8243 29.3655 14.5924 29.5974 14.5924 29.8835C14.5924 30.1696 14.8243 30.4015 15.1104 30.4015Z" fill="#787878" />
                                        </svg>
                                        <p className='font-medium mt-1'> Focus On Customer</p>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <p className='text-[#787878] tracking-wide w-full text-center md:text-start md:w-[638px]'>
                                        Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed
                                        vehicula tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue.
                                        Suspendisse ullamcorper, enim vitae tristique blandit, eratot augue torel tempo
                                        libero, non porta lectus tortor et elit. Quisque finibusot enim et eratourgt gravida,
                                        eu elementum turpis lacinia. Integer female go tellus ligula, attendora and
                                        condimentum.
                                    </p>
                                    <div className='md:flex justify-between  md:w-[636px]'>
                                        <button className='text-white  md:ml-0 ml-28 w-[162.97999572753906px] bg-[#63AB45] btn mt-10'>
                                            More About
                                        </button>
                                        <div className='flex mt-8 md:mt-11  md:ml-0 ml-28'>
                                            <div className='w-8 h-8 bg-[#D9D9D9] rounded-full'></div>
                                            <div className='w-8 h-8 -ml-2 bg-[#D9D9D9] rounded-full'></div>
                                            <div className='w-8 h-8  -ml-2 bg-[#D9D9D9] rounded-full'></div>
                                            <div className='w-8 h-8 -ml-2 bg-[#D9D9D9] rounded-full'></div>
                                            <div className='font-bold -mt-1 ml-2'>
                                                0+
                                                <p className='font-light -mt-2 text-[#787878]'>
                                                    Customer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[647px] md:h-[695px]">
                            <div className="flex flex-col md:flex-row">
                                <motion.div
                                    className="flex flex-col w-full md:w-[323.5px] gap-3 md:gap-6 items-center md:items-start"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <motion.div
                                        className="w-full max-w-[307px] h-[200px] md:h-[307px] bg-[#D9D9D9] rounded-2xl"
                                        animate={{ x: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="w-[80%] md:w-[251px] h-[200px] md:h-[304px] md:mt-3 md:ml-13 bg-[#D9D9D9] rounded-2xl"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.div>
                                <motion.div
                                    className="flex flex-col w-full md:w-[323.5px] gap-3 md:gap-10 mt-3 md:mt-0 md:ml-8 items-center md:items-start"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        className="w-full max-w-[307px] h-[150px] md:h-[217px] md:mt-8 bg-[#D9D9D9] rounded-2xl"
                                        animate={{ x: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="w-full max-w-[307px] h-[250px] md:h-[423px] md:-mt-2 bg-[#D9D9D9] rounded-2xl"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ThirdLayer></ThirdLayer>
            <ForthLayer></ForthLayer>
        </div>


    );
};

export default SecondLayer;